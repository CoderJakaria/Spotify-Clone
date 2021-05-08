import React from "react";
import Body from "../body/Body";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import "./Player.css";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
