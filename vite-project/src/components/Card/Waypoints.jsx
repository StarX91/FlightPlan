import React, { useState,useEffect } from 'react'; 
import { useContext } from 'react';
import { ThemeContext } from "D:/starx91/ground_control_system/flight_plan/vite-project/src/context/ThemeContext.jsx";

const missionWaypoints = [
    {
      latitude: 37.7749, // New York City
      longitude: -122.4194,
      altitude: 1000, // meters
      flightSpeed: 250, // knots
    },
    {
      latitude: 29.9792, // Paris
      longitude: 31.1307,
      altitude: 2000,
      flightSpeed: 300,
    },
    {
      latitude: 51.35, // London
      longitude: -0.09,
      altitude: 1500,
      flightSpeed: 275,
    },
    {
      latitude: 35.295, // Tokyo
      longitude: 139.6917,
      altitude: 3000,
      flightSpeed: 320,
    },
    {
      latitude: -33.8688, // Sydney
      longitude: 151.2093,
      altitude: 1200,
      flightSpeed: 280,
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
      flightSpeed: 300,
      radius: 10000
       // meters (optional for fence waypoints)
    },
    {
      latitude: 29.9792, // Paris (center)
      longitude: 31.1307,
      altitude: 1000,
      flightSpeed: 300,

      radius: 5000

       // meters (optional for fence waypoints)
    },
    {
      latitude: 51.505, // London (center)
      longitude: -0.09,
      flightSpeed: 300,
      altitude: 1000,
      radius: 8000 // meters (optional for fence waypoints)
    },
    {
      latitude: 35.6895, // Tokyo
      longitude: 139.6917,
      flightSpeed: 300,
      altitude: 1000,
      radius: 4394
    },
    {
      latitude: -33.8688, // Sydney
      longitude: 151.2093,
      flightSpeed: 300,
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
      //           <p className='font-semibold text-sm'>Latitude:</p>
      //           <p className='w-full px-1 text-zinc-400 font-semibold rounded-sm bg-zinc-700'> {currentWaypoint?.latitude}</p>
      //       </div>
      //       <div className='flex-col w-2/6'>
      //       <p className='font-semibold text-sm'>Longitude:</p>
      //       <p className='w-full px-1 text-zinc-400 font-semibold rounded-sm bg-zinc-700'> {currentWaypoint?.longitude}</p>
      //       </div>

      //   </div>

      //   <div className='flex justify-between'>
      //       <div className='flex-wrap justify-center w-2/6'>
      //           <p className='font-bold text-sm'>Altitude:</p>
      //           <p className='w-full text-zinc-400 bg-zinc-700 rounded-sm px-1 font-semibold'> {currentWaypoint?.altitude} m</p>
      //       </div>
      //       <div className='flex-col w-2/6'>
      //           <p className='font-bold text-sm'>Flight Speed:</p>
      //               <p className='w-full text-center font-semibold content-center text-zinc-400 bg-zinc-700 rounded-sm px-1 flex '> {currentWaypoint?.flightSpeed} KpH</p>
                
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
            <div className={`card ${theme === 'Dark' ? 'waypoint-card text-zinc-400 bg-zinc-900 rounded-md mt-5 py-2 pb-4': 'waypoint-card text-zinc-900 bg-zinc-200 rounded-md mt-5 py-2 pb-4'}`}>
              {/* Type selection buttons */}
              <div className=" flex ">
                <div className='w-9/12 flex  justify-center '>
                {/* <div className={`card ${theme === 'Dark' ? 'w-9/12 flex  justify-center ': 'w-9/12 flex  justify-center '}`}> */}
                  <button
                    className={`${selectedType === 'mission' ? 'active opacity-75 text-lg' : 'opacity-100'} card ${theme === 'Dark' ? 'bg-zinc-600 text-zinc-400 w-11/12 my-1 rounded-sm ': 'bg-zinc-400 text-zinc-900 w-11/12 my-1 rounded-sm'}`}
                    onClick={() => handleTypeChange('mission')}
                  >
                    Mission
                  </button>
                </div>
                <div className='w-9/12 flex justify-center'>
                  <button
                    // className={selectedType === 'fence' ? 'active bg-zinc-600 text-zinc-400 w-11/12 my-1 rounded-sm text-lg' : 'bg-zinc-700 text-zinc-400 w-11/12 my-1 rounded-sm '}
                    className={`${selectedType === 'fence' ? 'active opacity-75 text-lg' : 'opacity-100 '} card ${theme === 'Dark' ? 'bg-zinc-600 text-zinc-400 w-11/12 my-1 rounded-sm ': 'bg-zinc-400 text-zinc-900 w-11/12 my-1 rounded-sm'}`}

                    onClick={() => handleTypeChange('fence')}
                  >
                    Fence
                  </button>
                </div>
              </div>
              {/* <hr className='border-solid border-6 border-black'/> */}
        
              {/* Pagination (conditional rendering based on selectedWaypoints) */}
              {getSelectedWaypoints().length > 0 && (
                <div className="flex justify-evenly mt-3">

                  <div>

                <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                </div>

                <div className="flex justify-evenly">
                  {getSelectedWaypoints().map((_, index) => (
                    <button key={index + 1} onClick={() => handlePageChange(index + 1)} 
                  className={`${currentPage === index + 1 ? 'opacity-50' : ' opacity-100 text-black'} card ${theme === 'Dark' ? 'flex-col active px-3 py-1 rounded-md text-black text-lg bg-zinc-600 mx-1': 'flex-col active px-3 py-1 rounded-md text-black text-lg bg-zinc-400 mx-1'}`}>
                      {index + 1}
                    </button>
                  ))}
                  </div>

                  <div>

                <button disabled={currentPage === getSelectedWaypoints().length} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                </div>
                </div>
              )}
        
              {/* Waypoint details (conditional rendering based on currentWaypoint) */}
              {currentWaypoint && (
                <div className="waypoint-details">
                  <div className='flex justify-center my-1'>
                <h2 className='flex px-10 font-bold'>Waypoint {currentPage}</h2>
                </div>
                {selectedType === 'mission' ? (
                  <>
                    <div className="flex-col mx-4">
                      {/* <h2 className='w-3/12 px-1 font-bold bg-zinc-500 text-black rounded-lg'>Waypoint {currentPage}</h2> */}
                      <div className='flex justify-between mb-4 '>
                          <div className='flex-col w-2/6 '>
                              <p className='font-semibold text-sm'>Latitude:</p>
                              {/* <p className='w-full px-1 text-zinc-400 font-semibold rounded-sm  bg-zinc-700'> {currentWaypoint?.latitude}</p> */}
                              <p className={`card ${theme === 'Dark' ? 'w-full px-1 text-zinc-400 font-semibold rounded-sm  bg-zinc-700': 'w-full px-1 text-zinc-500 font-semibold rounded-sm  bg-zinc-300'}`}> {currentWaypoint?.latitude}</p>
                          </div>
                          <div className='flex-col w-2/6'>
                          <p className='font-semibold text-sm'>Longitude:</p>
                          {/* <p className='w-full px-1 text-zinc-400 font-semibold rounded-sm bg-zinc-700'> {currentWaypoint?.longitude}</p> */}
                          <p className={`card ${theme === 'Dark' ? 'w-full px-1 text-zinc-400 font-semibold rounded-sm  bg-zinc-700': 'w-full px-1 text-zinc-500 font-semibold rounded-sm  bg-zinc-300'}`}> {currentWaypoint?.longitude}</p>

                          </div>

                      </div>

                      <div className='flex justify-between'>
                          <div className='flex-wrap justify-center w-2/6'>
                              <p className='font-bold text-sm'>Altitude:</p>
                              {/* <p className='w-full text-zinc-400 bg-zinc-700 rounded-sm px-1 font-semibold'> {currentWaypoint?.altitude} m</p> */}
                              <p className={`card ${theme === 'Dark' ? 'w-full px-1 text-zinc-400 font-semibold rounded-sm  bg-zinc-700': 'w-full px-1 text-zinc-500 font-semibold rounded-sm  bg-zinc-300'}`}> {currentWaypoint?.altitude} m</p>

                          </div>
                          <div className='flex-col w-2/6'>
                              <p className='font-bold text-sm'>Flight Speed:</p>
                                  {/* <p className='w-full text-center font-semibold content-center text-zinc-400 bg-zinc-700 rounded-sm px-1 flex '> {currentWaypoint?.flightSpeed} KpH</p> */}
                              <p className={`card ${theme === 'Dark' ? 'w-full px-1 text-zinc-400 font-semibold rounded-sm  bg-zinc-700': 'w-full px-1 text-zinc-500 font-semibold rounded-sm  bg-zinc-300'}`}> {currentWaypoint?.flightSpeed} KpH</p>

                              
                          </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                  {/* <div className='flex justify-evenly my-1'>
                    <div className='flex-col w-2/6 '>

                    <p className='font-semibold text-sm'>Latitude: </p>
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
                    <div className="flex-col mx-4">
                      {/* <h2 className='w-3/12 px-1 font-bold bg-zinc-500 text-black rounded-lg'>Waypoint {currentPage}</h2> */}
                      <div className='flex justify-between mb-4 '>
                          <div className='flex-col w-2/6 '>
                              <p className='font-semibold text-sm'>Latitude:</p>
                              {/* <p className='w-full px-1 text-zinc-400 font-semibold rounded-sm  bg-zinc-700'> {currentWaypoint?.latitude}</p> */}
                              <p className={`card ${theme === 'Dark' ? 'w-full px-1 text-zinc-400 font-semibold rounded-sm  bg-zinc-700': 'w-full px-1 text-zinc-500 font-semibold rounded-sm  bg-zinc-300'}`}> {currentWaypoint?.latitude}</p>

                          </div>
                          <div className='flex-col w-2/6'>
                          <p className='font-semibold text-sm'>Longitude:</p>
                          {/* <p className='w-full px-1 text-zinc-400 font-semibold rounded-sm bg-zinc-700'> {currentWaypoint?.longitude}</p> */}
                          <p className={`card ${theme === 'Dark' ? 'w-full px-1 text-zinc-400 font-semibold rounded-sm  bg-zinc-700': 'w-full px-1 text-zinc-500 font-semibold rounded-sm  bg-zinc-300'}`}> {currentWaypoint?.longitude}</p>

                          </div>

                      </div>

                      <div className='flex justify-between'>
                          <div className='flex-wrap justify-center w-2/6'>
                              <p className='font-bold text-sm'>Altitude:</p>
                              {/* <p className='w-full text-zinc-400 bg-zinc-700 rounded-sm px-1 font-semibold'> {currentWaypoint?.altitude} m</p> */}
                              <p className={`card ${theme === 'Dark' ? 'w-full px-1 text-zinc-400 font-semibold rounded-sm  bg-zinc-700': 'w-full px-1 text-zinc-500 font-semibold rounded-sm  bg-zinc-300'}`}> {currentWaypoint?.altitude} m</p>

                          </div>
                          <div className='flex-col w-2/6'>
                              <p className='font-bold text-sm'>Flight Speed:</p>
                                  {/* <p className='w-full text-center font-semibold content-center text-zinc-400 bg-zinc-700 rounded-sm px-1 flex '> {currentWaypoint?.flightSpeed} KpH</p> */}
                              <p className={`card ${theme === 'Dark' ? 'w-full px-1 text-zinc-400 font-semibold rounded-sm  bg-zinc-700': 'w-full px-1 text-zinc-500 font-semibold rounded-sm  bg-zinc-300'}`}> {currentWaypoint?.flightSpeed} KpH</p>

                              
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