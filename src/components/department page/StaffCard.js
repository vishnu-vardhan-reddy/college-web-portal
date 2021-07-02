import React, { useEffect } from "react";
import "./FacultyCard.css";
import profile from "./profile.svg";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import MailOutlinedIcon from "@material-ui/icons/MailOutlined";
import { Button } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";

function StaffCard() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      disable: window.innerWidth < 1024,
      delay: 200,
    });
  });
  return (
    <div className="facultyCard" data-aos="slide-up">
      <img src={profile} />
      <div className="facultyCardContainer">
        <h3>Dr K.Kiran Kumar</h3>
        <h3>Associate Proffesor</h3>
        <div className="facultyCardContainer__content">
          <p>
            <strong>Ph.D</strong>- Indian Institute of Technology Delhi, India
          </p>
          <p>
            <strong>Areas of Interest:</strong> Digital Image Processing, IOT
          </p>
          <div className="facultyCard__contact">
            <CallOutlinedIcon />
            <p>9999999999</p>
          </div>
          <div className="facultyCard__contact">
            <MailOutlinedIcon />
            <p>Kiran@yvu.ac.in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffCard;
