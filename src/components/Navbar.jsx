import React, { useContext } from "react";
import ReactSwitch from "react-switch";
import Me from "../img/IMG_5267.JPG";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = (props) => {
  const { currentUser } = useContext(AuthContext);

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
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
