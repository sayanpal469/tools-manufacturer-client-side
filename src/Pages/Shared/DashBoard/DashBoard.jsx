import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile bg-slate-100">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side shadow-xl">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link className='' to='#'>My Profile</Link></li>
                    <li><Link className='my-5' to='#'>My Orders</Link></li>
                    <li><Link className='' to='#'>Add a Review</Link></li>
                    <li><Link className='my-5' to='#'>Manage All Orders</Link></li>
                    <li><Link className='' to='#'>Add a Product</Link></li>
                    <li><Link className='my-5' to='#'>Make Admin</Link></li>
                    <li><Link className='' to='#'>Manage Product</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;