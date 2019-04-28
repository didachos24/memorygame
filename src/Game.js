import React from 'react';
import Vegeta from "./components/Vegeta.js"; 
import Goku from "./components/Goku";
import Goten from "./components/Goten";
import Frieza from "./components/Frieza";
import Trunks from "./components/Trunks";
import GokuKid from "./components/GokuKid";
import Gohan from "./components/Gohan";
import Piccolo from "./components/Piccolo";
import Boo from "./components/Boo";
import Shen from "./components/Shen";
import Android from "./components/Android";
import Roshi from "./components/Roshi";
import './App.css';



function Game() {
  return (
    <div className="house">
      <div className="row">
        <div className="col-3"><Vegeta /></div>
        <div className="col-3"><Goku /></div>
        <div className="col-3"><Goten /></div>
        <div className="col-3"><Frieza /></div>
      </div>
      <div className="row">
        <div className="col-3"><Trunks /></div>
        <div className="col-3"><GokuKid /></div>
        <div className="col-3"><Gohan /></div>
        <div className="col-3"><Piccolo /></div>
      </div>
      <div className="row">
      <div className="col-3"><Boo /></div>
        <div className="col-3"><Shen /></div>
        <div className="col-3"><Android /></div>
        <div className="col-3"><Roshi /></div>
      </div>
    </div>
  );
};

export default Game;
