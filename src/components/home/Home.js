import React from 'react';
import './Home.css';
import HeroSection from './hero section/HeroSection';
import EventSection from './events/EventSection';
import Departments from './departments/Departments';
import Vlog from './vlog/Vlog';
import RecentEvents from './recent events/RecentEvents';
import Gallery from './gallery/Gallery';
import DirectorMessage from './message/DirectorMessage';
import PhotoGallery from './photo_gallery/PhotoGallery';
import HomeFAQ from './home_faq/HomeFAQ';

function Home() {
  return (
    <div className='home' id='home'>
      <HeroSection />
      <EventSection />
      <Departments />
      <DirectorMessage />
      <RecentEvents />
      <Vlog />
      <PhotoGallery />
      <HomeFAQ />
    </div>
  );
}

export default Home;
