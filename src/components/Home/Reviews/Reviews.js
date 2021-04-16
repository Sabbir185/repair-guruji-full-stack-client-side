import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import one from '../../../images/review/1.jpg'
import two from '../../../images/review/2.jpg'
import three from '../../../images/review/3.jpg'

const reviewsInfo = [
    {
        id: 1,
        image: one,
        name: "Sabbir Ahmmed",
        occupation: 'student',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        rating: 5
    },
    {
        id: 2,
        image: two,
        name: "Motiur Rahman",
        occupation: 'student',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        rating: 4
    },
    {
        id: 3,
        image: three,
        name: "Nazib Khan",
        occupation: 'student',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        rating: 3
    },
    {
        id: 4,
        image: three,
        name: "Mahbub",
        occupation: 'student',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        rating: 1
    },
]

const Reviews = () => {
    return (
        <section className="mt-5 container py-5">
            <h3 className="text-center pt-5 pb-3">Testimonials</h3>
            <div className="row pt-4">
                {
                    reviewsInfo.map( review => <ReviewCard key={review.id} review={review}></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Reviews;