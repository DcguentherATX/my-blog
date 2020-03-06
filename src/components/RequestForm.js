import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

const RequestForm = () => {

    const [name, setName] = useState('');
    const [restaurant, setRestaurant] = useState('');
    const [location, setLocation] = useState('');
    const [interests, setInterests] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'name') {
            setName(e.target.value);
        }
        if (e.target.name === 'restaurant') {
            setRestaurant(e.target.value);
        }
        if (e.target.name === 'location') {
            setLocation(e.target.value);
        }
        if (e.target.name === 'interests') {
            setInterests(e.target.value);
        }
    }

    const handleSubmit = () => {
        Axios.post('/review', {
            params: {
                name: name,
                restaurant: restaurant,
                location: location,
                interests: interests
            }
        })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <form className="request-form">
                <h2>Review Request</h2>
                <div className="entry-field">
                    <label className="form-label" htmlFor="name">Your Name: </label>
                    <input className="text-input" id="name" name="name" type="text" onChange={handleChange} placeholder="your name"></input>
                </div>
                <div className="entry-field">
                    <label className="form-label" htmlFor="restaurant">Restaurant Name: </label>
                    <input className="text-input" id="restaurant" name="restaurant" type="text" onChange={handleChange} placeholder="restaurant name"></input>
                </div>
                <div className="entry-field">
                    <label className="form-label" htmlFor="location">Location: </label>
                    <input className="text-input" id="location" name="location" type="text" onChange={handleChange} placeholder="city, state"></input>
                </div>
                <div className="entry-field">
                    <label className="form-label" htmlFor="interests">Food to Review: </label>
                    <textarea className="text-area" id="interests" name="interests" wrap="soft" maxLength="500em" onChange={handleChange} placeholder="enter dishes to review"></textarea>
                </div>
                <div className="button-container">
                    <Button variant="outline-light" onClick={handleSubmit} >Submit Request</Button>
                </div>
            </form>
        </div>
    )
}

export default RequestForm;