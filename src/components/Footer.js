import React from 'react';

import linkedIn from '../../assets/images/linkedin-logo.png';
import instagram from '../../assets/images/instagram.png';
import github from '../../assets/images/github-logo.png';

const Footer = () => {
    return (
        <div id="footer-container" style={{display: "none"}}>
            <div className="built-by">Built by David Guenther</div>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/david-guenther" target="_blank"><img src={linkedIn} className="social-logo" /></a>
                <a href="https://github.com/DcguentherATX" target="_blank"><img src={github} className="social-logo" /></a>
                <a href="https://www.instagram.com/dcguenther/" target="_blank"><img src={instagram} className="social-logo insta" /></a>
            </div>
        </div>
    )
}

export default Footer;