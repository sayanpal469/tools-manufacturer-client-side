import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaUserAlt } from 'react-icons/fa';
import { Link,  Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile bg-slate-100 pt-1">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col px-12">
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side shadow-xl rounded-2xl">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 text-white bg-orange-400 pl-8">
                    <li><Link className='' to='/dashBoard'>
                        <FaUserAlt className='text-2xl'></FaUserAlt>
                    </Link></li>
                    <li><Link className='my-3' to='/dashBoard/myOrders'>My Orders</Link></li>
                    <li><Link className='' to='/dashboard/addReview'>Add a Review</Link></li>

                    {
                        admin && <>
                            <li><Link className='my-3' to='/dashboard/makeAdmin'>Make Admin</Link></li>
                            <li><Link className='' to='/dashboard/manageAllOrders'>Manage All Orders</Link></li>
                            <li><Link className='my-3' to='/dashboard/addProduct'>Add a Product</Link></li>
                            <li><Link className='' to='/dashboard/manegeProduct'>Manage Product</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;