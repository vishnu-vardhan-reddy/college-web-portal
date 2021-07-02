import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./DropDown.css";
import Fade from "react-reveal/Fade";

function AdministrativeDropDown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <Fade>
        <ul
          onClick={handleClick}
          className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        >
          <li>
            <Link
              className="dropdown-link"
              to="/"
              onClick={() => setClick(false)}
            >
              Admissions
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-link"
              to="/"
              onClick={() => setClick(false)}
            >
              Visions
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-link"
              to="/"
              onClick={() => setClick(false)}
            >
              Student Services
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-link"
              to="/"
              onClick={() => setClick(false)}
            >
              Registar's Office
            </Link>
          </li>
        </ul>
      </Fade>
    </>
  );
}

export default AdministrativeDropDown;
