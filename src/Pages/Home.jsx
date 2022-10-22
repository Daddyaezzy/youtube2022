import React from "react";
import Chat from "../components/Chat";
import SideBar from "../components/SideBar";
// import "../../src/style.scss";

const Home = (props) => {
  return (
    <div className="home">
      <div className="container">
        <SideBar toggleTheme={props.toggleTheme} theme={props.theme} />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
