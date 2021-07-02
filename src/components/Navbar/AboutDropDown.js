import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./DropDown.css";
import Fade from "react-reveal/Fade";

function AboutDropDown() {
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
              About University
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
              About College
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-link"
              to="/"
              onClick={() => setClick(false)}
            >
              Chancellor
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-link"
              to="/"
              onClick={() => setClick(false)}
            >
              Vice Chancellor profile
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-link"
              to="/"
              onClick={() => setClick(false)}
            >
              Registrar Profile
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-link"
              to="/"
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
