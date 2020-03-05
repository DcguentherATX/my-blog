import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const RequestForm = () => {

    return (
        <div>
            <form className="request-form">
                <h2>Review Request Form</h2>
                <div className="entry-field">
                    <label className="form-label" for="name">Your Name: </label>
                    <input className="text-input" id="name" name="name" type="text" placeholder="your name"></input>
                </div>
                <div className="entry-field">
                    <label className="form-label" for="restaurant">Restaurant Name: </label>
                    <input className="text-input" id="restaurant" name="restaurant" type="text" placeholder="restaurant name"></input>
                </div>
                <div className="entry-field">
                    <label className="form-label" for="location">Location: </label>
                    <input className="text-input" id="location" name="location" type="text" placeholder="city, state"></input>
                </div>
                <div className="entry-field">
                    <label className="form-label" for="interests">Food to Review: </label>
                    <textarea className="text-area" id="interests" name="interests" wrap="soft" maxLength="500em" placeholder="enter dishes to review"></textarea>
                </div>
                <div className="button-container">
                    <Button variant="outline-light">Submit Request</Button>
                </div>
            </form>
        </div>
    )
}

export default RequestForm;