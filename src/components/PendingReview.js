import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PendingReview = ({ review, item }) => {
    // console.log(review);
    return (
        <>
            <Row className="review">
                <Col xs={6} sm={6} md={3} lg={3}>
                    <div className="review-item">{review.restaurant} </div>
                </Col>
                <Col xs={0} sm={0} md={3} lg={3} className="extra">
                    <div className="review-item">{review.location}</div>
                </Col>
                <Col xs={0} sm={0} md={3} lg={3} className="extra">
                    <div className="review-item">{review.interests}</div>
                </Col>
                <Col xs={6} sm={6} md={3} lg={3}>
                    <div className="review-item">{review.name}</div>
                </Col>
            </Row>
            {/* <div className="review-item">{review.restaurant} </div>
            <div className="review-item">{review.location}</div>
            <div className="review-item">Interested In: {review.interests}</div>
            <div className="review-item">Submitted By: {review.name}</div> */}
        </>
    )
}

export default PendingReview;