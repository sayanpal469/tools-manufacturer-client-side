import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    return (
        <div class="card card-compact max-w-lg bg-base-100 shadow-xl">
            <figure><img className='w-60 product-img' src={product.picture} alt="tools" /></figure>
            <div class="card-body">
                <h2 class="card-title">{product.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-warning text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;