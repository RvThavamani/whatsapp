import React from "react";
import LeftPanel from "../LeftPanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";
import "./Parent.css";

export default function Parent() {
  return (
    <div className="Parent">
      <div className="BackgroundContainer">
        <div className="BackgroundContainerTop"></div>
        <div className="BackgroundContainerBottom"></div>
        <div className="MainContainer">
          <LeftPanel />
          <RightPanel />
        </div>
      </div>
    </div>
  );
}
