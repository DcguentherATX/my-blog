import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../../assets/images/logo-cream-blue.png';
import hamburger from '../../assets/images/hamburger.png';

const Navigation = () => {
    return (
        <div className="navigation">
        <Navbar className="navbar" sticky="top" expand="true" >
        <DropdownButton className="nav-dropdown"
                        alignLeft
                        title={
                            <img className="hamburger" src={hamburger}></img>
                        }
                        id="dropdown-menu-align-right"
                    >
                        <Dropdown.Item className="drop" eventKey="1" value="beach">Gallery</Dropdown.Item>
                        <Dropdown.Item className="drop" eventKey="2" value="architecture">Destinations</Dropdown.Item>
                        <Dropdown.Item className="drop" eventKey="3" value="doorways" >Dining</Dropdown.Item>
                        <Dropdown.Item className="drop" eventKey="4" value="all" >Blog</Dropdown.Item>
                    </DropdownButton>
            {/* <div className="nav-dropdown">
                <img className="hamburger" src={hamburger} />
            </div> */}
            <div>DCG Blog</div>
        <Navbar.Brand href="#home">
          <img
            alt="dcg-logo"
            src={logo}
            width="auto"
            height="70"
            className="d-inline-block align-top nav-logo"
          />{' '}
        </Navbar.Brand>
      </Navbar>
      </div>
    )
}

export default Navigation;