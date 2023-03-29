import React from "react";
import "./RightPanelSecond.css";

export default function RightPanelSecond() {
  return (
    <div className="RightPanelSecond">
      <RightPanelSecondTop />
      <RightPanelSecondBody />
    </div>
  );
}

function RightPanelSecondTop() {
  return (
    <div className="RightPanelSecondTop">
      <div className="cancel">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div className="ContactInfo">{"Contact Info"}</div>
    </div>
  );
}

function RightPanelSecondBody() {
  return (
    <div className="RightPanelSecondBody">
      <ProfileNamePhoto />
      <About />
      <Media />
      <MessageSet />
      <Commongroup />
      <Footer />
    </div>
  );
}

function ProfileNamePhoto() {
  return (
    <div className="ProfileNamePhoto">
      <div className="ProfilePhoto">
        <i class="fa-regular fa-circle-user"></i>
        <div className="UserName">Rv Thavamani</div>
        <div className="UserNumber">+91 98765 43210</div>
      </div>
    </div>
  );
}
function About() {
  return (
    <div className="About">
      <div className="AboutHeading">{"About"}</div>
      <div className="AboutLines">{"Don't Judge the Book by it's Cover"}</div>
    </div>
  );
}

function Media() {
  return (
    <div className="Media">
      <div className="MediaLines">Media,Links and Docs</div>
      <div className="files">
        <p>0</p> <i class="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
}

function MessageSet() {
  return (
    <div className="MessageSet">
      <RPMset
        icon={<i class="fa-solid fa-star"></i>}
        Text="Starred Messages"
        inText=""
        finalIcon={<i class="fa-solid fa-angle-right"></i>}
      />
      <RPMset
        icon={<i class="fa-solid fa-bell"></i>}
        Text="Mute Notifications"
        inText=""
        finalIcon={<i class="fa-solid fa-toggle-off"></i>}
        // onClick={<i class="fa-solid fa-toggle-on"></i>}
      />
      <RPMset
        icon={<i class="fa-solid fa-clock-rotate-left"></i>}
        Text="Disappearing Messages"
        inText="Off"
        finalIcon={<i class="fa-solid fa-angle-right"></i>}
      />
      <RPMset
        icon={<i class="fa-solid fa-lock"></i>}
        Text="Encryption"
        inText="Messages are end-to-end encrypted. Click to verify."
        finalIcon=""
      />
    </div>
  );
}

function RPMset(props) {
  return (
    <div className="RPMset">
      <div className="FtIcon">{props.icon}</div>
      <div className="SetMessage">
        <div className="SMtext"> {props.Text}</div>
        <div className="SMintext">{props.inText}</div>
      </div>
      <div className="FlIcon">{props.finalIcon}</div>
    </div>
  );
}

function Commongroup() {
  return (
    <div className="Commongroup">
      <div className="CommongroupHeading">{"2 Groups in common"}</div>
      <Groups groupName="Group 1" groupMembers="Member1,Member2,Member3" />
      <Groups groupName="Group 2" groupMembers="Member1,Member2,Member3" />
    </div>
  );
}

function Groups(props) {
  return (
    <div className="Groups">
      <div className="GroupProfile">
        <i class="fa-regular fa-circle-user"></i>
      </div>
      <div className="GroupDet">
        <div className="GroupName">{props.groupName}</div>
        <div className="GpMembers">{props.groupMembers}</div>
      </div>
      <div className="DropList">
        <i class="fa-solid fa-angle-down"></i>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="Footer">
      <FooterMessage
        icon={<i class="fa-solid fa-ban"></i>}
        Message={"Block Rv Thavamani"}
      />
      <FooterMessage
        icon={<i class="fa-solid fa-thumbs-down"></i>}
        Message={"Report Rv Thavamani"}
      />
      <FooterMessage
        icon={<i class="fa-solid fa-trash"></i>}
        Message={"Delete Caht"}
      />
    </div>
  );
}

function FooterMessage(props) {
  return (
    <div className="FooterMessage">
      <div className="FootIcon">{props.icon}</div>
      <div className="FootMessage">{props.Message}</div>
    </div>
  );
}
