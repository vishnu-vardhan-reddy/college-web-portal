import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./SubDropDown.css";

function SubDropDown({ subMenuItems, department }) {
  const [click, setClick] = useState(false);
  // console.log(subMenuItems);
  const handleClick = () => setClick(!click);

  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "subDropdown-menu clicked" : "subDropdown-menu"}
      >
        {subMenuItems.map((item, index) => (
          <li key={index} className="subDropdown__li">
            <Link
              scroll={(el) => scrollWidthOffset(el)}
              to={`/department/${department}/#${item.path}`}
              onClick={() => setClick(false)}
              smooth
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SubDropDown;
