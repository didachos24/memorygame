import React from 'react';
import Navbar from './Navbar';
import Game from './Game'; 
import './App.css';

function App() {
  return (
    <div>
      <div className="container">
      <Navbar />

      <Game />
      </div>
    </div>
  );
};

export default App;
