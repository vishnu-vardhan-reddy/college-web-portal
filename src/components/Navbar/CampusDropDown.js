import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import './DropDown.css';
import { SubMenuItems } from './SubMenuItems';
import Fade from 'react-reveal/Fade';

function CampusDropDown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

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
              to='/administrativeBlock'
              onClick={() => setClick(false)}
            >
              Administrative Block
            </Link>
          </li>
          <li>
            <Link
              className='dropdown-link'
              to='/academicBlock'
              onClick={() => setClick(false)}
            >
              Academic Block
            </Link>
          </li>
          <li>
            <Link
              className='dropdown-link'
              to='/hostels'
              onClick={() => setClick(false)}
            >
              Hostels
            </Link>
          </li>
          <li>
            <Link
              className='dropdown-link'
              to='/library'
              onClick={() => setClick(false)}
            >
              Library
            </Link>
          </li>
          {/* <li>
            <Link
              className='dropdown-link'
              to='/'
              onClick={() => setClick(false)}
            >
              Alumni
            </Link>
          </li> */}
        </ul>
      </Fade>
    </>
  );
}

export default CampusDropDown;
