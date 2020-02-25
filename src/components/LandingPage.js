import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/images/logo-blue-cream.png';

const LandingPage = () => {
    const showNav = () => {
        console.log('click to enter')
        var x = document.getElementById("navigation");
        console.log(x);
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }

        var y = document.getElementById("footer-container");
        if (y.style.display === "none") {
          y.style.display = "block";
        } else {
          y.style.display = "none";
        }
    }

    return (
        <div className="landing-page">
            <div className="logo-container">
                <h1 className="welcome">Welcome</h1>
                <img src={logo} className="landing-logo" />
            </div>
            <div className="button-container">
                <Link to="/home"><Button className="enter-button" variant="outline-light" onClick={showNav}>Enter</Button></Link>
            </div>
        </div>
    )
}

export default LandingPage;