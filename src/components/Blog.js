import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Blog = () => {
    return (
        <>
            <Navigation />
            <div className="blog">
                <div className="top-container">
                    <h2 className="page-title">Blog</h2>
                    <div className="info-container">
                        <p>Dolore est ea esse irure id proident consequat exercitation ullamco. Adipisicing qui consequat aliquip nostrud sint ea adipisicing sint sit aute id veniam id tempor. Est fugiat magna tempor eu. Qui sunt pariatur proident occaecat ullamco dolore sint labore enim id esse. Lorem ipsum cupidatat tempor cillum et. Labore duis magna culpa in cillum sint excepteur irure non aliqua. Lorem sunt eu consectetur aliquip pariatur in consequat proident id sunt id.</p>
                        <p>Sint proident reprehenderit veniam laborum pariatur. Reprehenderit incididunt dolore voluptate proident anim aliquip minim. Culpa officia anim reprehenderit quis esse aute veniam laborum incididunt commodo. Nostrud aute sunt dolore consequat cupidatat Lorem consectetur in pariatur commodo fugiat. Veniam officia quis quis esse deserunt duis. Consequat non excepteur minim ea consequat esse pariatur non occaecat cillum ea nulla nostrud.</p>
                        <p>Et ex irure do ipsum voluptate non sit laboris cupidatat deserunt excepteur. Lorem do quis mollit voluptate Lorem deserunt aute. Occaecat do excepteur ad dolor fugiat occaecat fugiat ea. Excepteur excepteur magna do deserunt aliqua consequat do ullamco do aliquip commodo consequat ad. Aliqua aliqua consectetur in veniam aliquip esse minim consequat ipsum. Est ut cillum non ullamco pariatur ullamco pariatur. Elit esse quis fugiat est.</p>
                    </div>
                </div>
                <div className="blog-container">
                    <div className="blog-grid">
                        <div className="blr1c1">
                            <h3 className="newspaper-title">Other Articles</h3>
                            <h4 className="newspaper-title minor-article">Making an API Request</h4>
                            <div className="minibar"></div>
                            <h4 className="newspaper-title minor-article">Working with React Hooks</h4>
                            <div className="minibar"></div>
                            <h4 className="newspaper-title minor-article">Building a Database</h4>
                            <div className="minibar"></div>
                            <h4 className="newspaper-title minor-article">Adding Bootstrap To an Application</h4>
                            <div className="minibar"></div>
                            <h4 className="newspaper-title minor-article">Making the Perfect Background Image</h4>
                            <div className="minibar"></div>
                            <h4 className="newspaper-title minor-article">Dockerizing an Application</h4>
                            <div className="minibar"></div>
                        </div>
                        <div className="blr1c2">
                            <img className="blog-image" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/103854200/original/05b309aa1bd93c430b34b99589fe6f7cd534b337/sketch-a-website-design-in-just-24-hours.jpg" />
                            <h2 className="newspaper-title">Application planning, designing, and sketching</h2>
                        </div>
                        <div className="b1r1c4">
                            <h3 className="newspaper-title">Building a Work Environment</h3>
                            <span>Et Lorem proident cupidatat excepteur nulla excepteur.</span>
                        </div>  
                        <div className="b1r2c4">
                            <h3 className="newspaper-title">Building a Gallery with CSS Grid</h3>
                            <span>Duis consequat quis occaecat consectetur enim magna veniam elit eu.</span>
                        </div>
                        <div className="blr3c2">
                            <img className="blog-image" src="https://lh3.googleusercontent.com/proxy/tqOPReoXgqaxF8wILN891bMPbu_Y6KlG4W5V3YMakccxXDVlfDlsDQUGUo4daJ06LPkOue7Srz9JTwL5zUDSM8d41FbtmX7Tx8-ASmNpOzgwwr6iD6Vr7w" />
                            <h4 className="newspaper-title">Color Theory</h4>
                            <span>Sit eu laboris consequat consequat in eu sint tempor eiusmod ut ipsum enim ipsum ea.</span>
                        </div>
                        <div className="blr3c3">
                            <img className="blog-image" src="https://lh3.googleusercontent.com/proxy/tqOPReoXgqaxF8wILN891bMPbu_Y6KlG4W5V3YMakccxXDVlfDlsDQUGUo4daJ06LPkOue7Srz9JTwL5zUDSM8d41FbtmX7Tx8-ASmNpOzgwwr6iD6Vr7w" />
                            <h4 className="newspaper-title">Environmental Variables</h4>
                            <span>Tempor dolore pariatur voluptate tempor amet cupidatat cupidatat ut aliquip culpa.</span>
                        </div>
                        <div className="blr3c4">
                            <img className="blog-image" src="https://lh3.googleusercontent.com/proxy/tqOPReoXgqaxF8wILN891bMPbu_Y6KlG4W5V3YMakccxXDVlfDlsDQUGUo4daJ06LPkOue7Srz9JTwL5zUDSM8d41FbtmX7Tx8-ASmNpOzgwwr6iD6Vr7w" />
                            <h4 className="newspaper-title">React Router</h4>
                            <span>Dolor et adipisicing nostrud eiusmod do non fugiat.</span>
                        </div>                
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog;