import React, { useEffect } from 'react';

import iceland from '../../assets/images/iceland.jpg';
import mountain from '../../assets/images/mountain.jpg';
import beach from '../../assets/images/beach.jpg';
import alexanderplatz from '../../assets/images/alexanderplatz.jpg';
import brooklyn from '../../assets/images/brooklyn-bridge.jpg';
import tokyo from '../../assets/images/tokyo.jpg';
import vespa from '../../assets/images/vespa.jpg';
import cactus from '../../assets/images/cactus.jpg';
import cartagena from '../../assets/images/cartagena.jpg';
import thailand from '../../assets/images/thailand.jpg'


const Gallery = () => {

    // keeps nav and footer visible on refresh

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
            <div className="gallery">
                <div className="top-container">
                    <h2 className="page-title">Gallery</h2>
                    <div className="info-container">
                        <p>
                            The gallery page was an opportunity for me to work with CSS Grid and responsive design.
                            I had not worked with CSS Grid before, so I watched a quick tutorial and thought I would
                            jump in and get coding.  I began with designing my desired layout for a desktop size screen.
                            Simply put, I declared using grid-templates and expanded specific grid items to cover multiple
                            rows and columns by declaring their span in CSS.
                        </p>
                        <p>
                            It was then time to grab some images to fill the page, so I went to my favorite API, Unsplash,
                            and grabbed some beautiful pics.  After loading the images into my application, I added a grid gap
                            to create even space between the grid boxes.  Initially, my photos were taking a very long time to
                            load, so I found a site that downsized the images for faster loading.
                        </p>
                        <p>
                            My final goal for this page was to make the grid responsive based on screen size.  I quickly found
                            that you can make media queries to discover the user's screen size and create breakpoints at specific
                            positions to adjust the layout of the page.  I created sizing for mobile devices and for tablets, adjusting
                            the layout of the photos and how the display.  Feel free to shrink and grow the window to see how this
                            design looks in action!
                        </p>
                    </div>
                </div>
                <div className="gallery-container">
                    <div className="gallery-grid">
                        <div className="r1c1">
                            <img className="gal-img" src={iceland} alt="iceland"/>
                        </div>
                        <div className="r1c3">
                            <img className="gal-img" src={alexanderplatz} alt="image"/>
                        </div>
                        <div className="r1c4">
                            <img className="gal-img" src={beach} alt="image"/>
                        </div>
                        <div className="r2c3">
                            <img className="gal-img" src={thailand} alt="image"/>
                        </div>
                        <div className="r2c4">
                            <img className="gal-img" src={tokyo} alt="image"/>
                        </div>
                        <div className="r3c1">
                            <img className="gal-img" src={cartagena} alt="image"/>
                        </div>
                        <div className="r3c2">
                            <img className="gal-img" src={cactus} alt="image"/>
                        </div>
                        <div className="r3c3">
                            <img className="gal-img" src={brooklyn} alt="image"/>
                        </div>
                        <div className="r4c1">
                            <img className="gal-img" src={mountain} alt="image"/>
                        </div>
                        <div className="r4c2">
                            <img className="gal-img" src={vespa} alt="image"/>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery;