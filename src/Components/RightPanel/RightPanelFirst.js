import React from "react";

import "./RightPanelFirst.css";

export default function RightPanelFirst() {
  let Name = "Rv Thavamani";
  return (
    <div className="RightPanelFirst">
      <div className="RPFtop">
        <div className="ProfileName">
          <div className="ChatUserDp">
            <i class="fa-regular fa-circle-user"></i>
          </div>
          <div className="ChatUserName">{Name}</div>
        </div>
        <div className="SearchMenu">
          <div className="Searchicon SiMb">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="MenuBar SiMb">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>
      <div className="RPFmiddle"></div>
      <div className="RPFbottom">
        <div className="SmileIcon">
          <i class="fa-regular fa-face-laugh"></i>
        </div>
        <div className="ClipIcon">
          <i class="fa-solid fa-paperclip"></i>
        </div>
        <input
          className="SearchInputChat"
          placeholder="Type a message"
          type="text"
        ></input>
        <div className="AudioIcon">
          <i class="fa-solid fa-microphone"></i>
        </div>
      </div>
    </div>
  );
}
