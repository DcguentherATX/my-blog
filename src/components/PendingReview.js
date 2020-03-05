import React from 'react';

const PendingReview = ({ review, item }) => {
    console.log(review);
    return (
        <div className="review">
            <div className="list-number">{item}.</div>
            <div className="review-item">{review.restaurant} </div>
            <div className="review-item">{review.location}</div>
            <div className="review-item">Interested In: {review.interests}</div>
            <div className="review-item">Submitted By: {review.name}</div>
        </div>
    )
}

export default PendingReview;