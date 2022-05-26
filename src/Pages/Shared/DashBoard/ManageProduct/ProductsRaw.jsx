import React from 'react';
import { Link } from 'react-router-dom';

const ProductsRaw = ({product, index, refetch}) => {
    const {picture, name, price, availableQuantity, _id} = product;

    const handelDelete = (id) => {
        fetch(`http://localhost:5000/tools/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            alert('Product deleted')
            refetch()
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-14 rounded-full">
                        <img src={picture}  alt=''/>
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>${price}</td>
            <td>{availableQuantity}</td>
            <td>
                <button onClick={ () => handelDelete(_id)} className='btn btn-error text-white'>Delete</button>
            </td>
        </tr>
    );
};

export default ProductsRaw;