import React from 'react';

const Review = ({ review }) => {
    const { name, comment, picture, rating } = review
    //console.log(review)


    return (
        <div class="card max-w-lg bg-base-100 shadow-xl py-5">
                <div class="avatar justify-center">
                    <div class="w-24 rounded-full">
                        <img src={picture} alt='' />
                    </div>
                </div>
                <div class="card-body text-center">
                    <h2 class="font-bold text-xl mb-2">{name}</h2>
                    <p><span className='font-semibold'>Rating-</span> {rating}</p>
                    <p>{comment}</p>
                </div>
            </div>
    )
       

}
;

export default Review;