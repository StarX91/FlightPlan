import React from "react";
import "./Card.css";
import location from "./photos/placeholder.png";

const Card = () => {
  return (
    <div className="card">
      <div className="cardl">
        <div className="cardline">
          <h4>Select Location</h4>
          <input
            className="loc"
            type="text"
            id="textInput"
            name="textInput"
            placeholder="Search Location"
          />
          <div className="cardltwo">
            <div className="cardlinetwo">
              <div className="currentloc">
                <img className="pin" src={location} alt="" />
                <p> Use Current Location</p>
              </div>

              <div className="button">
                <button className="next">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
