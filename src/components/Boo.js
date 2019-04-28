import React from 'react';
import boo from'./images/Majin_buu.png';
import '../App.css';


function Boo() {
  return (
    <div>
        <img  className="Image" src={boo} alt="Boo" data-micron="pop"/>
    </div>
  );
}

export default Boo;
