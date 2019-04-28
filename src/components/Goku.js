import React from 'react';
import goku from'./images/goku.png';
import '../App.css';


function Goku() {
  return (
    <div>
        <img  className="Image" src={goku} alt="Goku" data-micron="pop"/>
    </div>
  );
}

export default Goku;
