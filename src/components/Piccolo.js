import React from 'react';
import piccolo from'./images/Piccolo_Jr.png';
import '../App.css';


function Piccolo() {
  return (
    <div>
        <img  className="Image" src={piccolo} alt="Piccolo" data-micron="pop"/>
    </div>
  );
}

export default Piccolo;
