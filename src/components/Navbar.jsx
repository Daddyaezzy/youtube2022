import React from "react";
import ReactSwitch from "react-switch";
import Me from "../img/IMG_5267.JPG";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <span className="logo">DA Chat</span>
      <div className="switch2">
        <ReactSwitch
          onChange={props.toggleTheme}
          checked={props.theme === "dark"}
        />
      </div>
      <div className="user">
        <img src={Me} alt="" />
        <span>John</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
