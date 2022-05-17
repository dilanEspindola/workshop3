// Base
import React from "react";

// Carousel
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
  return (
    <Carousel>
      <div>
        <figure className="ImageWrapper">
          <img
            className="imageSlide"
            src="./assets/images/Card.png"
            alt="card"
            title="card"
          />
        </figure>
      </div>
      <div>
        <figure className="ImageWrapper">
          <img
            className="imageSlide"
            src="./assets/images/Card.png"
            alt="card"
            title="card"
          />
        </figure>
      </div>
      <div>
        <figure className="ImageWrapper">
          <img
            className="imageSlide"
            src="./assets/images/Card.png"
            alt="card"
            title="card"
          />
        </figure>
      </div>
    </Carousel>
  );
};

export default Slider;
