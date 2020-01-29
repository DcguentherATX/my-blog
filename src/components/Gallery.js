import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import model from '../../assets/images/model.jpg';

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
                        <img src={model} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Gallery;