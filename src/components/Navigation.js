import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../../assets/images/logo-cream-blue.png';
import hamburger from '../../assets/images/hamburger.png';

const Navigation = () => {
    return (
        <div id="navigation" style={{display: "none"}}>
        <Navbar className="navbar" sticky="top" expand="true" >
        <DropdownButton className="nav-dropdown"
                        title={
                            <img className="hamburger" src={hamburger}></img>
                        }
                        id="dropdown-menu-align-left"
                    >
                        <Dropdown.Item as={NavLink} to="/home" className="drop" eventKey="1" value="about">About</Dropdown.Item>
                        <Dropdown.Item as={NavLink} to="/gallery" className="drop" eventKey="2" value="gallery">Gallery</Dropdown.Item>
                        <Dropdown.Item as={NavLink} to="/photohunt" className="drop" eventKey="3" value="photohunt">Photo Hunt</Dropdown.Item>
                        <Dropdown.Item as={NavLink} to="/dining" className="drop" eventKey="4" value="dining" >Dining</Dropdown.Item>
                        <Dropdown.Item as={NavLink} to="/blog" className="drop" eventKey="5" value="blog" >Blog</Dropdown.Item>
                    </DropdownButton>
            {/* <div className="nav-dropdown">
                <img className="hamburger" src={hamburger} />
            </div> */}
            <h1>DCG Blog</h1>
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