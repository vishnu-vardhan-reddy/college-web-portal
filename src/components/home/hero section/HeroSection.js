import React from "react";
import "./HeroSection.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import yvuBanner from "./yvuBanner.jpg";
import banner2 from "./image 2.svg";
import banner3 from "./banner3.svg";

function HeroSection() {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      swipeable={true}
      interval={6000}
      transitionTime={3000}
      showArrows={true}
      stopOnHover={false}
      useKeyboardArrows={true}
    >
      <div className="carousal__item">
        <img src={banner2} />
        {/* <p className="legend">University</p> */}
      </div>
      <div className="carousal__item">
        <img src={banner3} />
        {/* <p className="legend">Academic Block</p> */}
      </div>
      <div className="carousal__item">
        <img src={banner2} />
        {/* <p className="legend">Hostels</p> */}
      </div>
    </Carousel>
  );
}

export default HeroSection;
