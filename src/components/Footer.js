import React from 'react';

import linkedIn from '../../assets/images/linkedin-logo.png';
import instagram from '../../assets/images/instagram.png';
import github from '../../assets/images/github-logo.png';

const Footer = () => {
    return (
        <div id="footer-container" style={{display: "none"}}>
            <div className="built-by">Built by David Guenther</div>
            <div className="social-links">
                <img src={linkedIn} className="social-logo" />
                <img src={github} className="social-logo" />
                <img src={instagram} className="social-logo insta" />
            </div>
        </div>
    )
}

export default Footer;