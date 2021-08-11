import React from 'react';
import './AdministrativeBlock.css';
import academicImg from './administrativeImg.svg';
import { administrativeBlockContent, facilities } from './data';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import HomeIcon from '@material-ui/icons/Home';

function AdministrativeBlock() {
  return (
    <div className='administrativeBlock'>
      <h1>Administrative Block</h1>
      <div className='administrativeBlockContainer'>
        <img src={academicImg} alt='libImg' />
        <div className='administrativeBlockContainer__content'>
          {administrativeBlockContent.map((row, idx) => (
            <p key={idx}>{row}</p>
          ))}
        </div>
        <div className='administrativeBlockContainer__rulesGeneral'>
          <h3>Campus Facilities</h3>
          {facilities.map((rule, idx) => (
            <div className='administrativeBlockContainer__rulesRow'>
              <ArrowRightIcon />
              <p>{rule}</p>
            </div>
          ))}
        </div>
        <div className='administrativeBlockContainer__rightContact'>
          <h3>Contact Info</h3>
          <div className='administrativeBlock__contact'>
            <CallOutlinedIcon />
            <p>9999999999</p>
          </div>
          <div className='administrativeBlock__contact'>
            <MailOutlinedIcon />
            <p>administrativeBlock@ysrec.ac.in</p>
          </div>
          <div className='administrativeBlock__contact'>
            <HomeIcon />
            <p>proddatur, Andhra</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdministrativeBlock;
