import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import left from '../../assets/images/left-arrow.png';
import right from '../../assets/images/right-arrow.png';

const ColorTheory = () => {

    useEffect(() => {
        const nav = document.getElementById("navigation");
        const foot = document.getElementById("footer-container");
        if (nav.style.display === "none") {
            nav.style.display = "block";
        }
        if (foot.style.display === "none") {
            foot.style.display = "flex";
        }
    })

    return (
        <div className="article-container">
            <div className="arrow-wrap">
                    <Link to="/application-planning" ><img src={left} className="left" /></Link>
                    <img src={right} className="right" />
                </div>
            <h1 className="article-title">Color Theory</h1>
        </div>
    )
}

export default ColorTheory;