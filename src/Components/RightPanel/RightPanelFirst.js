import React from "react";

import "./RightPanelFirst.css";
let Name = "Rv Thavamani";
export default function RightPanelFirst() {
  return (
    <div className="RightPanelFirst">
      <RightPanelFirstTop />
      <RightPanelFirstMiddle />
      <RightPanelFirstBottom />
    </div>
  );
}

function RightPanelFirstTop() {
  return (
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
  );
}

function RightPanelFirstMiddle() {
  return (
    <div className="RPFmiddle">
      <div className="Today">TODAY</div>
      <div className="Message1">
        {"Hi, How are you?"}
        <div className="DateTime">
          <div className="Time">10.55 am</div>
        </div>
      </div>
      <div className="Message2">
        {"Hello ,I'm fine. "}
        <div className="DateTime">
          <div className="Time">11.03 am</div>
          <div className="Tick">
            <i class="fa-solid fa-check-double"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightPanelFirstBottom() {
  return (
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
  );
}
