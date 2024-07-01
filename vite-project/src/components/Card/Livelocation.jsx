import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from "/flightPlan/vite-project/src/context/ThemeContext";

function Livelocation() {
  const { theme } = useContext(ThemeContext);

  return (
    // className={`card ${theme === 'Dark' ? 'sm:w-2/6 p-3 bg-zinc-900 flex-col justify-center min[320px]:w-screen' : 'sm:w-2/6 p-3 bg-zinc-50 flex-col justify-center min[320px]:w-screen'}`}
    // <div className='flex justify-between gap-4 bg-zinc-700 w-10/12 ml-8 px-6 py-1 rounded-lg'>
  <div className={`card ${theme === 'Dark' ? 'flex justify-between gap-4 bg-zinc-700 w-10/12 ml-5 px-6 py-1 rounded-lg' : 'flex justify-between gap-4 bg-zinc-300 w-10/12 ml-8 px-6 py-1 rounded-lg'}`}>
      {/* <div> */}
        <div className='flex-col justify-center'>
            {/* <h1 className='text-zinc-300'>Latitude</h1> */}
            <h1 className={`card ${theme === 'Dark' ? 'text-zinc-300' : 'text-zinc-600'}`}
            >Latitude</h1>
            {/* <h1 className='text-white'>23.1022</h1> */}
            <h1 className={`card ${theme === 'Dark' ? 'text-white' : 'text-black'}`}>23.1022</h1>
        </div>
        <div className='flex-col justify-center'>
            <h1 className={`card ${theme === 'Dark' ? 'text-zinc-300' : 'text-zinc-600'}`}>Longitude</h1>
            <h1 className={`card ${theme === 'Dark' ? 'text-white' : 'text-black'}`}>23.1321</h1>
        </div>
        <div className='flex-col justify-center'>
            <h1 className={`card ${theme === 'Dark' ? 'text-zinc-300' : 'text-zinc-600'}`}>Altitude</h1>
            <h1 className={`card ${theme === 'Dark' ? 'text-white' : 'text-black'}`}>5m</h1>
        </div>
    </div>
  )
}

export default Livelocation;