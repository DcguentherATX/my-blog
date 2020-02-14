import React from 'react';

const CarouselItem = (props) => {
    // console.log('carousel item props', props.index);
    return (
            <div className="carousel-img">
                <img className="slider-image" src={props.item.img} onClick={() => props.handleClick(props.index)} />
            </div>
    )
}

export default CarouselItem;