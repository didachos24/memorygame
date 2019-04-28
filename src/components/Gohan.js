import React from 'react';
import gohan from'./images/Son_Gohan.png';
import '../App.css';


function Gohan() {
  return (
    <div>
        <img  className="Image" src={gohan} alt="Gohan" data-micron="pop"/>
    </div>
  );
}

export default Gohan;
