import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const CheckOutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState('');

    const [user] = useAuthState(auth);

    const { totalPrice, _id } = order
    const email = user?.email;
    useEffect(() => {
        fetch('https://hidden-sea-29105.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error?.message)
        }
        else {
            setCardError('')
        }
        //confirm card payment

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: email,
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError.message)
        }
        else {
            setCardError('')
            console.log(paymentIntent)
            setSuccess('Congrats! Your Payment is Completed')
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
            <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn  btn-success m-5' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }

            {
                success && <p className='text-green-500'>{success}</p>
            }
        </>
    );
};

export default CheckOutForm 