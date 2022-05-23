import React from 'react';
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div className='top-banner bg-cover lg:h-[80vh] mb-20 grid lg:grid-cols-2 sm:grid-cols-1 items-center'>
            <div></div>
            <div className='text-center'>
                <h1 className='text-white text-8xl font-bold shadow-lg '>NEED <br /> NEW TOOLS?</h1>
                <button className='btn btn-warning text-xl text-white mt-5'>Read More</button>
            </div>
        </div>
    );
};

export default TopBanner;