import React, { useEffect } from 'react';
import './ExecutiveCard.css';
import profile from './profile.svg';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import { Button } from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ExecutiveCard() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-out-quart',
      disable: window.innerWidth < 1024,
      delay: 200,
    });
  });
  return (
    <div className='executiveCard' data-aos='slide-up'>
      <img src={profile} alt='authorities__image' />
      <div className='executiveCardContainer'>
        <h3>Dr K.Kiran Kumar</h3>
        <h3>Chancellor</h3>
        <div className='executiveCardContainer__content'>
          {/* <p>
            <strong>Ph.D</strong>- Indian Institute of Technology Delhi, India
          </p>
          <p>
            <strong>Areas of Interest:</strong> Digital Image Processing, IOT
          </p> */}
          <div className='executiveCard__contact'>
            <CallOutlinedIcon />
            <p>9999999999</p>
          </div>
          <div className='executiveCard__contact'>
            <MailOutlinedIcon />
            <p>Kiran@yvu.ac.in</p>
          </div>
        </div>
        <Button>View profile</Button>
      </div>
    </div>
  );
}

export default ExecutiveCard;
