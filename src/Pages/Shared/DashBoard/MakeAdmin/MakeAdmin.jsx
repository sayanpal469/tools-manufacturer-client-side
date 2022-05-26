import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import AdminRaw from './AdminRaw';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://hidden-sea-29105.herokuapp.com/user', {
        method: 'GET',
        // headers:{
        //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
        // }
    }).then(res => res.json()));
    
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="overflow-x-auto mt-5">
                <table class="table w-full">
                <thead>
                    <tr>
                    <th></th>
                    <th>Email</th>
                    <th>Make Admin</th>
                    <th>Delete User</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <AdminRaw
                        key={user?._id}
                        user={user}
                        index={index}
                        refetch={refetch}
                        ></AdminRaw>)
                    }
                </tbody>
                </table>
            </div>
    </div>
    );
};

export default MakeAdmin;