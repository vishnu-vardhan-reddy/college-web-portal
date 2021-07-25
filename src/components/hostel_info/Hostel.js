import React from 'react';
import './Hostel.css';
import hostelBg from './hostel_main.jpg';
import arrowImg from '../utils/arrow.svg';
import { hostelData, hostelAbout, hostelRules } from './data';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import HostelFAQ from './HostelFAQ';

function Hostel() {
  return (
    <div className='hostel'>
      <div className='hostelContainer'>
        <h1>Hostels</h1>
        <img src={hostelBg} alt={''} />
        <div className='hostelContainer__about'>
          {hostelAbout.map((row, idx) => (
            <>
              <p index={idx}>{row}</p>
              <br />
            </>
          ))}
        </div>
        <div className='hostelContainer__list'>
          <h2>List of hostels for male & female students of YSR College</h2>
          <div className='hostelContainer__listContainer'>
            <div className='hostelContainer__listLeft'>
              <h3>For Boys</h3>
              {hostelData.boys?.map(({ id, hostelName }) => (
                <div className='hostelContainer__listRow' key={id}>
                  <img src={arrowImg} alt='arrow' />
                  <p>{hostelName}</p>
                </div>
              ))}
            </div>
            <div className='hostelContainer__listRight'>
              <h3>For Girls</h3>
              {hostelData.girls?.map(({ id, hostelName }) => (
                <div className='hostelContainer__listRow' key={id}>
                  <img src={arrowImg} alt='arrow' />
                  <p>{hostelName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='hostelContainer__rules'>
          <div className='hostelContainer__rulesGeneral'>
            <h2>Hostel Rules</h2>
            {hostelRules.general.map((rule, idx) => (
              <div className='hostelContainer__rulesRow'>
                <ArrowRightIcon />
                <p>{rule}</p>
              </div>
            ))}
          </div>
          <div className='hostelContainer__rulesGeneral'>
            <h3>For Boys</h3>
            {hostelRules.boys.map((rule, idx) => (
              <div className='hostelContainer__rulesRow'>
                <ArrowRightIcon />
                <p>{rule}</p>
              </div>
            ))}
          </div>
          <div className='hostelContainer__rulesGeneral'>
            <h3>For Girls</h3>
            {hostelRules.girls.map((rule, idx) => (
              <div className='hostelContainer__rulesRow'>
                <ArrowRightIcon />
                <p>{rule}</p>
              </div>
            ))}
          </div>
        </div>
        <HostelFAQ />
      </div>
    </div>
  );
}

export default Hostel;
