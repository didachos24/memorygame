import React from 'react';
import Vegeta from "./components/Vegeta.js"; 
import Goku from "./components/Goku";
import Goten from "./components/Goten";
import Frieza from "./components/Frieza";
import Trunks from "./components/Trunks";
import GokuKid from "./components/GokuKid";
import Gohan from "./components/Gohan";
import './App.css';

function App() {
  return (
    <div className="container">
    <div className="row"></div>
      <div className="row">
      <Vegeta />
      <Goku />
      <Gohan />
      <Goten />
      <Frieza />
      <Trunks />
      <GokuKid />
      </div>
    </div>
  );
};

export default App;
