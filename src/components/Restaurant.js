import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Restaurant = (props) => {
    console.log(props);

    return (
        <div className="restaurant-card">
            <Card style={{ width: '22em' }} >
                <Card.Img variant="top" src={props.restaurant.img} />
                <Card.Body>
                    <Card.Title>{props.restaurant.name}</Card.Title>
                    <Card.Text>
                        <div>Rating: {props.restaurant.stars}</div>
                        <div>{props.restaurant.description}</div>
                    </Card.Text>
                    <Button variant="primary">More Info</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Restaurant;