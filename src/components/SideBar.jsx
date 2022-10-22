import React from "react";
import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";

const SideBar = (props) => {
  return (
    <div className="sideBar">
      <Navbar toggleTheme={props.toggleTheme} theme={props.theme === "dark"} />
      <Search />
      <Chats />
    </div>
  );
};

export default SideBar;
