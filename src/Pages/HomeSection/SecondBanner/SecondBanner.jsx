import React from 'react';
import boxConsult from '../../../assets/second-banner/box-consult.png'
import Excavater from '../../../assets/second-banner/excavater.png'
import firePowder from '../../../assets/second-banner/fire-powder.png'
import Heavy from '../../../assets/second-banner/heavy.png'
import Oil from '../../../assets/second-banner/oil-incorporated.png'

const SecondBanner = () => {
    return (
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-5 px-20 mb-20'>
            <div>
                <img src={boxConsult} alt="" />
            </div>
            <div>
                <img src={Excavater} alt="" />
            </div>
            <div>
                <img src={firePowder} alt="" />
            </div>
            <div>
                <img src={Heavy} alt="" />
            </div>
            <div>
                <img src={Oil} alt="" />
            </div>
        </div>
    );
};

export default SecondBanner;