import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Product from '../Produts/Product';

const Products = () => {
    const {data: products, isLoading, refetch} = useQuery('doctors', () => fetch('products.json').then(res=> res.json()))

    if(isLoading) {
        return <Loading/>
    }
    return (
        <div>
            <h1 className='text-5xl font-bold text-center'>New Products On Market</h1>
            <div className='grid lg:grid-cols-4 gap-6 px-12 mt-10'>
                {
                    products.map(product => <Product
                        key={product?.id}
                        product={product} 
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;