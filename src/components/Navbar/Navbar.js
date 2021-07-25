import React, { useState } from 'react'
import './Navbar.css'
import { NavHashLink as Link } from 'react-router-hash-link'
import DropDown from './DropDown'
import collegeLogo from './collegeLogo.svg'
import AcademicsDropDown from './AcademicsDropDown'
import CampusDropDown from './CampusDropDown'
import AdministrativeDropDown from './AdministrativeDropDown'
import AboutDropDown from './AboutDropDown'

function Navbar() {
  const [click, setClick] = useState(false)
  const [departmentDropdown, setDepartmentDropdown] = useState(false)
  const [academicsDropdown, setAcademicsDropdown] = useState(false)
  const [campusDropdown, setCampusDropdown] = useState(false)
  const [administrationDropdown, setAdministrationDropdown] = useState(false)
  const [aboutDropdown, setAboutDropdown] = useState(false)

  const closeMobileMenu = () => setClick(false)

  const onMouseEnterDep = () => {
    if (window.innerWidth < 960) {
      setDepartmentDropdown(false)
    } else {
      setDepartmentDropdown(true)
    }
  }

  const onMouseLeaveDep = () => {
    if (window.innerWidth < 960) {
      setDepartmentDropdown(false)
    } else {
      setDepartmentDropdown(false)
    }
  }

  const onMouseEnterAcademics = () => {
    if (window.innerWidth < 960) {
      setAcademicsDropdown(false)
    } else {
      setAcademicsDropdown(true)
    }
  }

  const onMouseLeaveAcademics = () => {
    if (window.innerWidth < 960) {
      setAcademicsDropdown(false)
    } else {
      setAcademicsDropdown(false)
    }
  }

  const onMouseEnterCampus = () => {
    if (window.innerWidth < 960) {
      setCampusDropdown(false)
    } else {
      setCampusDropdown(true)
    }
  }

  const onMouseLeaveCampus = () => {
    if (window.innerWidth < 960) {
      setCampusDropdown(false)
    } else {
      setCampusDropdown(false)
    }
  }

  const onMouseEnterAdministration = () => {
    if (window.innerWidth < 960) {
      setAdministrationDropdown(false)
    } else {
      setAdministrationDropdown(true)
    }
  }

  const onMouseLeaveAdministration = () => {
    if (window.innerWidth < 960) {
      setAdministrationDropdown(false)
    } else {
      setAdministrationDropdown(false)
    }
  }

  const onMouseEnterAbout = () => {
    if (window.innerWidth < 960) {
      setAboutDropdown(false)
    } else {
      setAboutDropdown(true)
    }
  }

  const onMouseLeaveAbout = () => {
    if (window.innerWidth < 960) {
      setAboutDropdown(false)
    } else {
      setAboutDropdown(false)
    }
  }

  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
    const yOffset = -80
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
  }

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          <img src={collegeLogo} alt='' />
          <div className='navbar-title'>
            <h1>YSR ENGINEERING COLLEGE OF Y.V.U</h1>
            <div className='navbar__contact'>
              <div className='navbar__email'>
                <p>EMAIL</p>
                <p>principal.yvuce@gmail.com</p>
              </div>
              <div className='borderRight'></div>
              <div className='navbar__tollNo'>
                <p>Toll Free</p>
                <p>180 000 000</p>
              </div>
            </div>
          </div>
        </Link>
        <div className='menu-icon' onClick={() => setClick(!click)}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
              scroll={(el) => scrollWidthOffset(el)}
            >
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnterAdministration}
            onMouseLeave={onMouseLeaveAdministration}
          >
            <Link
              smooth
              scroll={(el) => scrollWidthOffset(el)}
              to='/administration'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Administration
              {/* <i className="fas fa-caret-down" /> */}
            </Link>
            {/* {administrationDropdown && <AdministrativeDropDown />} */}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnterAcademics}
            onMouseLeave={onMouseLeaveAcademics}
          >
            <Link
              smooth
              scroll={(el) => scrollWidthOffset(el)}
              to='/#academics'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Academics <i className='fas fa-caret-down' />
            </Link>
            {academicsDropdown && <AcademicsDropDown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnterDep}
            onMouseLeave={onMouseLeaveDep}
          >
            <Link
              scroll={(el) => scrollWidthOffset(el)}
              smooth
              to='/#departments'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Departments <i className='fas fa-caret-down' />
            </Link>
            {departmentDropdown && <DropDown />}
          </li>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnterCampus}
            onMouseLeave={onMouseLeaveCampus}
          >
            <Link
              smooth
              scroll={(el) => scrollWidthOffset(el)}
              to='/#campuslife'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Campus <i className='fas fa-caret-down' />
            </Link>
            {campusDropdown && <CampusDropDown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnterAbout}
            onMouseLeave={onMouseLeaveAbout}
          >
            <Link
              smooth
              scroll={(el) => scrollWidthOffset(el)}
              to='/#aboutus'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us <i className='fas fa-caret-down' />
            </Link>
            {aboutDropdown && <AboutDropDown />}
          </li>
          <li className='nav-item'>
            <Link
              smooth
              scroll={(el) => scrollWidthOffset(el)}
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
