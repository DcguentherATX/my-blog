import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import welcomeSketch from '../../assets/images/sketch-welcome.jpg';
import gallerySketch from '../../assets/images/sketch-gallery.jpg';
import photoSketch from '../../assets/images/sketch-photo-hunt.jpg';
import blogSketch from '../../assets/images/sketch-blog.jpg';
import left from '../../assets/images/left-arrow.png';
import right from '../../assets/images/right-arrow.png';
import home from '../../assets/images/home-icon.png';

const ApplicationPlanning = () => {

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
        <>
            <div className="article-container">
            <div className="arrow-wrap">
                    <Link to="/blog"><img src={left} className="left" /></Link>
                    <Link to="/color-theory"><img src={right} className="right" /></Link>
                </div>
                <h1 className="article-title">Application planning, designing, and sketching</h1>
                <article className="article-body">
                <p>
                    Cupidatat non culpa amet reprehenderit quis dolore minim ex irure qui ipsum ex in aliquip. Veniam velit incididunt sint tempor ipsum ipsum. Sit est proident officia cillum Lorem deserunt irure.
                </p>
                <p>
                    Tempor aliqua sit eiusmod eiusmod anim proident velit incididunt dolore est. Do enim aliquip qui adipisicing qui exercitation dolor. Laborum tempor labore commodo consequat ipsum esse aliqua excepteur magna et. Culpa magna quis irure minim nulla tempor eu. Veniam quis Lorem voluptate dolore cillum dolore aliquip qui consectetur cillum.
                </p>
                <div className="planning-image-container">
                    <img className="basic-blog-img" src={welcomeSketch} alt="welcome sketch"/>
                    <img className="basic-blog-img" src={gallerySketch} alt="gallery sketch"/>
                </div>
                <p>
                    Velit reprehenderit magna veniam tempor sit proident incididunt aliqua velit aute pariatur amet labore. Non consectetur aliquip culpa ea cupidatat fugiat cupidatat id et. Consequat ullamco fugiat elit Lorem ea proident quis fugiat exercitation nostrud. Mollit nulla in ea reprehenderit est enim.
                </p>
                <p>
                    Elit laborum Lorem laboris qui eu consequat adipisicing ad consequat deserunt aute. Minim excepteur laboris ad exercitation in nulla cillum laboris. Ipsum irure labore mollit nulla dolor. Ea sit cillum fugiat cupidatat. Incididunt nulla in culpa irure laborum. Adipisicing officia deserunt magna duis. Officia consequat velit veniam ea duis.
                </p>
                <div className="planning-image-container">
                    <img className="basic-blog-img" src={photoSketch} alt="photo hunt sketch"/>
                    <img className="basic-blog-img" src={blogSketch} alt="blogSketch"/>
                </div>
                <p>
                    Officia non dolor Lorem non amet sint. Adipisicing officia duis nisi cupidatat eiusmod adipisicing. Officia ad enim commodo excepteur nisi ea nisi aliquip officia aliqua. Mollit commodo cillum cillum excepteur exercitation elit reprehenderit. Amet enim pariatur magna proident excepteur esse deserunt culpa quis fugiat voluptate occaecat. Irure laborum eiusmod aliquip eu esse reprehenderit adipisicing labore nostrud nulla Lorem veniam quis aliqua.
                </p>
                <p>
                    Ea irure proident eu veniam occaecat magna duis anim incididunt veniam. Sit ea exercitation sunt aliquip qui ut reprehenderit. Elit proident esse qui excepteur proident culpa enim laborum aliquip eu.
                </p>
                </article>
                <div className="home-container">
                    <Link to="/blog"><img src={left} className="left-bottom" /></Link>
                    <Link to="/blog"><img src={home} className="home" /></Link>
                    <Link to="/color-theory"><img src={right} className="right-bottom" /></Link>
                </div>
            </div>
        </>
    )
}

export default ApplicationPlanning;