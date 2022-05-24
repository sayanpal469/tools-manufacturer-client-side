import React, { useEffect, useState } from 'react';

const useAdmin = () => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)

    useEffect( () => {
        
    }, [])
    return [admin, adminLoading]
};

export default useAdmin;