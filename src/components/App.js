import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Welcome from './Welcome';
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
            <Switch>
                <Route path="/" component={LandingPage} exact />
                {/* <Route path="/welcome" component={Welcome} exact /> */}
                <Route path="/about" component={About} exact />
                <Route path="/gallery" component={Gallery} exact />
                <Route path="/destinations" component={Destinations} exact></Route>
                <Route path="/dining" component={Dining} exact></Route>
                <Route path="/blog" component={Blog} exact></Route>
            </Switch>
        </Router>
        </>
    )
}

export default App;