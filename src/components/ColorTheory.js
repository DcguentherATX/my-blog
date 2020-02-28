import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import left from '../../assets/images/left-arrow.png';
import right from '../../assets/images/right-arrow.png';
import home from '../../assets/images/home-icon.png';

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
                    <Link to="/blog" ><img src={right} className="right" /></Link>
                </div>
            <h1 className="article-title">Color Theory</h1>
            <article className="article-columns">
                <p>
                    Consequat reprehenderit amet voluptate qui duis nostrud ullamco aliqua reprehenderit irure velit aliqua sit. Ut esse proident labore laborum sint excepteur nisi ad fugiat et do. Eu irure amet ad sunt magna labore fugiat adipisicing et. Irure labore eu adipisicing incididunt ullamco aliquip minim tempor eiusmod veniam nostrud consectetur. Nisi adipisicing ipsum sunt eiusmod aliquip reprehenderit. Aute qui mollit officia in cillum voluptate irure adipisicing mollit mollit adipisicing. Dolor enim tempor consectetur commodo sit elit culpa consequat nisi velit.
                </p>
                <p>
                    Minim fugiat adipisicing excepteur voluptate irure commodo consectetur duis. Elit exercitation magna pariatur fugiat nulla Lorem consectetur esse consequat dolore laboris nisi adipisicing in. Exercitation adipisicing dolor non non officia do nostrud aliquip dolor cupidatat ullamco Lorem officia qui.
                </p>
                <p>
                    Deserunt deserunt fugiat sint veniam nulla adipisicing. Eiusmod sit consequat Lorem sint pariatur et. Reprehenderit qui magna irure Lorem. Pariatur ipsum non ad fugiat cillum nostrud nulla et sint culpa cupidatat.
                </p>
            </article>
            <div className="home-container">
                    <Link to="/application-planning"><img src={left} className="left-bottom" /></Link>
                    <Link to="/blog"><img src={home} className="home" /></Link>
                    <Link to="/home"><img src={right} className="right-bottom" /></Link>
            </div>
        </div>
    )
}

export default ColorTheory;