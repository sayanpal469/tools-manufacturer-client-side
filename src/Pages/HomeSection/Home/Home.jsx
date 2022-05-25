import React from 'react';
import './Home.css'
import SecondBanner from '../SecondBanner/SecondBanner';
import TopBanner from '../TopBanner/TopBanner';
import Products from '../Products/Products';
import ThirdBanner from '../ThirdBanner/ThirdBanner';
import FourthBanner from '../FourthBanner/FourthBanner';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div className='home'>
            <TopBanner/>
            <SecondBanner/>
            <Products/>
            <ThirdBanner/>
            <FourthBanner/>
            <Footer/>
        </div>
    );
};

export default Home;