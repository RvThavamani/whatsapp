import React from "react";
import "./LeftPanelBottom.css";

export default function LeftPanelTBottom() {
  return (
    <div className="LeftPanelTBottom">
      <ChatList
        UserName="Rv Thavamani"
        Time="07.30 PM"
        Message="How are you?...Keep smile"
      />
      <ChatList UserName="Hamza" Time="06.10 AM" Message="Good Morning" />
      <ChatList UserName="MSD" Time="11.15 PM" Message="How are you?" />
      <ChatList
        UserName="Virat"
        Time="12.05 AM"
        Message="How old are you?...Keep smile"
      />
      <ChatList UserName="Jadeja" Time="Today" Message="Good Night" />
      <ChatList UserName="Sky" Time="Wednesday" Message="Bye" />
      <ChatList UserName="Rayudu" Time="Yesterday" Message="Sorry" />
      <ChatList
        UserName="Rv Thavamani"
        Time="07.30 PM"
        Message="How are you?...Keep smile"
      />
      <ChatList UserName="Hamza" Time="06.10 AM" Message="Good Morning" />
      <ChatList UserName="MSD" Time="11.15 PM" Message="How are you?" />
      <ChatList
        UserName="Virat"
        Time="12.05 AM"
        Message="How old are you?...Keep smile"
      />
      <ChatList UserName="Jadeja" Time="Today" Message="Good Night" />
      <ChatList UserName="Sky" Time="Wednesday" Message="Bye" />
      <ChatList UserName="Rayudu" Time="Yesterday" Message="Sorry" />
    </div>
  );
}

function ChatList(props) {
  return (
    <div className="ChatList">
      <div className="ProfileDP">
        <i class="fa-regular fa-circle-user"></i>
      </div>
      <div className="MessageContent">
        <div className="UserNameBox">
          <div className="UserName">{props.UserName}</div>
          <div className="TimeDate">{props.Time}</div>
        </div>
        <div className="MessageBox">
          <div className="Message">{props.Message}</div>
        </div>
      </div>
    </div>
  );
}
