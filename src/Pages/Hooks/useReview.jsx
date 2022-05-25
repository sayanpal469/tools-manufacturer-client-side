import React, { useEffect, useState } from 'react';

const useReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch(`http://localhost:5000/reviews`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    },[reviews])

    return [reviews, setReviews]
};

export default useReview;