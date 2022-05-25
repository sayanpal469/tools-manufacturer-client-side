import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import useOrders from '../../../Hooks/useOrders';
import Loading from '../../Loading/Loading';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const { displayName, email, photoURL } = user;
    const [orders] = useOrders()
    //console.log(orders);

    if (loading) {
        return <Loading />
    }
    //console.log(user);
    return (
        <div className='px-20 flex justify-center items-center mt-20'>
            <div class="card w-96 bg-base-100 shadow-xl py-5">
                <div class="avatar justify-center">
                    <div class="w-24 rounded-full">
                        <img src={photoURL} alt='' />
                    </div>
                    </div>
                    <div class="card-body text-center">
                        <h2 class="font-bold text-xl mb-2">{displayName}</h2>
                        <p><span className='font-semibold'>Email-</span> {email}</p>
                        <p><span className='font-semibold'>Address-</span> {orders[0]?.address}</p>
                        <p><span className='font-semibold'>Phone Number-</span> {orders[0]?.phoneNumber}</p>
                        <div class="card-actions justify-center mt-2">
                            <button class="btn btn-warning text-white">Update</button>
                        </div>
                    </div>
                </div>
            </div>
            );
};

            export default MyProfile;