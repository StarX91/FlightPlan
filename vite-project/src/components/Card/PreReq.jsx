import React, { useContext } from 'react';
import { ThemeContext } from "D:/starx91/ground_control_system/flight_plan/vite-project/src/context/ThemeContext.jsx";
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
    <div className='flex-col mt-4'>
        <div className='flex-col  mt-4 mb-2'>
            <div>
            {/* className={`card ${theme === 'Dark' ? 'text-zinc-300 font-bold': 'text-white  font-bold'}`} */}
                {/* <label className='text-zinc-600 font-semibold'>Select Location</label>   */}
                <label className={`card ${theme === 'Dark' ? 'text-zinc-600 font-semibold': 'text-black font-semibold'}`}>Select Location</label>  
            </div>
            <div>
                <input 
                type="text" 
                value={selectedLocation} 
                onChange={(e) => setSelectedLocation(e.target.value)}
                // className='bg-zinc-800 pr-10 pl-2 py-2 rounded-sm'
                className={`card ${theme === 'Dark' ? 'bg-zinc-800 pr-10 pl-2 py-2 rounded-sm': 'bg-zinc-200 pr-10 pl-2 py-2 rounded-sm'}`}
                placeholder='Select location'/>
            </div>
        </div>
        {/* <hr className='bg-black border-solid border-1 border-black '/> */}
        <hr className={`card ${theme === 'Dark' ? 'bg-black border-solid border-1 border-black ': 'bg-zinc-50 border-solid border-1 border-black '}`}/>


      <div className='flex justify-center mt-2 mb-2'>

        <div className='flex-col w-3/6 '>
            <div className='mb-1' >
                <label className='text-zinc-600 font-semibold'> Select Flight Type</label>
                {/* <label className={`card ${theme === 'Dark' ? 'text-zinc-600 font-semibold': 'text-zinc-00 font-semibold'}`}
                > Select Flight Type</label> */}
            </div>
            <div>
                <select 
                    onChange={(e) => setSelectedFlightType(e.target.value)} 
                    // disabled={!selectedLocation} 
                    // className= "bg-zinc-800 rounded-sm w-9/12 text-zinc-400 px-1 py-1"
                    className={`card ${theme === 'Dark' ? 'bg-zinc-800 rounded-sm w-9/12 text-zinc-400 px-1 py-1': 'bg-zinc-200 rounded-sm w-9/12 text-zinc-800 px-1 py-1'}`}>
                <option value={selectedFlightType}>Select</option>
                {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </div>

        <div className='flex-col  w-2/5'>
            <div className='mb-1'>
                <label className='text-zinc-600 font-semibold '>Flight Speed</label>
            </div>
            <div>
                <input
                    type="number"
                    placeholder="in KpH"
                    value={flightSpeed}
                    // disabled={!selectedLocation}
                    // className="opacity-100 bg-zinc-800  w-8/12 rounded-sm text-zinc-400 py-1"
                    className={`card ${theme === 'Dark' ? 'opacity-100 bg-zinc-800  w-8/12 rounded-sm text-zinc-400 py-1': 'opacity-100 bg-zinc-200  w-8/12 rounded-sm text-black py-1'}`}

                    onChange={(e) => setFlightSpeed(parseFloat(e.target.value))} 
                />
            </div>
        </div>

        <div className='flex-col justify-center w-2/5'>

            <div className='mb-1'>
                <label className='text-zinc-600 font-semibold'>Altitude</label>
            </div>
            <div>
                <input
                    type="number"
                    placeholder="in m"
                    value={altitude}
                    // disabled={!selectedLocation}
                    // className= "opacity-100 bg-zinc-800 w-8/12 rounded-sm text-zinc-400 py-1"
                    className={`card ${theme === 'Dark' ? 'opacity-100 bg-zinc-800 w-8/12 rounded-sm text-zinc-400 py-1': 'opacity-100 bg-zinc-200 w-8/12 rounded-sm text-zinc-800 py-1'}`}

                    onChange={(e) => setAltitude(parseFloat(e.target.value))} 
                />
            </div>
        </div>

      </div>
      {/* <hr className='bg-black border-solid border-1 border-black '/> */}
      <hr className={`card ${theme === 'Dark' ? 'bg-black border-solid border-1 border-black ': 'bg-zinc-50 border-solid border-1 border-black '}`}/>


  </div>
  )
}

export default PreReq;