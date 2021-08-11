import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import './DropDown.css';
import Fade from 'react-reveal/Fade';

function AboutDropDown() {
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
            <a
              className='dropdown-link'
              href='http://www.yogivemanauniversity.ac.in/'
              target='_blank'
              rel='noreferrer'
              onClick={() => setClick(false)}
            >
              About University
            </a>
          </li>
          {/* <li>
            <Link
              className="dropdown-link"
              to="/"
              onClick={() => setClick(false)}
            >
              Visions
            </Link>
          </li> */}
          <li>
            <Link
              className='dropdown-link'
              to='/about-college'
              onClick={() => setClick(false)}
            >
              About College
            </Link>
          </li>
          {/* <li>
            <Link
              className='dropdown-link'
              to='/'
              onClick={() => setClick(false)}
            >
              Chancellor
            </Link>
          </li> */}
          <li>
            <a
              className='dropdown-link'
              target='_blank'
              rel='noreferrer'
              href='http://www.yogivemanauniversity.ac.in/vc_prof.php'
              onClick={() => setClick(false)}
            >
              Vice Chancellor profile
            </a>
          </li>
          <li>
            <a
              className='dropdown-link'
              href='http://www.yogivemanauniversity.ac.in/colleges/rector.php'
              onClick={() => setClick(false)}
              target='_blank'
              rel='noreferrer'
            >
              Registrar Profile
            </a>
          </li>
          <li>
            <Link
              className='dropdown-link'
              to='/pro'
              onClick={() => setClick(false)}
            >
              principal Profile
            </Link>
          </li>
        </ul>
      </Fade>
    </>
  );
}

export default AboutDropDown;
