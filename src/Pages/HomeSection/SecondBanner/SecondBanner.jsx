import React from 'react';
import one from '../../../assets/second-banner/1.webp'
import two from '../../../assets/second-banner/2.webp'
import three from '../../../assets/second-banner/3.webp'

const SecondBanner = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 px-20 mb-20'>
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
    );
};

export default SecondBanner;