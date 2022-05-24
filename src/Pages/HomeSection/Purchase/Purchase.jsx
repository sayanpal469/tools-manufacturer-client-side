import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id} = useParams()
    const {data: products, isLoading, refetch} = useQuery('doctors', () => fetch().then(res=> res.json()))
    return (
        <div>
            {id}
        </div>
    );
};

export default Purchase;