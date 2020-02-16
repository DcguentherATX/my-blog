import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import RestaurantModal from './RestaurantModal'


const Restaurant = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [closeModal, setCloseModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    // console.log(props);

    return (
        <div className="restaurant-card">
            <Card style={{ width: '22em' }} >
                <Card.Img variant="top" src={props.restaurant.img} />
                <Card.Body>
                    <Card.Title>{props.restaurant.name}</Card.Title>
                    <Card.Text className="restaurant-details">
                        <span>{props.restaurant.type}</span>
                        <span>Rating: {props.restaurant.stars}</span>
                    </Card.Text>
                    <Button onClick={handleShowModal} variant="primary">More Info</Button>
                        <RestaurantModal 
                            className="restaurant-modal"
                            show={showModal}
                            onHide={handleCloseModal}
                            handleClose={handleCloseModal}
                            restaurant={props.restaurant}
                            />
                </Card.Body>
            </Card>
        </div>
    )
}

export default Restaurant;