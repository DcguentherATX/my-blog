import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

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
    return (
        <>
            <Navigation />
            <div className="gallery">
                <div className="top-container">
                    <h1>Gallery</h1>
                    <div className="info-container">
                        <p>Dolore est ea esse irure id proident consequat exercitation ullamco. Adipisicing qui consequat aliquip nostrud sint ea adipisicing sint sit aute id veniam id tempor. Est fugiat magna tempor eu. Qui sunt pariatur proident occaecat ullamco dolore sint labore enim id esse. Lorem ipsum cupidatat tempor cillum et. Labore duis magna culpa in cillum sint excepteur irure non aliqua. Lorem sunt eu consectetur aliquip pariatur in consequat proident id sunt id.</p>
                        <p>Sint proident reprehenderit veniam laborum pariatur. Reprehenderit incididunt dolore voluptate proident anim aliquip minim. Culpa officia anim reprehenderit quis esse aute veniam laborum incididunt commodo. Nostrud aute sunt dolore consequat cupidatat Lorem consectetur in pariatur commodo fugiat. Veniam officia quis quis esse deserunt duis. Consequat non excepteur minim ea consequat esse pariatur non occaecat cillum ea nulla nostrud.</p>
                        <p>Et ex irure do ipsum voluptate non sit laboris cupidatat deserunt excepteur. Lorem do quis mollit voluptate Lorem deserunt aute. Occaecat do excepteur ad dolor fugiat occaecat fugiat ea. Excepteur excepteur magna do deserunt aliqua consequat do ullamco do aliquip commodo consequat ad. Aliqua aliqua consectetur in veniam aliquip esse minim consequat ipsum. Est ut cillum non ullamco pariatur ullamco pariatur. Elit esse quis fugiat est.</p>
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
            <Footer />
        </>
    )
}

export default Gallery;