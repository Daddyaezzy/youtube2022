import React from "react";
import ReactSwitch from "react-switch";
import Me from "../img/IMG_5267.JPG";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <span className="logo">DA Chat</span>
      <div className="switch2">
        <ReactSwitch onChange={props.toggleTheme} />
      </div>
      <div className="user">
        <img src={Me} alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
