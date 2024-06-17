import React from "react";
import "./Navbar.css";
import trajectory from "./photos/trajectory.png";
import trajectoryy from "./photos/trajectoryy.png";
import undo from "./photos/undo.png";
import undo2 from "./photos/redo.png";

const options = [
  { label: "Satellite Mode", value: 1 },
  { label: "Terrain", value: 2 },
  { label: "Traffic", value: 3 },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="dimen">
        <div className="height">
          <button className="btnsize">70.45</button>
          <div>Latitude</div>
        </div>
        <div className="height">
          <button className="btnsize">23.45</button>
          <div>Longtitude</div>
        </div>
        <div className="height">
          <button className="btnsize">7m</button>
          <div>Altitude</div>
        </div>

        <div className="smode">
          <select className="mode">
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <img className="traj" src={trajectory} alt="" />
          <img className="trajj" src={trajectoryy} alt="" />
          <div className="umode">
            <img className="undo" src={undo} alt="" />
            <img className="undo2" src={undo2} alt="" />
            <button class="save">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
