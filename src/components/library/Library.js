import React from 'react';
import './Library.css';
import libImg from './libraryImg.jpg';
import { libraryContent } from './data';

function Library() {
  return (
    <div className='library'>
      <h1>LIBRARY</h1>
      <div className='libraryContainer'>
        <img src={libImg} alt='libImg' />
        <div className='libraryContainer__content'>
          {libraryContent.map((row, idx) => (
            <p key={idx}>{row}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Library;
