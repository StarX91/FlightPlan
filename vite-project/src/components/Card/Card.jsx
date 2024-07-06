import React, { useContext } from 'react';
import { ThemeContext } from "/flightPlan/vite-project/src/context/ThemeContext";
import Livelocation from "./Livelocation";
import PreReq from "./PreReq";
import Waypoints from "./Waypoints";
// import "./Card.css";

const options = [
  { label: "", value: 1 },
  { label: "1", value: 2 },
  { label: "2", value: 3 },
  { label: "3", value: 3 },
  { label: "4", value: 3 },
];

const Card = () => {
  const { theme } = useContext(ThemeContext);
  return (
    // <div className="card">
    //   <div className="li">
    //     <div className="lin">
    //       <div className="dimen">
    //         <div className="height">
    //           <div>Latitude</div>
    //           <div className="btnsize" id="lat">
    //             70.45
    //           </div>
    //         </div>
    //         <div className="height">
    //           <div>Longtitude</div>
    //           <div className="btnsize" id="lon">
    //             23.45
    //           </div>
    //         </div>
    //         <div className="height" id="alt">
    //           <div>Altitude</div>
    //           <div className="btnsize" id="al">
    //             7m
    //           </div>
    //         </div>
    //       </div>

    //       <div className="cardl">
    //         <div className="cardline">
    //           <h4>Select Location</h4>
    //           <input
    //             className="loc"
    //             type="text"
    //             id="textInput"
    //             name="textInput"
    //             placeholder="Search Location"
    //           />
    //           <div className="cardltwo">
    //             <div className="cardlinetwo">
    //               <div className="details">
    //                 <div className="flighttype">
    //                   <p>Select Flight Type</p>
    //                   <select className="waypoint">
    //                     {options.map((option) => (
    //                       <option value={option.value}>{option.label}</option>
    //                     ))}
    //                   </select>
    //                 </div>
    //                 <div className="altitude">
    //                   <p>Altitude</p>
    //                   <input
    //                     type="text"
    //                     className="number"
    //                     alt=""
    //                     name="number"
    //                     placeholder="1000 m"
    //                   />
    //                 </div>
    //                 <div className="flightspeed">
    //                   <p>Flight Speed</p>
    //                   <input
    //                     type="text"
    //                     className="num"
    //                     alt=""
    //                     name="num"
    //                     placeholder="1000 Kph"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="cardlthree">
    //                 <div className="cardlinethree">
    //                   <div className="rect">
    //                     <div className="missfen">
    //                       <button className="mission">Mission</button>

    //                       <button className="fence">Fence</button>
    //                     </div>
    //                     <div className="cardlfour">
    //                       <div className="cardlinefour">
    //                         <div className="wayp">
    //                           <div className="wp">Waypoints</div>
    //                           <div className="pagination">
    //                             <button className="prev">Prev</button>
    //                             <ul>
    //                               <li className="link" value="1">
    //                                 1
    //                               </li>
    //                               <li classN ame="link" value="2">
    //                                 2
    //                               </li>
    //                               <li className="link" value="3">
    //                                 3
    //                               </li>
    //                               <li className="link" value="4" id="four">
    //                                 4
    //                               </li>
    //                             </ul>
    //                             <button className="nex">Next</button>
    //                           </div>
    //                         </div>
    //                         <div className="cardlfive">
    //                           <div className="cardlinefive">
    //                             <div className="latlong">
    //                               <div className="latit">
    //                                 <p>Latitude</p>
    //                                 <input
    //                                   type="text"
    //                                   className="valone"
    //                                   alt=""
    //                                   placeholder="20.123213"
    //                                 ></input>
    //                               </div>
    //                               <div className="longti">
    //                                 <p>Longtitude</p>
    //                                 <input
    //                                   type="text"
    //                                   className="valtwo"
    //                                   alt=""
    //                                   placeholder="75.434"
    //                                 />
    //                               </div>
    //                             </div>
    //                             <div className="altfly">
    //                               <div className="altit">
    //                                 <p>Altitude (in meters)</p>
    //                                 <input
    //                                   type="text"
    //                                   className="valthree"
    //                                   alt=""
    //                                   placeholder="20.123213"
    //                                 ></input>
    //                               </div>
    //                               <div className="fligh">
    //                                 <p>Flight Speed</p>
    //                                 <input
    //                                   type="text"
    //                                   className="valfour"
    //                                   alt=""
    //                                   placeholder="5 Km/ hr"
    //                                 />
    //                               </div>
    //                             </div>
    //                             <div className="button">
    //                               <button className="next">Next</button>
    //                             </div>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div 
    className={`absolute top-1/2 left-1/3 -translate-x-52 lg:-translate-x-80  -translate-y-1/2 w-1/4 h-auto mt-0 xl:ml-0 flex-col justify-center
      transition duration-300
      mobile  p-3 shadow-lg 
      14inch laptop:  lg:p-4 rounded-3xl lg:w-1/3
      15inch xl:w-1/4 xl:-translate-x-96
    card ${theme === 'Dark' ? ' bg-black shadow-black' : ' bg-zinc-50 shadow-zinc-600'}`}>
    {/* // <div className="w-2/6 p-3 bg-black flex-col justify-center w-5/12" > */}
      <Livelocation/>
      <PreReq/>
      <Waypoints/>
      <div className="flex  mt-1 lg:mt-2 justify-center">
        {/* <button button className={`px-10 py-1 text-lg font-bold rounded-md bg-white text-black` : `px-10 py-1 text-lg font-bold rounded-md bg-black text-zinc-50 `} > Save</button> */}
        <button 
        className={`rounded-md
          transition duration-300
        mobile px-5 text-md font-medium
        14inch laptop:  lg:px-10 lg:py-0 lg:text-lg lg:font-bold 
        card ${theme === 'Dark' 
          ? ' bg-zinc-200 text-black hover:bg-white' 
          : ' bg-zinc-700 text-zinc-50 hover:bg-zinc-800'}`}> Save</button>
      </div>
    </div>
  );
};

export default Card;
