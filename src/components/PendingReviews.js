import React, { useState, useEffect } from 'react';
import PendingReview from './PendingReview';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from 'axios';

const PendingReviews = ( {pendingReviews }) => {
    // console.log(props);

    return (
        <>
            <h2 className="pending-title">Pending Reviews</h2>
            <Container className="review-list">
                <Row className="title-row">
                    <Col sm={6} md={3} lg={3}>
                        Restaurant Name
                    </Col>
                    <Col sm={6} md={3} lg={3} className="extra">
                        Location
                    </Col>
                    <Col sm={0} md={3} lg={3} className="extra">
                        Dishes to Review
                    </Col>
                    <Col sm={0} md={3} lg={3}>
                        Submitted By
                    </Col>
                </Row>
                {pendingReviews.map((rev, i) => <PendingReview review={rev} key={i} item={i+1}/>)}
            </Container> 
        </>
    )
}

export default PendingReviews;