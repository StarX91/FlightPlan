import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { gapi } from 'gapi-script';
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "D:/starx91/ground_control_system/flight_plan/vite-project/src/context/ThemeContext.jsx";
import Map from "./components/Map/Map";
import starx91 from './components/assets/starx91.png';

const clientId = "261778488059-r3p7jn1uctichj37qi3kq21j1fghclns.apps.googleusercontent.com";

const App = () => {

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
      <Router>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
      </Router>
    </ThemeProvider>
  );
};
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="sm:flex min[320px]:flex-col">
        <Card />
        <Map />
      </div>
    </div>
  );
};
export default App;
