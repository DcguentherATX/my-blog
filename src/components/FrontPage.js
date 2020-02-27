import React from 'react';
import { Link } from 'react-router-dom';
import colorWheel from '../../assets/images/color_wheel.jpg';

const FrontPage = () => {

    return (
        <>
            <div className="blog">
                <div className="top-container">
                    <h2 className="page-title">Blog</h2>
                    <div className="info-container">
                        <p>
                            I wanted to create a blog page in order to document my experience building this site in a
                            series of short articles in which I could share resources that I found helpful along the way.
                            In addition, I wanted to revisit CSS Grid to create a newspaper type layout.  Finally, I wanted
                            to play with linking articles together so they could be followed as steps in a development process.
                        </p>
                        <p>
                            Working with CSS Grid to create the newspaper layout was actually quite a challenge.   Word length caused
                            some boxes to resize awkwardly and at times the photos were skewed and distorted.  At this point, I have a
                            pretty good responsive design for the frontpage and am looking forward to writing the mini-articles and
                            create the step through design.
                        </p>
                        <p>
                            Check back soon to see what articles have been updated!
                        </p>
                    </div>
                </div>
                <div className="blog-container">
                    <div className="blog-grid">
                        <div className="blr1c1 blog-item">
                            <h3 className="newspaper-title minor-article">Other Articles</h3>
                            <h4 className="newspaper-title minor-article">Making an API Request</h4>
                            <div className="minibar"></div>
                            <h4 className="newspaper-title minor-article">Working with React Hooks</h4>
                            <div className="minibar"></div>
                            <h4 className="newspaper-title minor-article">Setting up a Development Environment</h4>
                            <div className="minibar"></div>
                            <h4 className="newspaper-title minor-article">Adding Bootstrap To an Application</h4>
                            <div className="minibar"></div>
                            <h4 className="newspaper-title minor-article">Making the Perfect Background Image</h4>
                            <div className="minibar"></div>
                            <h4 className="newspaper-title minor-article">Dockerizing an Application</h4>
                            <div className="minibar"></div>
                        </div>
                            <div className="blr1c2 headliner">
                            <Link to="/application-planning" className="text-link"><h2 className="newspaper-title">Application planning, designing, and sketching</h2></Link>
                            <Link to="/application-planning"><img className="title-image" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/103854200/original/05b309aa1bd93c430b34b99589fe6f7cd534b337/sketch-a-website-design-in-just-24-hours.jpg" /></Link> 
                            </div>
                        <div className="b1r1c4 blog-item">
                            <h3 className="newspaper-title">Building a Database</h3>
                            <span>Proident reprehenderit excepteur do veniam veniam anim do consequat non sint cillum reprehenderit. Amet velit proident ut excepteur laboris. Irure do irure commodo elit mollit. Ea culpa velit excepteur Lorem nisi incididunt duis non minim magna et laboris Lorem ex. Dolore deserunt elit consectetur do cupidatat proident mollit qui amet cillum.</span>
                        </div>  
                        <div className="b1r2c4 blog-item">
                            <h3 className="newspaper-title">Building a Gallery with CSS Grid</h3>
                            <span>Amet esse incididunt sit labore excepteur fugiat aute exercitation. Commodo anim ut officia aute deserunt proident et exercitation aute consequat et fugiat. Cillum tempor fugiat amet nostrud reprehenderit est velit labore aute. Deserunt incididunt amet voluptate mollit anim esse veniam. Dolore elit est consectetur labore reprehenderit officia labore.</span>
                        </div>
                        <div className="blr3c2 blog-item">
                            <img className="blog-image" src={colorWheel} />
                            <h4 className="newspaper-title minor-title">Color Theory</h4>
                            <span>Amet esse incididunt sit labore excepteur fugiat aute exercitation. Commodo anim ut officia aute deserunt proident et exercitation aute consequat et fugiat. Cillum tempor fugiat amet nostrud reprehenderit est velit labore aute. Deserunt incididunt amet voluptate mollit anim esse veniam.</span>
                        </div>
                        <div className="blr3c3 blog-item">
                            <img className="blog-image" src={colorWheel} />
                            <h4 className="newspaper-title minor-title">Environmental Variables</h4>
                            <span>Commodo anim ut officia aute deserunt proident et exercitation aute consequat et fugiat. Cillum tempor fugiat amet nostrud reprehenderit est velit labore aute. Deserunt incididunt amet voluptate mollit anim esse veniam. Dolore elit est consectetur labore reprehenderit officia labore.</span>
                        </div>
                        <div className="blr3c4 blog-item">
                            <img className="blog-image" src={colorWheel} />
                            <h4 className="newspaper-title minor-title">React Router</h4>
                            <span>Amet esse incididunt sit labore excepteur fugiat aute exercitation. Cillum tempor fugiat amet nostrud reprehenderit est velit labore aute. Deserunt incididunt amet voluptate mollit anim esse veniam. Dolore elit est consectetur labore reprehenderit officia labore.</span>
                        </div>                
                    </div>
                </div>
            </div>
        </>
    )
}

export default FrontPage;