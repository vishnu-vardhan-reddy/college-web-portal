import React from 'react';
import './About.css';
import image from './DepartmentImage.jpg';

function About() {
  return (
    <div className='about'>
      <div className='aboutContainer'>
        <img src={image} alt='about_image' />
        <h2>About</h2>
        <p>
          One of the most sought after courses amongst engineering students,
          Computer Science Engineering (CSE) is One of the most sought after
          courses amongst engineering students, Computer Science Engineering
          (CSE) is an academic programme which integrates the field of Computer
          Engineering and Computer Science. The programme, which emphasises the
          basics of computer programming and networking, comprises a plethora of
          topics. The said topics are related to computation, algorithms,
          programming languages, program design, One of the most sought after
          courses amongst engineering students, Computer Science Engineering
          (CSE) is an academic programme which integrates the field of Computer
          Engineering and Computer Science. The programme, which emphasises the
          basics of computer programming and networking, comprises a plethora of
          topics. The said topics are related to computation, algorithms,
          programming languages, program design, an academic programme which
          integrates the field of Computer Engineering and Computer Science. The
          programme, which emphasises the basics of computer programming and
          networking, comprises a plethora of topics.
        </p>
      </div>
    </div>
  );
}

export default About;
