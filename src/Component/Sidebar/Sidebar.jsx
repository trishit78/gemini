import React, { useContext, useState } from "react";

import "./sidebar.css";
import menu from "../../../assets/menu_icon.png";
import plus from "../../../assets/plus_icon.png";
import message from "../../../assets/message_icon.png";
import question from "../../../assets/question_icon.png";
import history from "../../../assets/history_icon.png";
import setting from "../../../assets/setting_icon.png";
import { Context } from "../../context/Context";
const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent,prevPrompt,setRecentPrompt,newChat} = useContext(Context);
  

  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu"
        onClick={()=>setExtended(prev=>!prev)}
        src={menu} alt="" />
        <div
        onClick={()=>newChat()}
        className="new-chat">
          <img src={plus} alt="" />
          {extended && <p>New Chat</p>}
        </div>

        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt && prevPrompt.map((item, index) => (
                
  <div className="recent-entry" key={index}>
    <img src={message} alt="" />
    
    <p>{item.slice(0,18)}...</p>
  </div>
))}
            
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
