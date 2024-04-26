import React, { useState } from "react";

import "./sidebar.css";
import menu from "../../../assets/menu_icon.png";
import plus from "../../../assets/plus_icon.png";
import message from "../../../assets/message_icon.png";
import question from "../../../assets/question_icon.png";
import history from "../../../assets/history_icon.png";
import setting from "../../../assets/setting_icon.png";
const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu"
        onClick={()=>setExtended(prev=>!prev)}
        src={menu} alt="" />
        <div className="new-chat">
          <img src={plus} alt="" />
          {extended && <p>New Chat</p>}
        </div>

        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={message} alt="" />
              <p>What is react ...</p>
            </div>
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item  recent-entry ">
          <img src={question} alt="" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item  recent-entry ">
          <img src={history} alt="" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item  recent-entry ">
          <img src={setting} alt="" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
