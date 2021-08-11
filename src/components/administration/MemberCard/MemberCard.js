import React, { useEffect } from 'react';
import './MemberCard.css';
import profile from '../profile.svg';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import { Button } from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MemberCard() {
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
    <div className='memberCard' data-aos='flip-up'>
      <img src={profile} alt='' />
      <div className='memberCardContainer'>
        <h3>Dr K.Kiran Kumar</h3>
        <h3>Chancellor</h3>
        <div className='memberCardContainer__content'>
          <p>
            <strong>Ph.D</strong>- Indian Institute of Technology Delhi, India
          </p>
          <p>
            <strong>Areas of Interest:</strong> Digital Image Processing, IOT
          </p>
          <div className='memberCard__contact'>
            <CallOutlinedIcon />
            <p>9999999999</p>
          </div>
          <div className='memberCard__contact'>
            <MailOutlinedIcon />
            <p>Kiran@yvu.ac.in</p>
          </div>
        </div>
        <Button>View profile</Button>
      </div>
    </div>
  );
}

export default MemberCard;
