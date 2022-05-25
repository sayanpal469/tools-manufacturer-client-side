import React from 'react';
import useReview from '../../Hooks/useReview'
import Review from './Review';

const CustomerReview = () => {
    const [reviews] = useReview()
    //console.log(reviews);
    
    return (
        <div className='my-20 px-12'>
            <h1 className='text-center mb-20 text-orange-400 text-5xl'>What clients is say</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default CustomerReview;