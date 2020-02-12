import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navigation from './Navigation';
import ImageSlider from './ImageSlider';
import Footer from './Footer';
import Axios from 'axios';

import cartagena from '../../assets/images/cartagena.jpg';
import vespa from '../../assets/images/vespa.jpg';


const Destinations = () => {
    // initialize state

    const [mainImage, setMainImage] = useState({
        img: cartagena,
        // likes: 5,
        // artist: 'Pablo Rodriguez'
    })

    const [carouselImages, setCarouselImages] = useState([
        {img: vespa},
        {img: vespa},
        {img: vespa},
        {img: vespa},
        {img: vespa},
        {img: vespa},
        // {img: vespa},
        // {img: vespa},
        // {img: vespa}
    ])
    
    const [searchTerm, setSearchTerm] = useState('');

    // converts api response to match state

    const mapResults = (photos) => {
        let updated = [];
        // console.log('in mapResults', photos);

        photos.forEach((photo) => {
            let pic = photo.urls.small;
            updated.push({ img: pic });
        })
        return updated;
    }

    // event handlers

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }
// handleSubmit for on client side

    // const handleSubmit = () => {
    //     // console.log('term', searchTerm)
    //     if (searchTerm) {
    //     Axios.get('https://api.unsplash.com/search/photos', {
    //         params: {
    //             query: searchTerm
    //         },
    //         headers: {
    //             Authorization: 'Client-ID'
    //         }
    //     })
    //     .then((response) => {
    //         const res = (response.data.results);
    //         let newPhotos = mapResults(res);
    //         setCarouselImages(newPhotos);
    //         setMainImage(newPhotos[0]);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // } else {
    //     alert('Please enter a search term');
    // }
    // }

    // handleSubmit on server side

    const handleSubmit = () => {
        if (searchTerm) {
            Axios.get('/images', {
                params: {
                    term: searchTerm
                }
            })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
    
    return (
        <>
            <Navigation />
            <div className="destinations">
                <div className="top-container">
                    <h1 className="page-title">Destinations</h1>
                    <div className="info-container">
                        <p>Dolore est ea esse irure id proident consequat exercitation ullamco. Adipisicing qui consequat aliquip nostrud sint ea adipisicing sint sit aute id veniam id tempor. Est fugiat magna tempor eu. Qui sunt pariatur proident occaecat ullamco dolore sint labore enim id esse. Lorem ipsum cupidatat tempor cillum et. Labore duis magna culpa in cillum sint excepteur irure non aliqua. Lorem sunt eu consectetur aliquip pariatur in consequat proident id sunt id.</p>
                        <p>Sint proident reprehenderit veniam laborum pariatur. Reprehenderit incididunt dolore voluptate proident anim aliquip minim. Culpa officia anim reprehenderit quis esse aute veniam laborum incididunt commodo. Nostrud aute sunt dolore consequat cupidatat Lorem consectetur in pariatur commodo fugiat. Veniam officia quis quis esse deserunt duis. Consequat non excepteur minim ea consequat esse pariatur non occaecat cillum ea nulla nostrud.</p>
                        <p>Et ex irure do ipsum voluptate non sit laboris cupidatat deserunt excepteur. Lorem do quis mollit voluptate Lorem deserunt aute. Occaecat do excepteur ad dolor fugiat occaecat fugiat ea. Excepteur excepteur magna do deserunt aliqua consequat do ullamco do aliquip commodo consequat ad. Aliqua aliqua consectetur in veniam aliquip esse minim consequat ipsum. Est ut cillum non ullamco pariatur ullamco pariatur. Elit esse quis fugiat est.</p>
                    </div>
                </div>
                <div className="search-container">
                    <div className="search-bar">
                        <label className="label">
                            Search:
                        </label>
                        <input className="search" type="text" value={searchTerm} onChange={handleChange} placeholder="search" />
                        <Button onClick={(searchTerm) => handleSubmit(searchTerm)} variant="primary" >Submit</Button>
                    </div>
                    <div id="search-error">Please enter search word</div>
                    <div className="dest-main-container">
                        <img className="dest-main-image" src={mainImage.img } alt="cartagena" />
                        {/* <div className="dest-img-info">
                            <div>Likes: {mainImage.likes} </div><div>Artist: {mainImage.artist}</div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="slider-container">
                <ImageSlider carouselImages={carouselImages}/>
            </div>
            <Footer />
        </>
    )
}

export default Destinations;