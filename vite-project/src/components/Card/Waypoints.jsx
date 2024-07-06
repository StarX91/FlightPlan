import React, { useState,useEffect } from 'react'; 
import { useContext } from 'react';
// import { ThemeContext } from "D:/starx91/ground_control_system/flight_plan/vite-project/src/context/ThemeContext.jsx";
import { ThemeContext } from "/flightPlan/vite-project/src/context/ThemeContext";
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";

const missionWaypoints = [
    {
      latitude: 40.7749, // New York City
      longitude: -12.4194,
      altitude: 1023, // meters
      flightSpeed: 150, // knots
    },
    {
      latitude: 49.9792, // Paris
      longitude: 10.1307,
      altitude: 2000,
      flightSpeed: 303,
    },
    {
      latitude: 90.35, // London
      longitude: -23.09,
      altitude: 1300,
      flightSpeed: 205,
    },
    {
      latitude: 21.295, // Tokyo
      longitude: 139.6917,
      altitude: 3030,
      flightSpeed: 329,
    },
    {
      latitude: -69.8688, // Sydney
      longitude: 151.2093,
      altitude: 1250,
      flightSpeed: 279,
    }
  ];
  
// const missionWaypoints = [
//     {
//       latitude: 37.7749, // New York City
//       longitude: -122.4194,
//       altitude: 1000, // meters
//       flightSpeed: 250, // knots
//     },
//     {
//       latitude: 29.9792, // Paris
//       longitude: 31.1307,
//       altitude: 2000,
//       flightSpeed: 300,
//     },
//     {
//       latitude: 51.505, // London
//       longitude: -0.09,
//       altitude: 1500,
//       flightSpeed: 275,
//     }
//   ];

  const fenceWaypoints = [
    {
      latitude: 37.8044, // San Francisco Bay Area (center)
      longitude: -122.4194,
      altitude: 1000,
      flightSpeed: 301,
      radius: 10000
       // meters (optional for fence waypoints)
    },
    {
      latitude: 29.9792, // Paris (center)
      longitude: 31.1307,
      altitude: 1000,
      flightSpeed: 302,

      radius: 5000

       // meters (optional for fence waypoints)
    },
    {
      latitude: 51.505, // London (center)
      longitude: -0.09,
      flightSpeed: 303,
      altitude: 1000,
      radius: 8000 // meters (optional for fence waypoints)
    },
    {
      latitude: 35.6895, // Tokyo
      longitude: 139.6917,
      flightSpeed: 304,
      altitude: 1000,
      radius: 4394
    },
    {
      latitude: -33.8688, // Sydney
      longitude: 151.2093,
      flightSpeed: 305,
      altitude: 1000,
      radius: 3432
    }
  ];



