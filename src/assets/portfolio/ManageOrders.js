import React from 'react';
import { useQuery } from 'react-query';
import  Loading from '../Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import AdminOrder from './AdminOrder';

const ManageOrders = () => {
    const [user]= useAuthState(auth);
    const {data:orders,isLoading,refetch}= useQuery(['order,orders'],()=>fetch(`https://rocky-harbor-76286.herokuapp.com/order`,{
        method:'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
        })
      
        .then(res=>res.json())) 
    refetch()
    if(isLoading){
        return <Loading></Loading>
    }





    return (
            <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>

            {
                orders.map(AllSingleOrder=><AdminOrder key={AllSingleOrder._id} AllSingleOrder={AllSingleOrder}></AdminOrder>)
            }
    
        </tbody>
        </table>
        </div>
  

    );
};

export default ManageOrders;