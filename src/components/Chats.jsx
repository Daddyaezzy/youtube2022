import React from "react";
import Me from "../img/IMG_5267.JPG";

const Chats = () => {
  return (
    <div>
      <div className="userChat">
        <img src={Me} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Me} alt="" />
        <div className="userChatInfo">
          <span>Ashley</span>
          <p>Yo</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Me} alt="" />
        <div className="userChatInfo">
          <span>Bayo</span>
          <p>i will need it soon</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
