import React from 'react';
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from '../Loading/Loading';
import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51L2BSOSAYOxqddWpvHOE3UQ9LQJVDDdCTg8TG5CWZRU2Ccm33dx7rAHOTW445yAg5vuC8Lwv31qFO4exW2kjJvyp00XhlwKfCk');

const Payment = () => {
    const { id } = useParams()

    const url = `https://hidden-sea-29105.herokuapp.com/myOrders/${id}`;
    const { data: order, isLoading } = useQuery(["order", id], () =>
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())

    );
    //console.log(order);

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 class="card-title">Hello,<span className="font-bold text-success">{order?.email}</span> </h2>
                    <h2 class="card-title">Pay for {order?.productName} </h2>
                    <p><span className='font-bold'>Deliver </span>within 7 days<br></br>
                        <span className='font-bold'>Return policy </span> in 7 days
                    </p>
                    <p><span className='font-bold'>Pay</span> : ${order?.totalPrice}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm order={order} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;