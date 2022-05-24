import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Nav = () => {
  const [user, loading, error] = useAuthState(auth);
  
  const logout = () => {
    signOut(auth);
  };

    const menuItems = <>
    <li><Link className='font-bold' to='/home'>Home</Link></li>
    <li><Link className='font-bold' to='/blogs'>Blogs</Link></li>
    {user && <li><Link className='font-bold' to='/dashBoard'>Dashboard</Link></li>}
    <li><Link className='font-bold' to='/portfolio'>Portfolio</Link></li>
    {user ? <li><Link onClick={logout} className='font-bold' to='/login'>Log Out</Link></li> : <li><Link className='font-bold' to='/login'>Login</Link></li>}
    </>
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar py-3 px-12 bg-base-100">
                <div className="navbar">
                  <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                          {menuItems}
                    </ul>
                  </div>
                  <Link to='/' className="btn btn-ghost font-bold text-5xl normal-case"><span className=' text-orange-400 uppercase'>Jan</span>trick</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal p-0">
                          {menuItems}
                  </ul>
                </div>

              </div>
        </div>
    );
};

export default Nav;