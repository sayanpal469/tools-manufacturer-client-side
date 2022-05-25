import React, { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token,setToken] = useState([])

    useEffect( () => {
        const email = user?.email;
        const currentUser = {email: email};
        if(email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                const accessToken = data.token;
                console.log(data);
                localStorage.setItem('accessToken', accessToken)
                setToken(accessToken)
            })
        }
    },[user])

    return [token]
};

export default useToken;