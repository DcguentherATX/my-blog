 import React from 'react';
 import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

 const RestaurantModal = ({ show, onHide, restaurant, handleClose}) => {
    //  console.log(restaurant);
    const fullSite = `https://${restaurant.website}`;
    //  console.log(fullSite);

    const reformatHours = (openHours, i) => {
        let spl = openHours.split(': ');
        return (
            <div className="days" key={i}>
                <div className="day">{spl[0]}:</div>
                <div>{spl[1]}</div>
            </div>
        )
    }

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
                        <Row className="top-row">
                            <Col md={12} lg={6} className="layout-box">
                            <div className="modal-img-container">
                                <img className="modal-img" src={restaurant.img} />
                            </div>
                            </Col>
                            <Col md={12} lg={6} className="layout-box">
                            <div className="rest-details">
                                    <span>Address: {restaurant.address}</span>
                                    <span>Phone: {restaurant.phone}</span>
                                    <span>Website: <a href={fullSite}>{restaurant.website}</a></span>
                                    <div>Hours:
                                        <div className="hours-container">
                                            {restaurant.hoursOfOperation.map((time, i) => reformatHours(time, i))}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} lg={6} className="layout-box">
                                <div className="modal-img-container">
                                    <img className="modal-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Open_street_map_central_london.svg/1600px-Open_street_map_central_london.svg.png"/>
                                </div>
                            </Col>
                            <Col md={12} lg={6} className="layout-box">
                            <p className="restaurant-info">
                                {restaurant.description}
                            </p>
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