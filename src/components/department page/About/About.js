import React from 'react';
import './About.css';
import image from '../DepartmentImage.jpg';

function About({ about }) {
  return (
    <div className='about'>
      <div className='aboutContainer'>
        <img src={image} alt='about_image' />
        <h2>About</h2>
        <p>{about}</p>
      </div>
    </div>
  );
}

export default About;
