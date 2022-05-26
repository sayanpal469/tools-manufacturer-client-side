import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import ProductsRaw from './ProductsRaw';

const ManageProduct = () => {
    const {data: products, isLoading, refetch} = useQuery('products', () => fetch('http://localhost:5000/tools', ).then(res=> res.json()))
    console.log(products);

    if(isLoading) {
        return <Loading/>
    }

    return (
        <div className='pb-10'>
      <div class="overflow-x-auto mt-5  rounded-xl">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product, index) => <ProductsRaw
                key={product?._id}
                index={index}
                product={product}
                refetch={refetch}
              ></ProductsRaw>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ManageProduct;