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
                    The purpose of this entire application was to challenge myself to learn specific technologies,
                    styling techniques, and deployment tactics.  To begin, I needed to outline a series of pages in
                    which I could use the techniques that I was targetting and display proper use to the viewer.
                    Throughout this post, I have included photos of my original sketches on how I planned out design
                    of the application.
                </p>
                <p>
                    I knew I wanted to create a landing page with a simple fullscreen background image that would resize
                    responsively based on the viewer's window.  I initially wanted to use tall cacti with mountains at the
                    page bottom.  In between, I wanted to welcome the user and have an entrance button.  My final design
                    was pretty close to this original design.
                </p>
                <div className="planning-image-container">
                    <img className="basic-blog-img" src={welcomeSketch} alt="welcome sketch"/>
                    <img className="basic-blog-img" src={gallerySketch} alt="gallery sketch"/>
                </div>
                <p>
                    In order to practice with CSS Grid, I wanted to create a simple gallery page with visually appealing
                    images that would scale on the size of the media screen.  In addition, I wanted to implement routing
                    between multiple components with React Router, with the navigation and footer displayed to the screen
                    as long as the landing page component wasn't rendered to the screen.  Designing this page was fairly
                    quick, as I only sketched the desktop layout, deciding on the tablet and mobile layouts during
                    implementation.
                </p>
                <p>
                    Originally I had designed the Photo Hunt page as a Destinations page.  I was going to add photos to 
                    a database, sort them by location, and display different locations in a carousel below images and content
                    of the main destination.  After planning, I decided to perform an API request to an outside source for images
                    and separate the database portion to a different component within the application.  The Photo Hunt page kept
                    a similar design to the original Destinations design with a main, large image and clickable minor images
                    located within the carousel.
                </p>
                <p>
                    For the component interacting with the database, I designed an AirBnB styled dining guide for Austin.  The
                    purpose here was to create data, store it, and filter it based on preferences.  I also thought it would be
                    interesting to create an interactive form where users could add requests for restaurants they would like to be
                    reviewed.  At the time I am writing this, that form has yet to be completed.  
                </p>
                <div className="planning-image-container">
                    <img className="basic-blog-img" src={photoSketch} alt="photo hunt sketch"/>
                    <img className="basic-blog-img" src={blogSketch} alt="blogSketch"/>
                </div>
                <p>
                    The final component that I wanted to work with was a blog idea, with which I could document my experience
                    and resources throughout the process.  This would not only act as a resource for me for future development
                    efforts, but will hopefully assist learning developers gain additional skills.  The blog was initially going
                    to be a single page with a long list of articles, but I eventually grew to hate that idea.  I decided to create
                    a Front Page with a newspaper feel using CSS Grid again.  Then I could link through all of the pages with
                    React Router so each individual article could be viewed in isolation.
                </p>
                <p>
                    Once my planning, sketching, and designing was completed, I needed to decide on the technologies, frameworks,
                    and libraries that I would best fit this project.  I am comfortable with React, so I wanted to bring that in and
                    learn how to use hooks and React Router.  I wanted to bring in Bootstrap for styling assistance and overall
                    design aesthetic.  On the backend, I wanted to use a non-relational database because I wasn't exactly sure on the
                    structure of my data.  MongoDB would work well for that situation and I knew that I could deploy with Mongo Atlas.
                    Once all this was organized, I moved on to creating a color scheme and implementing my design.
                </p>
                <p>
                    All code for this application can be viewed on my Github linked <a href="https://github.com/DcguentherATX/my-blog" target="_blank">here</a>!
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