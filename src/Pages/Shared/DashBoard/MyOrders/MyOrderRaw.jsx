import React from 'react';

const MyOrderRaw = ({order, index}) => {
    const {productName, totalPrice, orderQuantity} = order
    //console.log(order);
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{productName}</td>
        <td>{totalPrice}</td>
        <td>{orderQuantity}</td>
        <td>
            <button className='btn btn-success text-white'>Pay</button>
        </td>
        <td>
        <button className='btn btn-error text-white'>Delete</button>
        </td>
      </tr>
    );
};

export default MyOrderRaw;