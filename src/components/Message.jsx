import React from "react";
import Me from "../img/IMG_5267.JPG";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={Me} alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={Me} alt="" />
      </div>
    </div>
  );
};

export default Message;
