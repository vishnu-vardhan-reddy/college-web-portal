import React, { useEffect } from 'react';
import './FacultyCard.css';
import profile from '../profile.svg';
import { useHistory } from 'react-router-dom';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import { Button } from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

function FacultyCard({ facultyData }) {
  const history = useHistory();

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
    <div className='facultyCard' data-aos='slide-up'>
      <img
        src={facultyData.profileImg ? facultyData.profileImg : profile}
        alt='faculty_image'
      />
      <div className='facultyCardContainer'>
        <h3>{facultyData.name}</h3>
        <h3>{facultyData.position}</h3>
        <div className='facultyCardContainer__content'>
          {facultyData.area_of_interest && (
            <p>
              <strong>Areas of Interest:</strong> {facultyData.area_of_interest}
            </p>
          )}
          <div className='facultyCard__contact'>
            <CallOutlinedIcon />
            <p>{facultyData.contact}</p>
          </div>
          <div className='facultyCard__contact'>
            <MailOutlinedIcon />
            <p>{facultyData.email}</p>
          </div>
        </div>
        <Button
          onClick={() => history.push(`/faculty-profile/${facultyData.id}`)}
        >
          View profile
        </Button>
      </div>
    </div>
  );
}

export default FacultyCard;
