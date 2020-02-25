 import React from 'react';
 import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

 const RestaurantModal = ({ show, onHide, restaurant, handleClose}) => {
    //  console.log(restaurant);
     const fullSite = `https://${restaurant.website}`;
    //  console.log(fullSite);

    return (
        <div>
            <Modal show={show} onHide={onHide}
                aria-labelledby="contained-modal-title-vcenter" size="lg"
                centered>

                <Modal.Header closeButton>
                    <Modal.Title id="modalTitle">{restaurant.name}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                            <div className="modal-img-container">
                                <img className="modal-img" src={restaurant.img} />
                            </div>
                            </Col>
                            <Col>
                            <div className="restaurant-info">
                                {restaurant.description}
                            </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="modal-img-container">
                                    <img className="modal-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Open_street_map_central_london.svg/1600px-Open_street_map_central_london.svg.png"/>
                                </div>
                            </Col>
                            <Col>
                                <div className="rest-details">
                                    <span>Phone: {restaurant.phone}</span>
                                    <span>Address: {restaurant.address}</span>
                                    <span>Website: <a href={fullSite}>{restaurant.website}</a></span>
                                    <span>Hours of Operation: {restaurant.hoursOfOperation}</span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                </Modal.Footer>

            </Modal>
        </div>
    )
 }

 export default RestaurantModal;