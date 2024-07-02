import React, { useState,useContext } from "react";
// import "./Navbar.css";
import trajectory from "./photos/trajectory.png";
import trajectoryy from "./photos/trajectoryy.png";
import undo from "./photos/undo.png";
import undo2 from "./photos/redo.png";
import { FaUndo,  FaRedo, FaVectorSquare } from "react-icons/fa";
import { TbRouteSquare2 } from "react-icons/tb";

import { ThemeContext } from "/flightPlan/vite-project/src/context/ThemeContext";
// import {ThemeContext} from "/f"

const options = [
  { label: "Satellite Mode", value: 1 },
  { label: "Terrain", value: 2 },
  { label: "Traffic", value: 3 },
];

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    // <div className=" flex justify-between bg-black w-full h-1/6 min-[320px]:w-full">
    <div className={`card ${theme === 'Dark' ? 'flex justify-between bg-black w-full h-1/6 min-[320px]:w-full ' : 'flex justify-between bg-zinc-200 w-full h-1/6 min-[320px]:w-full'}`}>

      {/* <div className="px-4 py-2 my-2 ml-2 bg-white rounded-md"> */}
      <div className={`card ${theme === 'Dark' ? 'px-4 py-2 my-2 ml-2  bg-white rounded-md' : 'px-4 py-2 my-2 ml-2 bg-black rounded-md'}`}>
        {/* <button onClick={toggleTheme} className="text-black font-semibold "> {theme} </button> */}
        <button onClick={toggleTheme} className={`card ${theme === 'Dark' ? 'text-black font-semibold' : 'text-white font-semibold'}`}> {theme} </button>
      </div>
      <div className="flex py-3 gap-4">
          {/* <select className="py-1 bg-zinc-700 border-solid border-2 border-zinc-900 text-white rounded-md px-1"> */}
          <select className={`card ${theme === 'Dark' ? 'py-1 bg-zinc-700 border-solid border-2 border-zinc-900 text-white rounded-md px-1' : 'py-1 bg-zinc-500 border-solid border-2 border-zinc-200 text-white  rounded-md px-1'}`}>
            {options.map((option) => (
              // <option value={option.value} className="text-white">{option.label}</option>
              <option value={option.value} className={`card ${theme === 'Dark' ? 'text-white': 'text-white'}`}>{option.label}</option>
            ))}
          </select>
          <button className="text-gray-300 hover:text-white focus:outline-none">
              <FaVectorSquare className="size-full min[320px]:size-11/12" />
            </button>
            <button className="text-gray-300 hover:text-white focus:outline-none">
              <TbRouteSquare2 className="size-full min[320px]:size-11/12" />
            </button>
      </div>

        <div className="flex gap-1">
          <div className="flex py-4 gap-1">
              <button className="text-gray-300 hover:text-white focus:outline-none">
              <FaUndo className="size-full min[320px]:size-11/12" />
            </button>
            <button className="text-gray-300 hover:text-white focus:outline-none">
              <FaRedo className="size-full min[320px]:size-11/12" />
            </button>
          </div>
          {/* <button class="px-4 py-2 bg-white rounded-md my-2  mr-2 text-black font-semibold">Save</button> */}
          <button className={`card ${theme === 'Dark' ? 'px-4 py-2 min[320px]:px-2 bg-white rounded-md my-2  mr-2 text-black font-semibold': 'px-4 py-2 bg-black rounded-md my-2  mr-2 text-zinc-50 font-semibold'}`}>Save</button>
        </div>
    </div>
  );
};
export default Navbar;
