import React, { useState, useEffect } from 'react';
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
            checkCompleted();
        }
        if (e.target.name === 'restaurant') {
            setRestaurant(e.target.value);
            checkCompleted();
        }
        if (e.target.name === 'location') {
            setLocation(e.target.value);
            checkCompleted();
        }
        if (e.target.name === 'interests') {
            setInterests(e.target.value);
            checkCompleted();
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        Axios.get('/reviewOne', {
            params: {
                restaurant: restaurant
            }
        })
        .then((response) => {
            console.log('find response', response);
            if (response.data.length > 0) {
                alert('There is already a pending request for this restaurant, please see the list below');
            } else {
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
        })
        .catch((err) => {
            console.log('checking db for req error', err);
        })

        // Axios.post('/review', {
        //     params: {
        //         name: name,
        //         restaurant: restaurant,
        //         location: location,
        //         interests: interests
        //     }
        // })
        // .then((response) => {
        //     console.log(response);
        // })
        // .catch((err) => {
        //     console.log(err);
        // })
    }
    const checkCompleted = () => {
        if (name && restaurant && location) {
            document.getElementById('submit').disabled = false;
        } else {
            document.getElementById('submit').disabled = true;
        }
    }

    return (
        <div>
            <form className="request-form">
                <h2>Review Request</h2>
                <div className="entry-field">
                    <label className="form-label" htmlFor="name">Your Name: </label>
                    <input className="text-input" id="name" name="name" type="text" onChange={handleChange} placeholder="your name" required></input>
                </div>
                <div className="entry-field">
                    <label className="form-label" htmlFor="restaurant">Restaurant Name: </label>
                    <input className="text-input" id="restaurant" name="restaurant" type="text" onChange={handleChange} placeholder="restaurant name" required></input>
                </div>
                <div className="entry-field">
                    <label className="form-label" htmlFor="location">Location: </label>
                    <input className="text-input" id="location" name="location" type="text" onChange={handleChange} placeholder="city, state" required></input>
                </div>
                <div className="entry-field">
                    <label className="form-label" htmlFor="interests">Food to Review: </label>
                    <textarea className="text-area" id="interests" name="interests" wrap="soft" maxLength="500em" onChange={handleChange} placeholder="enter dishes to review"></textarea>
                </div>
                <div className="button-container">
                    <Button variant="outline-light" id="submit" onClick={handleSubmit} disabled>Submit Request</Button>
                </div>
            </form>
        </div>
    )
}

export default RequestForm;