import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = () => (
  <Carousel autoPlay>
    <div className="slide">
      <img alt="" src="slide1.PNG" />
    </div>

    <div className="slide">
      <img alt="" src="slide2.PNG" />
    </div>

    <div className="slide">
      <img alt="" src="slide3.PNG" />
    </div>
  </Carousel>
);

export default MyCarousel;
