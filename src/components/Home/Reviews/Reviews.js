import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';


const Reviews = () => {
    const [reviewsInfo, setReviewsInfo] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5055/getReview')
        .then(res => res.json())
        .then(data => setReviewsInfo(data))
    },[])

    return (
        <section className="mt-5 container py-5">
            <h3 className="text-center pt-5 pb-3">Testimonials</h3>
            <div className="row pt-4">
                {
                    reviewsInfo.map( review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Reviews;