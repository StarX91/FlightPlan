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
      <div className="smode">
        <select className="mode">
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <img className="traj" src={trajectory} alt="" />
        <img className="trajj" src={trajectoryy} alt="" />

        <div className="umode">
          <div className="move">
            <img className="undo" src={undo} alt="" />
            <img className="undo2" src={undo2} alt="" />
          </div>
          <button class="save">Save</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
