import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/images/logo-blue-cream.png';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="logo-container">
                <h1 className="welcome">Welcome</h1>
                <img src={logo} className="landing-logo" />
            </div>
            <div className="button-container">
                <Link to="/about"><Button className="enter-button" variant="outline-light">Enter</Button></Link>
            </div>
        </div>
    )
}

export default LandingPage;