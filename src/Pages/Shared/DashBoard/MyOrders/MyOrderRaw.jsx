import React from 'react';

const MyOrderRaw = ({ order, index }) => {
    const { productName, productImg, totalPrice, orderQuantity, _id } = order
    //console.log(order);

    const handelDelete = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
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
                <button className='btn btn-success text-white'>Pay</button>
            </td>
            <td>
                <button onClick={() => handelDelete(_id)} className='btn btn-error text-white'>Delete</button>
            </td>
        </tr>
    );
};

export default MyOrderRaw;