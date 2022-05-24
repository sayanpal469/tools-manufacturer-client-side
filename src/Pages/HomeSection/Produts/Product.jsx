import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const navigate = useNavigate()

    const purchaseProduct = () => {
        navigate(`/purchase/${product._id}`)
    }
    return (
        <div class="card product-card card-compact max-w-lg bg-base-100 shadow-xl pb-12 mt-16">
            <figure><img className='w-60 product-img' src={product.picture} alt="tools" /></figure>
            <div class="card-body product-body text-center">
                <h2 class="text-2xl font-bold">{product.name}</h2>
                <p className='my-2'>Price: {product.price}</p>
                <p className='my-2'>Available Quantity: {product.availableQuantity}</p>
                <p className='mb-2'>Minimum Quantity: {product.minQuantity}</p>
                <p>{product.description}</p>
                <div class="card-actions justify-center my-3">
                    <button onClick={purchaseProduct} class="btn btn-warning text-white">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;