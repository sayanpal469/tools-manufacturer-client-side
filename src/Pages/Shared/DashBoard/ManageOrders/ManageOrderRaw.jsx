import React from 'react';
import swal from 'sweetalert';

const ManageOrderRaw = ({order, index}) => {
    const { productName, productImg, totalPrice, orderQuantity, _id, paid } = order


    const handleStatus=(e)=>{
        e.preventDefault()
        const currentStatus= e.target.value
        const payment={
            status:currentStatus
        }

        fetch(`https://hidden-sea-29105.herokuapp.com/paymentOrder/${_id}`,{
            method:'PUT',
            headers:{
              'content-type':'application/json',
            },
            body: JSON.stringify(payment)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                alert('Status Updated')
                console.log(_id);
            }
        })
    }





    const handelDelete = (id) => {
        swal({
            title: "Are You Sure to Delete?",
            text: `Item Name: ${productName}`,
            icon: "error",
            buttons: ["Cancel", "Delete"],
            closeOnClickOutside: false,
          })
          .then((willPay) => {
            if (willPay) {
                swal("Item Deleted!", "Successfully Item Deleted!", "success")
                const url= `https://hidden-sea-29105.herokuapp.com/orders/${id}`
                fetch(url,{
                  method:'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
                  if(data.deletedCount>0){
                 }
             })
            } 
          });
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
            <td>{
                  paid ? <select onChange={handleStatus} name="status" className='btn btn-outline btn-success' id="paymentStatus">
                  <option value="pending">Pending</option>
                  <option value="shipped">Shipped</option>
                </select>:<button className='btn btn-outline btn-accent'>Not Paid</button>
              
              }</td>

            <td>
                <button onClick={() => handelDelete(_id)} className='btn btn-error text-white'>Delete</button>
            </td>
        </tr>
    );
};

export default ManageOrderRaw;