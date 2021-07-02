import React from "react";
import "./Departments.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { IconButton } from "@material-ui/core";

function Departments() {
  return (
    <div className="departments" id="departments">
      <div className="departmentsContainer">
        <h1>DEPARTMENTS</h1>
        <div className="departmentsContainer__cards">
          <div className="departmentsContainer__cardsLeft">
            <div
              className="departmentsContainer__card"
              style={{ borderLeft: "4px solid #f77b23" }}
            >
              <span></span>
              <h3>Computer science and Engineering</h3>
              <IconButton style={{ backgroundColor: "#f77b23" }}>
                <ArrowRightAltIcon />
              </IconButton>
            </div>
            <div
              className="departmentsContainer__card"
              style={{ borderLeft: "4px solid #2777B0" }}
            >
              <span></span>
              <h3>Civil Engineering</h3>
              <IconButton style={{ backgroundColor: "#2777B0" }}>
                <ArrowRightAltIcon />
              </IconButton>
            </div>
            <div
              className="departmentsContainer__card"
              style={{ borderLeft: "4px solid #DBCF04" }}
            >
              <span></span>
              <h3>Electrical and Electronic Engineering</h3>
              <IconButton style={{ backgroundColor: "#DBCF04" }}>
                <ArrowRightAltIcon />
              </IconButton>
            </div>
          </div>
          <div className="departmentsContainer__cardsRight">
            <div
              className="departmentsContainer__card"
              style={{ borderLeft: "4px solid #00CDAC" }}
            >
              <span></span>
              <h3>Electronic Communication Engineering</h3>
              <IconButton
                style={{
                  background:
                    "linear-gradient(90deg, #02AAB0 0%, #00CDAC 100%)",
                }}
              >
                <ArrowRightAltIcon />
              </IconButton>
            </div>
            <div
              className="departmentsContainer__card"
              style={{ borderLeft: "4px solid #DBCF04" }}
            >
              <h3>Mechanical Engineering</h3>
              <IconButton style={{ backgroundColor: "#DBCF04" }}>
                <ArrowRightAltIcon />
              </IconButton>
            </div>
            <div
              className="departmentsContainer__card"
              style={{ borderLeft: "4px solid #6B65E8" }}
            >
              <span></span>
              <h3>Metallurgy</h3>
              <IconButton style={{ backgroundColor: "#6B65E8" }}>
                <ArrowRightAltIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Departments;
