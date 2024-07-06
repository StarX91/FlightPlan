import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { gapi } from "gapi-script";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
// import { ThemeProvider } from "D:/starx91/ground_control_system/flight_plan/vite-project/src/context/ThemeContext.jsx";
import { ThemeProvider } from "/flightPlan/vite-project/src/context/ThemeContext";
import { FaExclamationTriangle } from 'react-icons/fa';
import { ProfileProvider } from './context/ProfileContext';

import Map from "./components/Map/Map";
import starx91 from './components/assets/starx91.png';
import EditProfile from './components/Navbar/EditProfile';

const clientId = "261778488059-r3p7jn1uctichj37qi3kq21j1fghclns.apps.googleusercontent.com";

const App = () => {
  // const [profileImageUrl, setProfileImageUrl] = useState('')

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "profile email"
      }).then(() => {
        console.log('GAPI client initialized');
      }).catch(error => {
        console.error('Error initializing GAPI client:', error);
      });
    }
    gapi.load('client:auth2', start);
  }, []);


  return (
    <ThemeProvider>
    {/* //   <ProfileContext.Provider value={{profileImageUrl,setProfileImageUrl}}> */}
      <Router>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Routes>
      </Router>
      {/* // </ProfileContext.Provider> */}
       </ThemeProvider> 
  );
};
const Dashboard = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
  //     (window.screen.width < 768);
  //   setIsMobile(isMobile);
  // }, []);

  // if (isMobile) {
  //   return (
  //     <div className="unavailable-overlay fixed inset-0 bg-black/70 flex flex-coljustify-center align-middle z-999 text-white text-center">
  //       <div className='text-[#FFCC00]'>
  //         <FaExclamationTriangle className='size="3em"  '/> 
  //       </div>
  //       <h1>This software is not currently available on mobile devices.</h1>
  //       <p>Please access it from a desktop computer for the best experience.</p>
  //     </div>
  //   );
  // }
  return (
      //  <ThemeProvider> 
      <div 
      className=" h-screen">
        <ProfileProvider>
        <Navbar />
         </ProfileProvider>
        <Map/>
        <Card />
      </div>
    //  </ThemeProvider>
    
  );
};
export default App;