function Waypoints() {
//     // const WaypointCard = ({ waypoints }) => {
//         const [currentPage, setCurrentPage] = useState(1);
          
//         const handlePageChange = (pageNumber) => {
//             setCurrentPage(pageNumber);
//         };
        
//         const currentWaypoint = waypoints[currentPage - 1];

//   return (
//     <div className="text-zinc-600 flex-col ">
//       {/* Pagination */}
//       <div className=" flex justify-evenly">

//         <div>
//             <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
//         </div>

//         <div className='flex justify-evenly'>
//             {waypoints.map((_, index) => (
//             <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'flex-col active px-3 py-1 rounded-md text-black text-lg bg-zinc-600 mx-1' : '  flex-col bg-zinc-800 px-3 py-1 text-lg rounded-md text-zinc-500 mx-1'}>
//                 {index + 1}
//             </button>
//             ))}
//         </div>

//         <div>
//             <button disabled={currentPage === waypoints.length} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
//         </div>

//       </div>

      {/* Waypoint details */}
      // <div className="flex-col mx-4">
      //   {/* <h2 className='w-3/12 px-1 font-bold bg-zinc-500 text-black rounded-lg'>Waypoint {currentPage}</h2> */}
      //   <div className='flex justify-between mb-4 '>
      //       <div className='flex-col w-2/6 '>
      //           <p className='font-medium text-sm'>Latitude:</p>
      //           <p className='w-full px-1 text-zinc-400 font-medium rounded-sm bg-zinc-700'> {currentWaypoint?.latitude}</p>
      //       </div>
      //       <div className='flex-col w-2/6'>
      //       <p className='font-medium text-sm'>Longitude:</p>
      //       <p className='w-full px-1 text-zinc-400 font-medium rounded-sm bg-zinc-700'> {currentWaypoint?.longitude}</p>
      //       </div>

      //   </div>

      //   <div className='flex justify-between'>
      //       <div className='flex-wrap justify-center w-2/6'>
      //           <p className='font-bold text-sm'>Altitude:</p>
      //           <p className='w-full text-zinc-400 bg-zinc-700 rounded-sm px-1 font-medium'> {currentWaypoint?.altitude} m</p>
      //       </div>
      //       <div className='flex-col w-2/6'>
      //           <p className='font-bold text-sm'>Flight Speed:</p>
      //               <p className='w-full text-center font-medium content-center text-zinc-400 bg-zinc-700 rounded-sm px-1 flex '> {currentWaypoint?.flightSpeed} KpH</p>
                
      //       </div>
      //   </div>
      // </div>

    // </div>
  // );

    // const WaypointCard = ({ missionWaypoints, fenceWaypoints }) => {
        const [selectedType, setSelectedType] = useState('mission'); // Initial state
        const [currentPage, setCurrentPage] = useState(1);
        const [selectedWaypoint, setSelectedWaypoint] = useState(null);
        const { theme } = useContext(ThemeContext);

    
        const handleTypeChange = (type) => setSelectedType(type);
    
        const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        };
    
        const getSelectedWaypoints = () => {
        return selectedType === 'mission' ? missionWaypoints : fenceWaypoints;
        };
    
        const currentWaypoint = getSelectedWaypoints()[currentPage - 1];
    
        useEffect(() => {
        setSelectedWaypoint(currentWaypoint); // Update on type/page change
        }, [selectedType, currentPage]);

        return (
          // className={`card ${theme === 'Dark' ? 'opacity-100 bg-zinc-800 w-8/12 rounded-sm text-zinc-400 py-1': 'opacity-100 bg-zinc-200 w-8/12 rounded-sm text-zinc-800 py-1'}`}

            // <div className="waypoint-card text-zinc-400 bg-zinc-900 rounded-md mt-5 py-2 pb-4">
            <div 
            className={` rounded-sm
              transition duration-300
            mobile mt-1 pt-1 pb-2
            pc lg:mt-3 lg:py-2 lg:pb-3
            card ${theme === 'Dark' 
              ? 'text-zinc-400 bg-zinc-900'
              : 'text-zinc-900 bg-zinc-200'}`}>
              {/* Type selection buttons */}
              <div className=" flex justify-center">
                <div className='w-9/12 flex  justify-center '>
                {/* <div className={`card ${theme === 'Dark' ? 'w-9/12 flex  justify-center ': 'w-9/12 flex  justify-center '}`}> */}
                  <button
                    className={`rounded-sm text-xs
                      mobile w-11/12 my-1
                      pc lg:w-11/12 lg:my-1 lg:text-sm
                      ${selectedType === 'mission' 
                        ? 'active opacity-100 text-sm' 
                        : 'opacity-75'} 
                      card ${theme === 'Dark' 
                        ? 'bg-zinc-600 text-zinc-400 '
                        : 'bg-zinc-400 text-zinc-900'}`}
                    onClick={() => handleTypeChange('mission')}
                  >
                    Mission
                  </button>
                </div>
                <div className='w-9/12 flex justify-center'>
                  <button
                    // className={selectedType === 'fence' ? 'active bg-zinc-600 text-zinc-400 w-11/12 my-1 rounded-sm text-lg' : 'bg-zinc-700 text-zinc-400 w-11/12 my-1 rounded-sm '}
                    className={`rounded-sm text-xs 
                      mobile w-11/12 my-1
                      pc lg:w-11/12 lg:my-1 lg:text-sm
                      ${selectedType === 'fence' 
                        ? 'active opacity-100 text-sm' 
                        : 'opacity-75 '} 
                      card ${theme === 'Dark' 
                        ? 'bg-zinc-600 text-zinc-400  hover:text-zinc-300 '
                        : 'bg-zinc-400 text-zinc-900'}`}

                    onClick={() => handleTypeChange('fence')}
                  >
                    Fence
                  </button>
                </div>
              </div>
              {/* <hr className='border-solid border-6 border-black'/> */}
        
              {/* Pagination (conditional rendering based on selectedWaypoints) */}
              {getSelectedWaypoints().length > 0 && (
                <div className="flex justify-evenly  lg:mt-1">

                <div className=''>
                <button 
                disabled={currentPage === 1} 
                onClick={() => handlePageChange(currentPage - 1)}
                className='text-zinc-500 hover:text-zinc-600'>
                <CiSquareChevLeft 
                  className='size-6 '/></button>
                </div>

                <div className="flex justify-evenly">
                  {getSelectedWaypoints().map((_, index) => (
                    <button key={index + 1} onClick={() => handlePageChange(index + 1)} 
                  className={`flex-col rounded-md text-xs
                  mobile px-[10px] mx-[2px]
                  pc lg:px-3 lg:py-1 lg:mx-1 lg:text-xs
                  ${currentPage === index + 1 
                    ? 'opacity-50 font-semibold' 
                    : ' opacity-100 '} 
                  card ${theme === 'Dark' 
                    ? ' border-solid border-2 border-zinc-600  text-zinc-500 hover:bg-zinc-800  hover:text-zinc-400'
                    : ' text-zinc-500 border-solid border-2 border-zinc-400 hover:bg-zinc-300  hover:text-zinc-800'}`}>
                      {index + 1}
                    </button>
                  ))}
                  </div>
                  <div>

                <button 
                disabled={currentPage === getSelectedWaypoints().length} 
                onClick={() => handlePageChange(currentPage + 1)}
                className='text-zinc-500'>
                  <CiSquareChevRight className='size-6 '/></button>
                </div>
                </div>
              )}
        
              {/* Waypoint details (conditional rendering based on currentWaypoint) */}
              {currentWaypoint && (
                <div className="waypoint-details">
                  {/* <div className='flex justify-center mt-1'>
                <h2 className='flex px-10 font-semibold text-xs'>Waypoint {currentPage}</h2>
                </div> */}
                {selectedType === 'mission' ? (
                  <>
                    <div className="flex-col mx-4 mt-1 ">
                      {/* <h2 className='w-3/12 px-1 font-bold bg-zinc-500 text-black rounded-lg'>Waypoint {currentPage}</h2> */}
                      <div className='flex justify-evenly text-left
                      mobile mb-1 
                      14inch laptop lg:mb-2 lg:mt-1 '>
                          <div className='flex-col w-2/6 '>
                              <p 
                              className=' 
                              mobile text-xs 
                              14inch lg:text-xs lg:font-semibold lg:mb-1'>Latitude:</p>
                              {/* <p className='w-full px-1 text-zinc-400  rounded-sm  bg-zinc-700'> {currentWaypoint?.latitude}</p> */}
                              <p className={`rounded-sm
                              mobile w-full px-1 text-xs 
                              14inch lg:text-sm lg:font-semibold lg:px-2 lg:py-0
                                card ${theme === 'Dark' 
                                  ? 'w-full px-1 text-zinc-400   bg-zinc-700'
                                  : 'w-full px-1 text-zinc-500   bg-zinc-300'}`}> 
                                {currentWaypoint?.latitude}
                              </p>
                          </div>
                          <div className='flex-col w-2/6 '>
                              <p 
                              className='
                              mobile text-xs 
                              14inch lg:text-xs lg:font-semibold lg:mb-1 '>Longitude:</p>
                          {/* <p className='w-full px-1 text-zinc-400  rounded-sm bg-zinc-700'> {currentWaypoint?.longitude}</p> */}
                          <p className={`rounded-sm
                            mobile w-full px-1 text-xs 
                            lg:text-sm  lg:px-2 lg:py-0 lg:font-semibold
                            card ${theme === 'Dark' 
                              ? 'w-full px-1 text-zinc-400   bg-zinc-700'
                              : 'w-full px-1 text-zinc-500   bg-zinc-300'}`}> 
                            {currentWaypoint?.longitude}
                          </p>

                          </div>

                      </div>

                      <div className='flex justify-evenly'>
                          <div className='flex-col text-left w-2/6 '>
                              <p 
                              className=' 
                              mobile text-xs 
                              14inch lg:text-xs lg:font-semibold lg:mb-1'>Altitude:</p>
                              {/* <p className='w-full text-zinc-400 bg-zinc-700 rounded-sm px-1 '> {currentWaypoint?.altitude} m</p> */}
                              <p className={`rounded-sm
                            mobile w-full px-1 text-xs 
                            lg:text-sm  lg:px-2 lg:py-0 lg:font-semibold
                            card ${theme === 'Dark' 
                              ? 'w-full px-1 text-zinc-400   bg-zinc-700'
                              : 'w-full px-1 text-zinc-500   bg-zinc-300'}`}> 
                                {currentWaypoint?.altitude} m</p>

                          </div>
                          <div className='flex-col w-2/6  text-left'>
                              <p 
                              className=' 
                              mobile text-xs  
                              14inch lg:text-xs lg:font-semibold lg:mb-1'>Flight Speed:</p>
                                  {/* <p className='w-full text-center  content-center text-zinc-400 bg-zinc-700 rounded-sm px-1 flex '> {currentWaypoint?.flightSpeed} KpH</p> */}
                              <p className={`rounded-sm
                                mobile w-full px-1 text-xs 
                                lg:text-sm lg:px-2 lg:py-0 lg:font-semibold
                                card ${theme === 'Dark' 
                                  ? 'w-full px-1 text-zinc-400   bg-zinc-700'
                                  : 'w-full px-1 text-zinc-500   bg-zinc-300'}`}> 
                                {currentWaypoint?.flightSpeed} KpH
                              </p>

                              
                          </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                  {/* <div className='flex justify-evenly my-1'>
                    <div className='flex-col w-2/6 '>

                    <p className=' text-sm'>Latitude: </p>
                    <p className='w-full px-1 text-zinc-400 font-semibold rounded-sm bg-zinc-700'>{currentWaypoint?.latitude}</p>
                    </div>
                    <div className='flex-col w-2/6 '>

                    <p className='font-semibold text-sm'>Longitude: </p>
                    <p className='w-full px-1 text-zinc-400 font-semibold rounded-sm bg-zinc-700'>{currentWaypoint?.longitude}</p>
                    </div>
                  </div>
                    <p className='font-semibold text-sm'>Radius: </p>
                    <p className='w-full px-1 text-zinc-400 font-semibold rounded-sm bg-zinc-700'>{currentWaypoint?.radius} (meters)</p> {/* Display radius for fence waypoints */}
                    {/* {currentWaypoint?.altitude && <p>Altitude: {currentWaypoint?.altitude} (meters)</p>} Optional altitude */}
                    {currentWaypoint?.flightStartTime && <p>Flight Start Time: {currentWaypoint?.flightStartTime}</p>} {/*Optional flight start time */}
                    {/* {currentWaypoint?.flightEndTime && <p>Flight End Time: {currentWaypoint?.flightEndTime}</p>} Optional flight end time */}
                   {/* ---------------------------------------------------- */}
                    {/* <div className="flex-col mx-4">
                      <div className='flex justify-between lg:mb-4 '>
                          <div className='flex-col w-2/6 '>
                              <p className='font-medium text-sm'>Latitude:</p>
                              <p className={`card ${theme === 'Dark' ? 'w-full px-1 text-zinc-400 font-medium rounded-sm  bg-zinc-700': 'w-full px-1 text-zinc-500 font-medium rounded-sm  bg-zinc-300'}`}> {currentWaypoint?.latitude}</p>

                          </div>
                          <div className='flex-col w-2/6'>
                          <p className='font-medium text-sm'>Longitude:</p>
                          <p className={`card ${theme === 'Dark' ? 'w-full px-1 text-zinc-400 font-medium rounded-sm  bg-zinc-700': 'w-full px-1 text-zinc-500 font-medium rounded-sm  bg-zinc-300'}`}> {currentWaypoint?.longitude}</p>

                          </div>

                      </div>

                      <div className='flex justify-between'>
                          <div className='flex-wrap justify-center w-2/6'>
                              <p className='font-bold text-sm'>Altitude:</p>
                              <p className={`card ${theme === 'Dark' ? 'w-full px-1 text-zinc-400 font-medium rounded-sm  bg-zinc-700': 'w-full px-1 text-zinc-500 font-medium rounded-sm  bg-zinc-300'}`}> {currentWaypoint?.altitude} m</p>

                          </div>
                          <div className='flex-col w-2/6'>
                              <p className='font-bold text-sm'>Flight Speed:</p>
                              <p className={`card ${theme === 'Dark' ? 'w-full px-1 text-zinc-400 font-medium rounded-sm  bg-zinc-700': 'w-full px-1 text-zinc-500 font-medium rounded-sm  bg-zinc-300'}`}> {currentWaypoint?.flightSpeed} KpH</p>

                              
                          </div>
                      </div>
                    </div> */}

<div className="flex-col mx-4 mt-1 ">
                      {/* <h2 className='w-3/12 px-1 font-bold bg-zinc-500 text-black rounded-lg'>Waypoint {currentPage}</h2> */}
                      <div className='flex justify-evenly text-left
                      mobile mb-1 lg:mb-4 lg:mt-3 '>
                          <div className='flex-col w-2/6 '>
                              <p 
                              className=' 
                              mobile text-xs 
                              14inch lg:text-sm lg:font-semibold lg:mb-1'>Latitude:</p>
                              {/* <p className='w-full px-1 text-zinc-400  rounded-sm  bg-zinc-700'> {currentWaypoint?.latitude}</p> */}
                              <p className={`rounded-sm
                              mobile w-full px-1 text-xs 
                              14inch lg:text-base lg:font-semibold lg:px-2 lg:py-1
                                card ${theme === 'Dark' 
                                  ? 'w-full px-1 text-zinc-400   bg-zinc-700'
                                  : 'w-full px-1 text-zinc-500   bg-zinc-300'}`}> 
                                {currentWaypoint?.latitude}
                              </p>
                          </div>
                          <div className='flex-col w-2/6 '>
                              <p 
                              className='
                              mobile text-xs 
                              14inch lg:text-sm lg:font-semibold lg:mb-1 '>Longitude:</p>
                          {/* <p className='w-full px-1 text-zinc-400  rounded-sm bg-zinc-700'> {currentWaypoint?.longitude}</p> */}
                          <p className={`rounded-sm
                            mobile w-full px-1 text-xs 
                            lg:text-base  lg:px-2 lg:py-1 lg:font-semibold
                            card ${theme === 'Dark' 
                              ? 'w-full px-1 text-zinc-400   bg-zinc-700'
                              : 'w-full px-1 text-zinc-500   bg-zinc-300'}`}> 
                            {currentWaypoint?.longitude}
                          </p>

                          </div>

                      </div>

                      <div className='flex justify-evenly'>
                          <div className='flex-col text-left w-2/6 '>
                              <p 
                              className=' 
                              mobile text-xs 
                              14inch lg:text-sm lg:font-semibold lg:mb-1'>Altitude:</p>
                              {/* <p className='w-full text-zinc-400 bg-zinc-700 rounded-sm px-1 '> {currentWaypoint?.altitude} m</p> */}
                              <p className={`rounded-sm
                            mobile w-full px-1 text-xs 
                            lg:text-base  lg:px-2 lg:py-1 lg:font-semibold
                            card ${theme === 'Dark' 
                              ? 'w-full px-1 text-zinc-400   bg-zinc-700'
                              : 'w-full px-1 text-zinc-500   bg-zinc-300'}`}> 
                                {currentWaypoint?.altitude} m</p>

                          </div>
                          <div className='flex-col w-2/6  text-left'>
                              <p 
                              className=' 
                              mobile text-xs  
                              14inch lg:text-sm lg:font-semibold lg:mb-1'>Flight Speed:</p>
                                  {/* <p className='w-full text-center  content-center text-zinc-400 bg-zinc-700 rounded-sm px-1 flex '> {currentWaypoint?.flightSpeed} KpH</p> */}
                              <p className={`rounded-sm
                                mobile w-full px-1 text-xs 
                                lg:text-base lg:px-2 lg:py-1 lg:font-semibold
                                card ${theme === 'Dark' 
                                  ? 'w-full px-1 text-zinc-400   bg-zinc-700'
                                  : 'w-full px-1 text-zinc-500   bg-zinc-300'}`}> 
                                {currentWaypoint?.flightSpeed} KpH
                              </p>

                              
                          </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              )}
            </div>
          );
}


export default Waypoints;