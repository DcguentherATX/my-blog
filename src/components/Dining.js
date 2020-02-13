import React, { useState } from 'react';
import Restaurant from './Restaurant';
import Navigation from './Navigation';
import Footer from './Footer';

import thailand from '../../assets/images/thailand.jpg';

const Dining = () => {
    const [restaurants, setRestaurants] = useState([
        {name: 'Launderette',
        img: thailand,
        stars: 5,
        description: 'Adipisicing incididunt voluptate et Lorem laboris nisi.'
    },
        {name: 'Suerte',
        img: thailand,
        stars: 4,
        description: 'Consectetur reprehenderit consectetur cillum cupidatat.'
    },
    {
        name: 'Justine\'s',
        img: thailand,
        stars: 3,
        description: 'Sunt duis incididunt id velit nostrud exercitation ex officia pariatur quis incididunt.'
    }
    ]);

    return (
        <>
            <Navigation />
            <div className="dining">
                <div className="top-container">
                    <h1 className="page-title">Dining</h1>
                    <div className="info-container">
                        <p>Tempor labore aliqua dolore do adipisicing. Dolore magna exercitation ut et Lorem dolor nulla nostrud velit. Dolor amet ex elit est sint irure id excepteur laboris. Minim nulla sint magna nisi aliqua non veniam nostrud velit excepteur laboris velit cupidatat. Et reprehenderit veniam cillum irure et dolor sunt voluptate nostrud duis consectetur. Excepteur esse in ut qui fugiat qui labore qui nostrud. Et adipisicing dolore nulla amet.</p>
                        <p>Ad sit mollit Lorem mollit sunt ad sunt exercitation. Nostrud aliquip voluptate est do nostrud excepteur culpa elit et consequat id dolor. Minim pariatur sint consequat id. Duis elit ullamco amet elit sit minim fugiat eu nostrud qui cillum.</p>
                        <p>Aliquip exercitation voluptate ea aliquip ipsum enim irure mollit qui dolore duis ex. Magna dolor magna nostrud tempor cillum fugiat. Veniam commodo fugiat fugiat officia et id magna anim veniam ex elit aliquip Lorem. Et ex ex aute laborum dolore reprehenderit et id magna sit qui nisi. Esse sint ipsum et labore exercitation. Fugiat dolor magna sunt anim excepteur laboris adipisicing.</p>
                    </div>
                </div>
                <div className="dining-container">
                    {restaurants.map((restaurant, index) => <Restaurant restaurant={restaurant} key={index} />)}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dining;