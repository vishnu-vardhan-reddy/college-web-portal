import React from 'react';
import './Library.css';
import libImg from './libraryImg.jpg';
import { libraryContent, borrowingRules } from './data';
import BooksTable from './Books';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import HomeIcon from '@material-ui/icons/Home';
import LibraryFAQ from './LibraryFAQ';

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
        <div className='libraryContainer__table'>
          <h3>Books in each Department</h3>
          <div className='libraryContainer__tableContainer'>
            <BooksTable />
          </div>
        </div>
        <div className='libraryContainer__rulesGeneral'>
          <h3>Borrowing Rules</h3>
          {borrowingRules.map((rule, idx) => (
            <div className='libraryContainer__rulesRow'>
              <ArrowRightIcon />
              <p>{rule}</p>
            </div>
          ))}
        </div>
        <div className='libraryContainer__rightContact'>
          <h3>Contact Info</h3>
          <div className='library__contact'>
            <CallOutlinedIcon />
            <p>9999999999</p>
          </div>
          <div className='library__contact'>
            <MailOutlinedIcon />
            <p>library@ysrec.ac.in</p>
          </div>
          <div className='library__contact'>
            <HomeIcon />
            <p>proddatur, Andhra</p>
          </div>
        </div>
        <LibraryFAQ />
      </div>
    </div>
  );
}

export default Library;
