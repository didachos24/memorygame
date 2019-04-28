import React from 'react';
import vegeta from'./images/Vegeta_DBZ.png';
import '../App.css';


function Vegeta() {
  return (
    <div>
        <img  className="Image" src={vegeta} alt="Vegeta" data-micron="pop"/>
    </div>
  );
}

export default Vegeta;
