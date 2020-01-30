import React, { Component } from "react";
import Slider from "react-slick";
import CarouselItem from './CarouselItem';

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
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true
      };
      return (
        <div>
          <h2 className="slider-title">Images</h2>
          <Slider {...settings}>
            {this.props.carouselImages.map((carouselImage, index) => <CarouselItem key={index} item={carouselImage}/>)}
          </Slider>
        </div>
      );
    }
  }