import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
// import { Link } from 'react-router-dom';
import './DropDown.css';
import { HashLink as Link } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';

function AcademicsDropDown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <>
      <Fade>
        <ul
          onClick={handleClick}
          className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
          <li>
            <Link
              className='dropdown-link'
              to='/academics/#classSchedule'
              onClick={() => setClick(false)}
              scroll={(el) => scrollWidthOffset(el)}
              smooth
            >
              Class Schedule
            </Link>
          </li>
          <li>
            <Link
              className='dropdown-link'
              to='/academics/#examSchedule'
              onClick={() => setClick(false)}
              scroll={(el) => scrollWidthOffset(el)}
              smooth
            >
              Exam Schedule
            </Link>
          </li>
          <li>
            <Link
              className='dropdown-link'
              to='/academics/#calender'
              onClick={() => setClick(false)}
              scroll={(el) => scrollWidthOffset(el)}
              smooth
            >
              Calenders & Timetables
            </Link>
          </li>
        </ul>
      </Fade>
    </>
  );
}

export default AcademicsDropDown;
