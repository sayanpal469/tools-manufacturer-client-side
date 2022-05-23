import React from 'react';
import './Home.css'
import SecondBanner from '../SecondBanner/SecondBanner';
import TopBanner from '../TopBanner/TopBanner';
import Products from '../Products/Products';
import ThirdBanner from '../ThirdBanner/ThirdBanner';
import FourthBanner from '../FourthBanner/FourthBanner';


const Home = () => {
    return (
        <div className='mb-80 home'>
            <TopBanner/>
            <SecondBanner/>
            <Products/>
            <ThirdBanner/>
            <FourthBanner/>
        </div>
    );
};

export default Home;