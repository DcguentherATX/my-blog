 import React from 'react';
 import { Modal, Button } from 'react-bootstrap';

 const RestaurantModal = (props) => {
    console.log(props);

    return (
        <div>
            <Modal show={props.show} onHide={props.onHide}
                aria-labelledby="contained-modal-title-vcenter" size="lg"
                centered>

                <Modal.Header closeButton>
                    <Modal.Title id="modalTitle">{props.restaurant.name}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        {props.restaurant.description}
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                </Button>
                </Modal.Footer>

            </Modal>
        </div>
    )
 }

 export default RestaurantModal;