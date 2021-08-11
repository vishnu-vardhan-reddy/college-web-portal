import React from 'react';
import './AcademicBlock.css';
import academicImg from './academicImg.svg';
import { academicBlockContent, facilities } from './data';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import HomeIcon from '@material-ui/icons/Home';

function AcademicBlock() {
  return (
    <div className='academicBlock'>
      <h1>Academic Block</h1>
      <div className='academicBlockContainer'>
        <img src={academicImg} alt='libImg' />
        <div className='academicBlockContainer__content'>
          {academicBlockContent.map((row, idx) => (
            <p key={idx}>{row}</p>
          ))}
        </div>
        <div className='academicBlockContainer__rulesGeneral'>
          <h3>Campus Facilities</h3>
          {facilities.map((rule, idx) => (
            <div className='academicBlockContainer__rulesRow'>
              <ArrowRightIcon />
              <p>{rule}</p>
            </div>
          ))}
        </div>
        <div className='academicBlockContainer__rightContact'>
          <h3>Contact Info</h3>
          <div className='academicBlock__contact'>
            <CallOutlinedIcon />
            <p>9999999999</p>
          </div>
          <div className='academicBlock__contact'>
            <MailOutlinedIcon />
            <p>academicBlock@ysrec.ac.in</p>
          </div>
          <div className='academicBlock__contact'>
            <HomeIcon />
            <p>proddatur, Andhra</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicBlock;
