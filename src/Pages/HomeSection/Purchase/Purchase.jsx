import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Purchase = () => {
    const [user] = useAuthState(auth)
    const [totalPrice, setTotalPrice] = useState(0)
    const { id } = useParams()
    const { data: product, isLoading, refetch } = useQuery('produt', () => fetch(`http://localhost:5000/tools/${id}`).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    const { email, displayName } = user
    const { picture, name, minQuantity, availableQuantity, price, _id } = product;

    const getPrice = (e) => {
        const orderQuantity = e.target.value;
        //console.log(orderQuantity);
        const newPrice = parseInt(orderQuantity) * price;
        setTotalPrice(newPrice)
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        const productName = product.name;
        const productImg = product.picture
        const userName = user.displayName;
        const email = user.email;
        const availableQuantity = product.availableQuantity;
        const minQuantity = product.minQuantity;
        const price = product.price;
        const totalPrice = e.target.totalPrice.value; 
        const orderQuantity = e.target.orderQuantity.value;
        const address = e.target.address.value;
        const phoneNumber = e.target.phone.value;
        const orderInfo = { productName, productImg, userName, email, availableQuantity, minQuantity, price, totalPrice, orderQuantity, address, phoneNumber }
        //console.log(orderInfo);

        if(orderQuantity > minQuantity) {
            fetch(`http://localhost:5000/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(orderInfo)
            })
            .then(res => res.json())
            .then(data => {
                alert('Order Placed')
                // orderQuantity.value('');
                // address.value('');
                // e.target.phone.value('');
            })
        } else {
            alert("You can't order below minimum quantity")
        }

    }
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center px-20 gap-10 my-10'>
            <div className='w-[100%] mx-auto'>
                <img className='' src={picture} alt="" />
            </div>
            <div>
                <form onSubmit={handelSubmit} action="">
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
                        <div class="mb-5">
                            <label for="name" class="block mb-2 font-bold text-gray-600">Name</label>
                            <input type="text" value={displayName} readOnly disabled name="name" class="border border-gray-300 shadow p-3 w-full  rounded " />
                        </div>

                        <div class="mb-5">
                            <label for="twitter" class="block mb-2 font-bold text-gray-600">Email</label>
                            <input type="email" disabled value={email} readOnly  class="border  shadow p-3 w-full rounded " />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
                        <div class="mb-5">
                            <label for="name" class="block mb-2 font-bold text-gray-600">Product Name</label>
                            <input type="text" value={name} readOnly disabled class="border border-gray-300 shadow p-3 w-full  rounded " />
                        </div>

                        <div class="mb-5">
                            <label for="twitter" class="block mb-2 font-bold text-gray-600">Price</label>
                            <input  value={price} name="price" class="border disabled  shadow p-3 w-full rounded " />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
                        <div class="mb-5">
                            <label for="name" class="block mb-2 font-bold text-gray-600">Available Quantity</label>
                            <input type="text" value={availableQuantity} disabled name="availableQuantity" class="border border-gray-300 shadow p-3 w-full rounded " />
                        </div>

                        <div class="mb-5">
                            <label for="twitter" class="block mb-2 font-bold text-gray-600">Minimum Order</label>
                            <input disabled type="text" value={minQuantity} class="border shadow p-3 w-full rounded " />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
                        <div class="mb-5">
                            <label for="name" class="block mb-2 font-bold text-gray-600">Order your quantity</label>
                            <input onChange={getPrice} name='orderQuantity' type="number" placeholder='Please Give Your Order Quantity' class="border border-gray-300 shadow p-3 w-full  rounded " />
                        </div>

                        <div class="mb-5">
                            <label for="twitter" class="block mb-2 font-bold text-gray-600">Total Price</label>
                            <input type="text" disabled value={totalPrice} name="totalPrice" class="border  shadow p-3 w-full rounded " />
                        </div>
                    </div>

                    <label for="phone" class="block mb-2 font-bold text-gray-600">Phone Number</label>
                    <input type="tel" required placeholder='Enter your phone number' name="phone" class="border border-gray-300 shadow p-3 w-full mb-5  rounded " />

                    <label for="name" class="block mb-2 font-bold text-gray-600">Address</label>
                    <input type="text" required placeholder='Enter Your Delivery Address' name="address" class="border border-gray-300 shadow p-3 w-full mb-5  rounded " />

                    <input type='submit' value='Book Now' class="w-full btn btn-warning text-white" />
                </form>
            </div>
        </div>
    );
};

export default Purchase;