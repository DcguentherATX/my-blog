import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Navigation from './Navigation';
import About from './About';
import Gallery from './Gallery';
import Destinations from './Destinations'
import Dining from './Dining';
import Blog from './Blog';
import Footer from './Footer';

const Welcome = () => {
    return (
        <>
            <div>
                <Switch>
                    <Route path="/welcome" component={About}></Route>
                    <Route path="/gallery" component={Gallery}></Route>
                    <Route path="/destinations" component={Destinations}></Route>
                    <Route path="/dining" component={Dining}></Route>
                    <Route path="/blog" component={Blog}></Route>
                </Switch>
            </div>
        </>
    )
}

export default Welcome;