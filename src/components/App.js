import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LandingPage from './LandingPage';
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './Home';
import Gallery from './Gallery';
import PhotoHunt from './PhotoHunt';
import Dining from './Dining';
import Blog from './Blog';
import ApplicationPlanning from './ApplicationPlanning';
import ColorTheory from './ColorTheory';
import './App.css';
const history = createHistory();

const App = () => {
    return (
        <>
        <Router history={history}>
            <Navigation />
            <Switch>
                <Route path="/" component={LandingPage} exact />
                <Route path="/home" component={Home}/>
                <Route path="/gallery" component={Gallery} />
                <Route path="/photohunt" component={PhotoHunt} />
                <Route path="/dining" component={Dining} />
                <Route path="/blog" component={Blog} />
                <Route path="/application-planning" component={ApplicationPlanning} />
                <Route path="/color-theory" component={ColorTheory} />
            </Switch>
            <Footer />
        </Router>
        </>
    )
}

export default App;