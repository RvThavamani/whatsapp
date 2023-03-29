import React from "react";
import "./LeftPanel.css";
import LeftPanelTBottom from "./LeftPanelBottom.js";

export default function LeftPanel() {
  return (
    <div className="LeftPanel">
      <LeftPanelTop />
      <LeftPanelTBottom />
    </div>
  );
}

function LeftPanelTop() {
  return (
    <div className="LeftPanelTop">
      <ProfileContent />
      <SearchContainer /> 
    </div>
  );
}

function ProfileContent() {
  return (
    <div className="ProfileContent">
      <div className="ProfileBox">
        <div className="Profile"></div>
      </div>
      <div className="NavBox">
        <div className="Navs">
          <i class="fa-solid fa-users"></i>
        </div>
        <div className="Navs">
          <i class="fa-solid fa-circle-notch"></i>
        </div>
        <div className="Navs">
          <i class="fa-regular fa-message"></i>
        </div>
        <div className="Navs">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
    </div>
  );
}

function SearchContainer() {
  return (
    <div className="SearchContainer">
      <div className="SearchBox">
        <div className="SearchIcon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input className="SearchInput" placeholder="Search" type="text"></input>
      </div>
      <div className="Filter">
        <div className="FilterIcon">
          <i class="fa-solid fa-sort-down"></i>
        </div>
      </div>
    </div>
  );
}

