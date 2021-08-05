import React from 'react';
import './AboutCollege.css';
import collegeImg from './collegeImg.jpg';
import { aboutCollege, collegeMissions, collegeVisions } from './data';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function AboutCollege() {
  return (
    <div className='aboutCollege'>
      <div className='aboutCollegeContainer'>
        <h1>About College</h1>
        <img src={collegeImg} alt={''} />
        <div className='aboutCollegeContainer__about'>
          {aboutCollege.map((row, idx) => (
            <>
              <p index={idx}>{row}</p>
              <br />
            </>
          ))}
        </div>
        <div className='aboutCollegeContainer__rules'>
          <div className='aboutCollegeContainer__rulesGeneral'>
            <h2>College Missions</h2>
            {collegeMissions.map((rule, idx) => (
              <div className='aboutCollegeContainer__rulesRow'>
                <ArrowRightIcon />
                <p>{rule}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='aboutCollegeContainer__rules'>
          <div className='aboutCollegeContainer__rulesGeneral'>
            <h2>College Visions</h2>
            {collegeVisions.map((rule, idx) => (
              <div className='aboutCollegeContainer__rulesRow'>
                <ArrowRightIcon />
                <p>{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCollege;
