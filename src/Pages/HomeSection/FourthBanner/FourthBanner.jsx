import React from 'react';
import gif from '../../../assets/Fourth-banner/mobile (1).gif'

const FourthBanner = () => {
    return (
        <div className='grid lg:grid-cols-2 px-12 mt-20 text-center items-center bg-slate-100 py-28'>
            <div>
                <h1 className='text-8xl font-bold'>How to use this <br /> website?</h1>
            </div>
            <div>
                <img src={gif} alt="" />
            </div>
        </div>
    );
};

export default FourthBanner;