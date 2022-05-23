import React from 'react';
import SecondBanner from '../SecondBanner/SecondBanner';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div className='mb-80'>
            <TopBanner/>
            <SecondBanner/>
            {/* <ThirdBanner/> */}
        </div>
    );
};

export default Home;