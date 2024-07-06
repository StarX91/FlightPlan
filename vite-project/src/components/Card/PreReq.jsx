import React, { useContext } from 'react';
// import { ThemeContext } from "D:/starx91/ground_control_system/flight_plan/vite-project/src/context/ThemeContext.jsx";
import { ThemeContext } from "/flightPlan/vite-project/src/context/ThemeContext";

import { useState } from 'react';

const options = [
    { label: "Waypoints", value: 1 },
    { label: "KML",value: 2}
  ];


function PreReq() {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedFlightType, setSelectedFlightType] = useState(null);
    const [flightSpeed, setFlightSpeed] = useState(null); 
    const [altitude, setAltitude] = useState(null); 
    const { theme } = useContext(ThemeContext);

  return (
    <div 
    className='flex-col 
    transition duration-300
    mobile 
    14 inch laptop: lg:mt-1'>
        <div className='flex-col'>
            <div>
                <label 
                className={` font-semibold 
                mobile text-xs
                14inch laptop: lg:text-xs
                card ${theme === 'Dark' ? 'text-zinc-600': 'text-black'}`}>Select Location</label>  
            </div>
            <div>
                <input 
                type="text" 
                value={selectedLocation} 
                onChange={(e) => setSelectedLocation(e.target.value)}
                // className='bg-zinc-800 pr-10 pl-2 py-2 rounded-sm'
                className={` rounded-sm text-xs
                    mobile pr-10 pl-1 py-1
                    14inch laptop: lg:pr-10 lg:pl-2 lg:py-1 lg:text-sm
                    card ${theme === 'Dark' ? 'bg-zinc-800 ': 'bg-zinc-200 '}`}
                placeholder='Select location'/>
            </div>
        </div>
        {/* <hr className='bg-black border-solid border-1 border-black '/> */}
        {/* <hr className={` mt-2 card ${theme === 'Dark' ? 'bg-zinc-50 border-solid border-1 border-zinc-500 ': 'bg-zinc-50 border-solid border-1 border-black '}`}/> */}


      <div 
      className='flex justify-evenly
      mobile  
      14inch laptop lg:mt-1 lg:mb-1'>

        <div 
        className='flex-col
        mobile w-3/6
        14inch laptop lg:w-2/6  '>
            <div className='lg:mb-0' >
                <label 
                className='text-zinc-600 
                mobile font-semibold text-xs
                14inch laptop lg:text-xs'> Flight Type</label>
            </div>
            <div>
                <select 
                    onChange={(e) => setSelectedFlightType(e.target.value)} 
                    // disabled={!selectedLocation} 
                    // className= "bg-zinc-800 rounded-sm w-9/12 text-zinc-400 px-1 py-1"
                    className={` rounded-sm 
                    mobile w-9/12 px-1 py-1 text-xs
                    pc lg:w-9/12 lg:px-1 lg:py-1 lg:text-sm
                    card ${theme === 'Dark' 
                        ? 'bg-zinc-800  text-zinc-400 '
                        : 'bg-zinc-200  text-zinc-800 '}`}>
                <option value={selectedFlightType}>Select</option>
                {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>

        <div className='flex-col  
        mobile w-2/5
        14inch laptop lg:w-2/6'>
            <div className='lg:mb-0'>
                <label className='text-zinc-600 
                mobile font-semibold text-xs
                14inch laptop lg:text-xs'>Flight Speed</label>
            </div>
            <div>
                <input
                    type="number"
                    placeholder="in KpH"
                    value={flightSpeed}
                    // disabled={!selectedLocation}
                    // className="opacity-100 bg-zinc-800  w-8/12 rounded-sm text-zinc-400 py-1"
                    className={`rounded-sm 
                    mobile w-8/12 px-2 py-1 text-xs
                    pc lg:w-9/12 lg:px-1 lg:py-1 lg:text-sm
                        card ${theme === 'Dark' 
                            ? ' bg-zinc-800 text-zinc-400'
                            : ' bg-zinc-200 text-black'}`}

                    onChange={(e) => setFlightSpeed(parseFloat(e.target.value))} 
                />
            </div>
        </div>

        <div className='flex-col justify-center 
        mobile w-1/5
        14inch laptop lg:w-2/6'>

            <div className='lg:mb-0'>
                <label 
                className='text-zinc-600 
                mobile font-semibold text-xs
                14inch: lg:text-xs'>Altitude</label>
            </div>
            <div>
                <input
                    type="number"
                    placeholder="in m"
                    value={altitude}
                    // disabled={!selectedLocation}
                    // className= "opacity-100 bg-zinc-800 w-8/12 rounded-sm text-zinc-400 py-1"
                    className={` rounded-sm text-xs
                        mobile w-11/12 py-1 px-2
                        pc lg:w-8/12 lg:py-1 lg:px-2 lg:text-sm
                        card ${theme === 'Dark' 
                            ? ' bg-zinc-800  text-zinc-400 py-1'
                            : ' bg-zinc-200  text-zinc-800 py-1'}`}

                    onChange={(e) => setAltitude(parseFloat(e.target.value))} 
                />
            </div>
        </div>

      </div>
      {/* <hr className='bg-black border-solid border-1 border-black '/> */}
      {/* <hr className={`card ${theme === 'Dark' ? 'bg-black border-solid border-1 border-zinc-500 ': 'bg-zinc-50 border-solid border-1 border-zinc-700 '}`}/> */}


  </div>
  )
}

export default PreReq;