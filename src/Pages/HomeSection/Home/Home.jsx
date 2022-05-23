import React from 'react';
import './Home.css'
import SecondBanner from '../SecondBanner/SecondBanner';
import TopBanner from '../TopBanner/TopBanner';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div className='mb-80 home'>
            <TopBanner/>
            <SecondBanner/>
            {/* <ThirdBanner/> */}
            <Products/>
        </div>
    );
};

export default Home;