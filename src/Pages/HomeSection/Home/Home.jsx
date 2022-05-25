import React from 'react';
import './Home.css'
import SecondBanner from '../SecondBanner/SecondBanner';
import TopBanner from '../TopBanner/TopBanner';
import Products from '../Products/Products';
import ThirdBanner from '../ThirdBanner/ThirdBanner';
import BusinessReview from '../BusinessReview/BusinessReview';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div className='home'>
            <TopBanner/>
            <SecondBanner/>
            <Products/>
            <ThirdBanner/>
            <BusinessReview/>
            <Footer/>
        </div>
    );
};

export default Home;