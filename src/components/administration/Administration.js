import React from 'react';
import './Administration.css';
import Authorities from './Authorities/Authorities';

function Administration() {
  return (
    <div className='administration'>
      <h1>ADMINISTRATION</h1>
      <div className='administrationContainer'>
        <Authorities />
      </div>
    </div>
  );
}

export default Administration;
