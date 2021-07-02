import React from "react";
import "./Vlog.css";
import ReactPlayer from "react-player/lazy";

function Vlog() {
  return (
    <div className="vlog" id="campuslife">
      <div className="vlogContainer">
        <h1> Campus Life</h1>
        <ReactPlayer
          url="https://youtu.be/0Wa_CR0H8g4"
          controls
          width="100%"
          height="90%"
        />
      </div>
    </div>
  );
}

export default Vlog;
