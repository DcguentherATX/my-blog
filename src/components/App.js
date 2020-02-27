import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './Home';
import Gallery from './Gallery';
import PhotoHunt from './PhotoHunt';
import Dining from './Dining';
import Blog from './Blog';
import './App.css';

const App = () => {
    return (
        <>
        <Router >
            <Navigation />
            <Switch>
                <Route path="/" component={LandingPage} exact />
                <Route path="/home" component={Home}/>
                <Route path="/gallery" component={Gallery} />
                <Route path="/photohunt" component={PhotoHunt} ></Route>
                <Route path="/dining" component={Dining} ></Route>
                <Route path="/blog" component={Blog} ></Route>
            </Switch>
            <Footer />
        </Router>
        </>
    )
}

export default App;