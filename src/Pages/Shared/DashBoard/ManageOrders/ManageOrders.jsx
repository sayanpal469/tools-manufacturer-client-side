import React from 'react';
import useOrders from '../../../Hooks/useOrders';
import ManageOrderRaw from './ManageOrderRaw';



const ManageOrders = () => {
    const [orders] = useOrders()
    return (
        <div>
      <div class="overflow-x-auto mt-5">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order, index) => <ManageOrderRaw
                key={order._id}
                index={index}
                order={order}
              ></ManageOrderRaw>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ManageOrders;