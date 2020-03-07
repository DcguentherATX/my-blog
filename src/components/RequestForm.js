import React, { useState, useEffect } from 'react';
import PendingReviews from './PendingReviews';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

const RequestForm = () => {

    const [name, setName] = useState('');
    const [restaurant, setRestaurant] = useState('');
    const [location, setLocation] = useState('');
    const [interests, setInterests] = useState('');
    const [pendingReviews, setPendingReviews] = useState([]);

    useEffect(() => {
        Axios.get('/review')
        .then((response) => {
            setPendingReviews(response.data);
        })
        .catch((err) => {
            console.log('err', err);
        })
    }, []);

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
        // checkCompleted();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked', name, restaurant, location, interests)
        if(name && restaurant && location && interests) {
        
        Axios.get('/reviewOne', {
            params: {
                restaurant: restaurant
            }
        })
        .then((response) => {
            // console.log('find response', response);
            if (response.data.length > 0) {
                alert('There is already a pending request for this restaurant, please see the list below')
                setName('');
                setRestaurant('');
                setLocation('');
                setInterests('');
                // checkCompleted();
            } else {
            Axios.post('/review', {
                params: {
                    name: name,
                    restaurant: restaurant,
                    location: location,
                    interests: interests
                }
            })
            .then(() => {
                Axios.get('/review')
                .then((response) => {
                    setPendingReviews(response.data)
                })
            })
            .then(() => {
                setName('');
                setRestaurant('');
                setLocation('');
                setInterests('');
            })
            .catch((err) => {
                console.log(err);
            }) 
        }
        })
        .then(() => {
            const frm = document.getElementsByName('request-form')[0];
            frm.reset();
        })
        .catch((err) => {
            console.log('checking db for req error', err);
        })
    } else {
        alert('Please complete the entire form before submitting');
    }
    }

    // const checkCompleted = () => {
    //     console.log('completed', name, restaurant, location, interests);
    //     if (name && restaurant && location && interests) {
    //         document.getElementById('submit').disabled = false;
    //     } else {
    //         document.getElementById('submit').disabled = true;
    //     }
    // }

    return (
        <div>
            <form className="request-form" name="request-form">
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
                    <Button variant="outline-light" id="submit" onClick={handleSubmit}>Submit Request</Button>
                </div>
            </form>
            <PendingReviews pendingReviews={pendingReviews}/>
        </div>
    )
}

export default RequestForm;