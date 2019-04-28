import React from 'react';
import roshi from'./images/Roshi.png';
import '../App.css';


function Roshi() {
  return (
    <div>
        <img  className="Image" src={roshi} alt="Roshi" data-micron="pop"/>
    </div>
  );
}

export default Roshi;
