import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ImageSlider from './ImageSlider';
import Axios from 'axios';

const PhotoHunt = () => {
    // initialize state

    const [mainImage, setMainImage] = useState({})

    const [carouselImages, setCarouselImages] = useState([])
    
    const [searchTerm, setSearchTerm] = useState('');

    // set state on first render;

    useEffect(() => {
        // keeps nav and footer visible on refresh
        const nav = document.getElementById("navigation");
        const foot = document.getElementById("footer-container");
        if (nav.style.display === "none") {
          nav.style.display = "block";
        }
        if (foot.style.display === "none") {
          foot.style.display = "flex";
        }

        Axios.get('/images', {
            params: {
                term: 'umbrellas'
            }
        })
        .then((response) => {
            const photos = response.data;
            // console.log(photos);
            const newPhotos = mapResults(photos);
            setCarouselImages(newPhotos);
            setMainImage(newPhotos[0]);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    // converts api response to match state

    const mapResults = (photos) => {
        let updated = [];
        // console.log('in mapResults', photos);

        photos.forEach((photo) => {
            let pic = photo.image;
            updated.push({ 
                img: photo.image,
                likes: photo.likes,
                photographer: photo.photographer
             });
        })
        return updated;
    }

    // event handlers

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleClick = (index) => {
        setMainImage(carouselImages[index]);
    }

    // handleSubmit on server side

    const handleSubmit = () => {
        if (searchTerm) {
            Axios.get('/images', {
                params: {
                    term: searchTerm
                }
            })
            .then((response) => {
                const photos = response.data;
                // console.log(photos);
                const newPhotos = mapResults(photos);
                setCarouselImages(newPhotos);
                setMainImage(newPhotos[0]);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
    
    return (
        <>
            <div className="destinations">
                <div className="top-container">
                    <h2 className="page-title">Photo Hunt</h2>
                    <div className="info-container">
                        <p>
                            The purpose of this page was to make an API request to my favorite API, Unsplash, and create an
                            interactive search that will render images to the page.  In addition, I wanted to display multiple
                            photos in a carousel slider, and make the images clickable and resplace the main image.  This also
                            seemed to be the perfect opportunity to work with React Hooks, which I had not previously used in
                            development.
                        </p>
                        <p>
                            I started developing this page by creating a simple search bar and making sure that my state was
                            properly updating as the user entered a search term.  From there I developed a main image container
                            that would render the first image from the API response.  Finally, I used React Slick Carousel to
                            display the first ten images returned from the API.
                        </p>
                        <p>
                            Initially, I made the API request directly from the PhotoHunt Component on the client side, however, this 
                            is not exactly where I wanted to place this logic.  I ended up swapping over the request to the server and
                            passing the search term in state via a constructed route.  I played around with several ways to make the
                            request from the server according to the documentation I found online, and nothing seemed to be working.  Finally,
                            I installed the request library and it worked like a charm and my API request was working successfully.
                        </p>
                        <p>
                            There is something exciting about successfully making an API request and modifying the data to fit your
                            applications need.  My favorite part of building this page was ciphering through the response data and 
                            pulling out a couple details that may be of interest to the user (such as the photographer).  Finally,
                            I added a simple click handler to my images in the carousel that updated the main image for the page.  I
                            was able to manage this process with hooks, which made me feel very accomplished for a first time hook-user.
                        </p>
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
                        <div className="dest-img-info">
                            <div>Likes: {mainImage.likes} </div><div className="artist-info"><div className="artist">Photographer: </div><span>{mainImage.photographer}</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slider-container">
                <ImageSlider carouselImages={carouselImages} handleClick={handleClick}/>
            </div>
        </>
    )
}

export default PhotoHunt;