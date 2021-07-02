import React from "react";
import "./Home.css";
import HeroSection from "./hero section/HeroSection";
import EventSection from "./events/EventSection";
import Departments from "./departments/Departments";
import Vlog from "./vlog/Vlog";
import RecentEvents from "./recent events/RecentEvents";
import Gallery from "./gallery/Gallery";

function Home() {
  return (
    <div className="home" id="home">
      <HeroSection />
      <EventSection />
      <Departments />
      <RecentEvents />
      <Gallery />
      <Vlog />
    </div>
  );
}

export default Home;
