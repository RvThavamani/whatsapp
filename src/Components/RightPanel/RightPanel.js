import React from "react";
import "./RightPanel.css";
import RightPanelFirst from "./RightPanelFirst";
import RightPanelSecond from "./RightPanelSecond";

export default function RightPanel() {
  return (
    <div className="RightPanel">
      <RightPanelFirst />
      <RightPanelSecond />
    </div>
  );
}
