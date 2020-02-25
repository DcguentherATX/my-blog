import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Gallery from './Gallery';
import Destinations from './Destinations'
import Dining from './Dining';
import Blog from './Blog';

const Home = () => {
    
    // keeps nav and footer visible on refresh

    useEffect(() => {
        const nav = document.getElementById("navigation");
        const foot = document.getElementById("footer-container");
        if (nav.style.display === "none") {
          nav.style.display = "block";
        }
        if (foot.style.display === "none") {
          foot.style.display = "flex";
        }
    })

    return (
        <>
            <div>
                <Switch>
                    <Route path="/home" component={About}></Route>
                    <Route path="/gallery" component={Gallery}></Route>
                    <Route path="/destinations" component={Destinations}></Route>
                    <Route path="/dining" component={Dining}></Route>
                    <Route path="/blog" component={Blog}></Route>
                </Switch>
            </div>
        </>
    )
}

export default Home;