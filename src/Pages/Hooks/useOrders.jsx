import React, { useEffect, useState } from 'react';

const useOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect( () => {
        fetch(`http://localhost:5000/orders`)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    },[orders])
    
    return [orders, setOrders]
};

export default useOrders;