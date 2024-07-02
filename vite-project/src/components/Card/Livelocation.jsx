import React, { useContext } from 'react';
import { ThemeContext } from "D:/starx91/ground_control_system/flight_plan/vite-project/src/context/ThemeContext.jsx";

function Livelocation() {
  const { theme } = useContext(ThemeContext);

  return (
    // <div className='flex justify-between gap-4 bg-zinc-700 w-10/12 ml-8 px-6 py-1 rounded-lg mt-2'>
    <div className={`card ${theme === 'Dark' ? 'flex justify-between gap-4 bg-zinc-700 w-10/12 ml-8 px-6 py-1 rounded-lg mt-2': 'flex justify-between gap-4 bg-zinc-400 w-10/12 ml-8 px-6 py-1 rounded-lg mt-2'}`}>
        <div className='flex-col justify-center'>
            {/* <h1 className='text-zinc-300'>Latitude</h1> */}
            <h1 className={`card ${theme === 'Dark' ? 'text-zinc-300 font-semibold': 'text-white  font-bold'}`}>Latitude</h1>
            {/* <h1 className='text-white'>23.1022</h1> */}
            <h1 className={`card ${theme === 'Dark' ? 'text-white font-semibold': 'text-white font-bold'}`}>23.1022</h1>
        </div>
        <div className='flex-col justify-center'>
            {/* <h1 className='text-zinc-300'>Longitude</h1> */}
            <h1 className={`card ${theme === 'Dark' ? 'text-zinc-300 font-semibold': 'text-white  font-bold'}`}>Longitude</h1>
            {/* <h1 className='text-white'>23.1321</h1> */}
            <h1 className={`card ${theme === 'Dark' ? 'text-zinc-300 font-semibold': 'text-white  font-bold'}`}>23.1321</h1>
        </div>
        <div className='flex-col justify-center'>
            {/* <h1 className='text-zinc-300'>Altitude</h1> */}
            <h1 className={`card ${theme === 'Dark' ? 'text-zinc-300 font-semibold': 'text-white  font-bold'}`}>Altitude</h1>
            {/* <h1 className='text-white'>5m</h1> */}
            <h1 className={`card ${theme === 'Dark' ? 'text-zinc-300 font-semibold': 'text-white  font-bold'}`}>5m</h1>
        </div>
    </div>
  )
}

export default Livelocation;