import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import './DropDown.css';
// import SubDropDown from './SubDropDown'
// import { SubMenuItems } from './SubMenuItems'
import Fade from 'react-reveal/Fade';

function DropDown() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isHover, setIsHover] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const handleClick = () => setClick(!click);

  const onMouseEnter = (index) => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
      let hover = isHover;
      hover[index] = true;
      setIsHover({ ...isHover, hover });
    }
  };

  const onMouseLeave = (index) => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
      let hover = isHover;
      hover[index] = false;
      setIsHover({ ...isHover, hover });
    }
  };
  return (
    <>
      <Fade>
        <ul
          onClick={handleClick}
          className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
          {MenuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => onMouseEnter(index)}
              onMouseLeave={() => onMouseLeave(index)}
              isHover={isHover[index]}
            >
              <Link
                className={item.cName}
                to={`/department/${item.id}`}
                onClick={() => setClick(false)}
              >
                {item.title}
                {/* <i className='fas fa-caret-right' /> */}
              </Link>
              {/* {isHover[index] && dropdown && (
                <>
                  {console.log(index)}
                  <SubDropDown
                    key={index}
                    subMenuItems={SubMenuItems}
                    department={item.path}
                  />
                </>
              )} */}
            </li>
          ))}
        </ul>
      </Fade>
    </>
  );
}

export default DropDown;
