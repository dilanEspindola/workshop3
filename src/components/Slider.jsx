import React from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
      className="mySwiper"
    >
      <SwiperSlide>
        <figure className="ImageWrapper">
          <img
            className="imageSlide"
            src="./assets/images/Card.png"
            alt="card"
            title="card"
          />
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure className="ImageWrapper">
          <img
            className="imageSlide"
            src="./assets/images/Card.png"
            alt="card"
            title="card"
          />
        </figure>
      </SwiperSlide>
      <SwiperSlide>
        <figure className="ImageWrapper">
          <img
            className="imageSlide"
            src="./assets/images/Card.png"
            alt="card"
            title="card"
          />
        </figure>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
