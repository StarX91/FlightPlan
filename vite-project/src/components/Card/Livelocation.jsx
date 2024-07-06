import React, { useContext } from 'react';
// import { ThemeContext } from "D:/starx91/ground_control_system/flight_plan/vite-project/src/context/ThemeContext.jsx";
import { ThemeContext } from "/flightPlan/vite-project/src/context/ThemeContext";


function Livelocation() {
  const { theme } = useContext(ThemeContext);

  return (
    <div 
    className={`flex justify-evenly 
      transition duration-300
    mobile gap-4 w-11/12 ml-2 mr-4 px-1 py-1 rounded-lg 
    14inch laptop: lg:py-1 lg:px-2 lg:mt-1 lg:gap-3 lg:rounded-md  
    card ${theme === 'Dark' 
      ? ' bg-zinc-900 '
      : ' bg-zinc-200 border-solid border-[1px] border-zinc-200'}`}>
        <div 
        className='flex-col justify-center text-center'>
            <h1 
            className={`font-semibold 
              mobile text-xs
              14inch laptop: lg:text-xs
            card ${theme === 'Dark' ? 'text-zinc-500': 'text-zinc-500'}`}>
            Latitude
            </h1>
            <h1 
            className={`font-semibold text-xs
            14inch laptop: lg:text-base
            card ${theme === 'Dark' ? 'text-zinc-300': 'text-zinc-500'}`}>
            23.1022
            </h1>
            {/* <h1 className={`card ${theme === 'Dark' ? 'text-white font-semibold': 'text-white font-bold'}`}>23.1022</h1> */}
        </div>
        <div className='flex-col justify-center text-center'>
            <h1 
            className={`font-semibold text-xs
            14inch laptop: lg:text-xs
            card ${theme === 'Dark' ? 'text-zinc-500': 'text-zinc-500'}`}>
            Longitude
            </h1>
            <h1 
            className={`font-semibold text-xs
            14inch laptop: lg:text-base
            card ${theme === 'Dark' ? 'text-zinc-300': 'text-zinc-500'}`}>
            23.1022
            </h1>
        </div>
        <div className='flex-col justify-center text-center'>
            <h1 
            className={`font-semibold text-xs
            14inch laptop: lg:text-xs
            card ${theme === 'Dark' ? 'text-zinc-500': 'text-zinc-500'}`}>
            Altitude
            </h1>
            <h1 
            className={`font-semibold text-xs
            14inch laptop: lg:text-base
            card ${theme === 'Dark' ? 'text-zinc-300': 'text-zinc-500'}`}>
            5m
            </h1>
        </div>
    </div>
  )
}

export default Livelocation;