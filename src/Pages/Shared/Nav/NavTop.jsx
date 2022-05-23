import React from 'react';
import { Link } from 'react-router-dom';
import { FaShuttleVan } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import { CgMail } from 'react-icons/cg';
import { GrInstagram } from 'react-icons/gr';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

const NavTop = () => {
    return (
         <div className='hidden lg:block'>
             <div class="navbar bg-black text-white px-12 text-sm">
            <div class="flex-1 text-sm">
                <Link to='#' class="btn btn-ghost normal-case"><FaShuttleVan className='mr-2 text-orange-400 text-xl'></FaShuttleVan> <span>Sector V, Kolkata, West Bengal 700091</span></Link> |
                <Link to='#' class="btn btn-ghost normal-case"> <AiFillPhone className='mr-2 text-orange-400 text-xl'></AiFillPhone>+91 7872358979</Link> |
                <Link to='#' class="btn btn-ghost normal-case"><CgMail className='mr-2 text-orange-400 text-xl'></CgMail> jantrick1223@gmail.com</Link>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to='#'><GrInstagram></GrInstagram></Link></li>
                    <li><Link to='#'><BsFacebook></BsFacebook></Link></li>
                    <li><Link to='#'><BsTwitter></BsTwitter></Link></li>
                    <li><Link to='#'><BsLinkedin></BsLinkedin></Link></li>
                </ul>
            </div>
        </div>
         </div>
    );
};

export default NavTop;