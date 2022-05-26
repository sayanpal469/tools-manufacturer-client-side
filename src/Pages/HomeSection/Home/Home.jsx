import React from 'react';
import './Home.css'
import SecondBanner from '../SecondBanner/SecondBanner';
import TopBanner from '../TopBanner/TopBanner';
import Products from '../Products/Products';
import ThirdBanner from '../ThirdBanner/ThirdBanner';
import BusinessReview from '../BusinessReview/BusinessReview';
import Footer from '../Footer/Footer';
import CustomerReview from '../CustomerReview/CustomerReview';
import FifthBanner from '../FifthBanner/FifthBanner';


const Home = () => {
    return (
        <div className='home'>
            <TopBanner/>
            <SecondBanner/>
            <Products/>
            <ThirdBanner/>
            <BusinessReview/>
            <CustomerReview/>
            <FifthBanner/>
            <Footer/>
        </div>
    );
};

export default Home;