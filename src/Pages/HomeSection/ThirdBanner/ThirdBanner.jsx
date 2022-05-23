import React from 'react';
import one from '../../../assets/third-banner/1.webp'
import two from '../../../assets/third-banner/2.webp'
import three from '../../../assets/third-banner/3.webp'

const ThirdBanner = () => {
    return (
        <div className='flex justify-center mt-32 px-12'>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-20'>
            <div>
                <img src={one} alt="" />
            </div>
            <div>
                <img src={two} alt="" />
            </div>
            <div>
                <img src={three} alt="" />
            </div>
        </div>
        </div>
    );
};

export default ThirdBanner;