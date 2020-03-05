import React, { useState, useEffect } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Restaurant from './Restaurant';
import Axios from 'axios';

const Dining = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // keeps nav and footer visible on refresh
        
        const nav = document.getElementById("navigation");
        const foot = document.getElementById("footer-container");
        if (nav.style.display === "none") {
          nav.style.display = "block";
        }
        if (foot.style.display === "none") {
          foot.style.display = "flex";
        }

        Axios.get('/restaurants')
        .then((response) => {
            setRestaurants(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSubmit = () => {
        Axios.get('/restaurantSearch', {
            params: {
                name: searchTerm
            }
        })
        .then((response) => {
            setRestaurants(response.data);
        })
        .catch((err) => {
            console.log('error with restuarant search', err);
        })
    }

    const handleClick = (e) => {
        let searchTerm = e.target.getAttribute('value');
        // console.log(searchTerm);

        if (searchTerm === 'All') {
            Axios.get('/restaurants')
            .then((response) => {
                setRestaurants(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
        } else {
            Axios.get('/cuisine', {
                params: {
                    cuisine: searchTerm
                }
            })
            .then((response) => {
                // console.log(response.data);
                setRestaurants(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <>
            <div className="dining">
                <div className="top-container">
                    <h2 className="page-title">Dining</h2>
                    <div className="info-container">
                        <p>
                            My goals for the Dining page was to implement the use of a database, play around more with React Hooks,
                            and to bring in a style library to help with the design aspect of the page.  Overall, the page will be
                            my reviews and opinions of local Austin restaurants.  At this point, I'm just using placeholder information
                            to seed my database, hence all the details and images are the same.  I would like to add an API request to
                            Google for results, but could become quite costly once this application is deployed.
                        </p>
                        <p>
                            My first step was to decide on a database for the project.  I went with MongoDB as I had no idea what my actual
                            data would look like and I wanted to be able to fluidly make changes to the structure of this data.  I then
                            created some dummy data and created a schema for my database.  Once this was successfully implemented, I then
                            designed the page with Bootstrap.  I figured this page could benefit from Bootstrap's Card and Modal Components
                            that allow for a lot of data items to be mapped over and rendered to the screen in an identical manner.
                        </p>
                        <p>
                            Once all the data was properly rendering to the page, I decided to add some additional filtering buttons
                            so that I could gain more experience making requests to the database.  Hopefully in the near future I can add some
                            additional restaurants with some actual reviews to make the page a little more interesting.  Overall, the page flows
                            well with the filters and the modals popping up over the base component.
                        </p>
                    </div>
                </div>
                <div className="restaurant-button-container">
                    <Button className="filter-button" variant="outline-light" value="All" onClick={handleClick}>All</Button>
                    <Button className="filter-button" variant="outline-light" value="American" onClick={handleClick}>American</Button>
                    <Button className="filter-button" variant="outline-light" value="Asian" onClick={handleClick}>Asian</Button>
                    <Button className="filter-button" variant="outline-light" value="European" onClick={handleClick}>European</Button>
                    <Button className="filter-button" variant="outline-light" value="Latin" onClick={handleClick}>Latin</Button>
                    <Button className="filter-button" variant="outline-light" value="BBQ" onClick={handleClick}>BBQ</Button>
                </div>
                <div className="restaurant-search">
                    <div className="search-bar">
                        <label className="label">
                            Search:
                        </label>
                        <input className="search" type="text" value={searchTerm} onChange={handleChange} placeholder="search" />
                        <Button onClick={() => handleSubmit()} variant="outline-light" >Submit</Button>
                    </div>
                </div>
                <div className="dining-container">
                    <CardDeck className="entire-deck">
                        {restaurants.map((restaurant, index) => <Restaurant restaurant={restaurant} key={index} />)}
                    </CardDeck>
                </div>
            </div>
        </>
    )
}

export default Dining;