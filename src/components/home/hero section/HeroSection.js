import React from 'react';
import './HeroSection.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import yvuBanner from './yvuBanner.jpg';
import banner2 from './image 2.svg';
import banner3 from './banner3.svg';

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
      className='hero-section'
    >
      <div className='carousal__item'>
        <img
          src='https://wallpapercave.com/wp/wp2140467.jpg'
          alt='corousal__image'
        />
        {/* <p className="legend">University</p> */}
      </div>
      <div className='carousal__item'>
        <img
          src='https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          alt='corousal__image'
        />
        {/* <p className="legend">Academic Block</p> */}
      </div>
      <div className='carousal__item'>
        <img
          src='https://images.unsplash.com/photo-1536925155833-43e9c2b2f499?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
          alt='corousal__image'
        />
        {/* <p className="legend">Hostels</p> */}
      </div>
    </Carousel>
  );
}

export default HeroSection;
