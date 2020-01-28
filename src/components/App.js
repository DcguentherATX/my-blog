import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Welcome from './Welcome';
// import Navigation from './Navigation';
// import About from './About';
// import Footer from './Footer';
import './App.css';

const App = () => {
    return (
        <>
        <Welcome />
        {/* <Router>
            <Switch>
                <Route path="/" component={LandingPage} exact>
                    <LandingPage />
                </Route>
                <Route path="/welcome" component={Welcome} exact>
                    <Welcome />
                </Route>
            </Switch>
        </Router> */}
        </>
    )
}

export default App;