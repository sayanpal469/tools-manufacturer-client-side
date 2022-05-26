import React from 'react';

const AdminRaw = ({user, index, refetch}) => {
    const {email, role, _id} = user;
    //console.log(user);

    const deleteUser = () => {
        fetch(`https://hidden-sea-29105.herokuapp.com/user/${email}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            refetch()
            alert('User deleted')
            console.log(data);
        })
    }

    const makeAdmin = () => {
        fetch(`https://hidden-sea-29105.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403) {
                alert('Failed to make an admin')
            }
            return res.json()
        })
        .then(data => {
            if(data.modifiedCount > 0) {
                refetch()
                alert('Successfully made an admin')
            }
        })

        
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>
                {role !== 'admin' && <button onClick={makeAdmin} className='btn btn-success text-white'>Make Admin</button>}
            </td>
            <td>
                <button onClick={deleteUser} className='btn btn-error text-white'>Delete</button>
            </td>
        </tr>
    );
};

export default AdminRaw;