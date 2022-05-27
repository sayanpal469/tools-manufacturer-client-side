import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MyOrderRaw = ({ order, index }) => {
    const { productName, productImg, totalPrice, orderQuantity, _id, status, paid } = order
    //console.log(order);
    const navigate = useNavigate()

    const handelDelete = (id) => {
        fetch(`https://hidden-sea-29105.herokuapp.com/orders/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-14 rounded-full">
                        <img src={productImg}  alt=''/>
                    </div>
                </div>
            </td>
            <td>{productName}</td>
            <td>${totalPrice}</td>
            <td>{orderQuantity}</td>
            <td>
            {
                paid ? <p>Already Paid</p>
                :
                <Link to={`/dashboard/payment/${order?._id}`}><button class="btn btn-success text-white">Pay Now</button></Link>
            }
            </td>

            <td>
                {
                    status === "pending" || status === "shipped" ? <button class="btn btn-success text-white">{status}</button>
                    :
                    ''
                }
            </td>

            <td>
                <button onClick={() => handelDelete(_id)} className='btn btn-error text-white'>Delete</button>
            </td>
        </tr>
    );
};

export default MyOrderRaw;