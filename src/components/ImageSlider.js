import React, { Component } from "react";
import Slider from "react-slick";
import CarouselItem from './CarouselItem';

import vespa from '../../assets/images/vespa.jpg';

export default class ImageSlider extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log(this.props);
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true
      };
      return (
        <div>
          <h2> Images </h2>
          <Slider {...settings}>
            {this.props.carouselImages.map((carouselImage, index) => <CarouselItem key={index} item={carouselImage}/>)}
            {/* <div>
              <img className="slider-image" src={vespa} />
            </div>
            <div>
              <img className="slider-image" src={vespa} />
            </div>
            <div>
              <img className="slider-image" src={vespa} />
            </div>
            <div>
              <img className="slider-image" src={vespa} />
            </div>
            <div>
              <img className="slider-image" src={vespa} />
            </div>
            <div>
              <img className="slider-image" src={vespa} />
            </div>
            <div>
              <img className="slider-image" src={vespa} />
            </div>
            <div>
              <img className="slider-image" src={vespa} />
            </div>
            <div>
              <img className="slider-image" src={vespa} />
            </div> */}
          </Slider>
        </div>
      );
    }
  }