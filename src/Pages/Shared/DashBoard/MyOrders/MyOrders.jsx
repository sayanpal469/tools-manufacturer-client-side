import React, { useEffect, useState } from 'react';
import MyOrderRaw from './MyOrderRaw';

const MyOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect( () => {
        fetch(`http://localhost:5000/orders`)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    },[])
    return (
        <div>
            <div class="overflow-x-auto mt-5">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Payment</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
          orders.map((order,index) => <MyOrderRaw
          key={order._id}
          index={index}
          order={order}
          ></MyOrderRaw>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;