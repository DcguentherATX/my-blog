import React, { useState, useEffect } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Restaurant from './Restaurant';
import Navigation from './Navigation';
import Footer from './Footer';
import Axios from 'axios';

const Dining = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        Axios.get('/restaurants')
        .then((response) => {
            setRestaurants(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    })

    const handleClick = (e) => {
        let searchTerm = e.target.getAttribute('value');
        console.log(searchTerm);

        Axios.get('/cuisine', {
            params: {
                cuisine: searchTerm
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
        <>
            <Navigation />
            <div className="dining">
                <div className="top-container">
                    <h2 className="page-title">Dining</h2>
                    <div className="info-container">
                        <p>Tempor labore aliqua dolore do adipisicing. Dolore magna exercitation ut et Lorem dolor nulla nostrud velit. Dolor amet ex elit est sint irure id excepteur laboris. Minim nulla sint magna nisi aliqua non veniam nostrud velit excepteur laboris velit cupidatat. Et reprehenderit veniam cillum irure et dolor sunt voluptate nostrud duis consectetur. Excepteur esse in ut qui fugiat qui labore qui nostrud. Et adipisicing dolore nulla amet.</p>
                        <p>Ad sit mollit Lorem mollit sunt ad sunt exercitation. Nostrud aliquip voluptate est do nostrud excepteur culpa elit et consequat id dolor. Minim pariatur sint consequat id. Duis elit ullamco amet elit sit minim fugiat eu nostrud qui cillum.</p>
                        <p>Aliquip exercitation voluptate ea aliquip ipsum enim irure mollit qui dolore duis ex. Magna dolor magna nostrud tempor cillum fugiat. Veniam commodo fugiat fugiat officia et id magna anim veniam ex elit aliquip Lorem. Et ex ex aute laborum dolore reprehenderit et id magna sit qui nisi. Esse sint ipsum et labore exercitation. Fugiat dolor magna sunt anim excepteur laboris adipisicing.</p>
                    </div>
                </div>
                <div className="restaurant-button-container">
                    <Button className="filter-button" variant="outline-light" value="American" onClick={handleClick}>American</Button>
                    <Button className="filter-button" variant="outline-light" value="Asian" onClick={handleClick}>Asian</Button>
                    <Button className="filter-button" variant="outline-light" value="European" onClick={handleClick}>European</Button>
                    <Button className="filter-button" variant="outline-light" value="Latin" onClick={handleClick}>Latin</Button>
                    <Button className="filter-button" variant="outline-light" value="BBQ" onClick={handleClick}>BBQ</Button>
                </div>
                <div className="dining-container">
                    <CardDeck className="entire-deck">
                        {restaurants.map((restaurant, index) => <Restaurant restaurant={restaurant} key={index} />)}
                    </CardDeck>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dining;