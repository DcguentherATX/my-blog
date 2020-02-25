import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Destinations from './Destinations';
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
                {/* <Route path="/about" component={About} /> */}
                <Route path="/gallery" component={Gallery} />
                <Route path="/destinations" component={Destinations} ></Route>
                <Route path="/dining" component={Dining} ></Route>
                <Route path="/blog" component={Blog} ></Route>
            </Switch>
            <Footer />
        </Router>
        </>
    )
}

export default App;