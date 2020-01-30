import React from 'react';

const CarouselItem = (props) => {
    // console.log('props', props);
    return (
        <div className="carousel-img">
            <img className="slider-image" src={props.item.img} />
        </div>
    )
}

export default CarouselItem;