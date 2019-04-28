import React from "react";
import './App.css';

function Navbar() {
    return(
        <div className="navimg">
            <div className="row">
                <div className="col-12">
                    <h1>DBZ Memory Game</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-7">
                    <h5>Click each one to earn points, but repeating character loss your score!</h5>
                </div>
                <div className="col-1">
                    <h5>Score:</h5>
                </div>
                <div className="col-1"></div>
                <div className="col-2">
                    <h5>Top Score:</h5>
                </div>
            </div>
            <br />
        </div>
    );
};

export default Navbar;