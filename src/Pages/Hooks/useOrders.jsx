import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const useOrders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    const {email} = user
    useEffect( () => {
        fetch(`http://localhost:5000/orders/${email}`)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    },[orders])
    
    return [orders, setOrders]
};

export default useOrders;