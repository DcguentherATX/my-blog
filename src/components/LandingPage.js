import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/images/logo-blue-cream.png';

const LandingPage = () => {

    // shows nav and footer when leaving landing page

    const toggleNav = () => {
      const nav = document.getElementById("navigation");
      const foot = document.getElementById("footer-container");
      if (nav.style.display === "none") {
        nav.style.display = "block";
      }
      if (foot.style.display === "none") {
        foot.style.display = "flex";
      }
    }

    return (
        <div className="landing-page">
            <div className="logo-container">
                <h1 className="welcome">Welcome</h1>
                <img src={logo} className="landing-logo" />
            </div>
            <div className="button-container">
                <Link to="/home"><Button className="enter-button" variant="outline-light" onClick={toggleNav}>Enter</Button></Link>
            </div>
        </div>
    )
}

export default LandingPage;