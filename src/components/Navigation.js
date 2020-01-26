import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../assets/images/logo-cream-blue.png';
import hamburger from '../../assets/images/hamburger.png';

const Navigation = () => {
    return (
        <div className="navigation">
        <Navbar className="navbar" sticky="top" expand="true" >
            <div>
                <img className="hamburger" src={hamburger} />
            </div>
            <div>DCG Blog</div>
        <Navbar.Brand href="#home">
          <img
            alt="dcg-logo"
            src={logo}
            width="auto"
            height="70"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
      </Navbar>
      </div>
    )
}

export default Navigation;