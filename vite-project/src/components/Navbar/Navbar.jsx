import React, { useState, useContext, useEffect, useRef } from "react";
import trajectory from "./photos/trajectory.png";
import trajectoryy from "./photos/trajectoryy.png";
import undo from "./photos/undo.png";
import { ThemeContext } from "D:/starx91/ground_control_system/flight_plan/vite-project/src/context/ThemeContext.jsx";
import { useGoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const options = [
  { label: "Satellite Mode", value: 1 },
  { label: "Terrain", value: 2 },
  { label: "Traffic", value: 3 },
];

const clientId = "261778488059-r3p7jn1uctichj37qi3kq21j1fghclns.apps.googleusercontent.com";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const navigate = useNavigate();

  const onLogoutSuccess = () => {
    console.log("Logout successful!");
    navigate('/');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    cookiePolicy: 'single_host_origin',
  });

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`card ${theme === 'Dark' ? 'flex justify-between bg-black w-full h-1/6 min-[320px]:w-full' : 'flex justify-between bg-zinc-200 w-full h-1/6 min-[320px]:w-full'}`}>
      <div className={`card ${theme === 'Dark' ? 'px-4 py-2 my-2 ml-2 bg-white rounded-md' : 'px-4 py-2 my-2 ml-2 bg-black rounded-md'}`}>
        <button onClick={toggleTheme} className={`card ${theme === 'Dark' ? 'text-black font-semibold' : 'text-white font-semibold'}`}> 
          {theme} 
        </button>
      </div>
      <div className="flex py-3 gap-4">
        <select className={`card ${theme === 'Dark' ? 'py-1 bg-zinc-700 border-solid border-2 border-zinc-900 text-white rounded-md px-1' : 'py-1 bg-zinc-500 border-solid border-2 border-zinc-200 text-white rounded-md px-1'}`}>
          {options.map((option) => (
            <option key={option.value} value={option.value} className={`card ${theme === 'Dark' ? 'text-white': 'text-white'}`}>
              {option.label}
            </option>
          ))}
        </select>
        <button>
          <img className={`card ${theme === 'Dark' ? 'min-[320px]:w-7 min-[320px]:h-7 invert': 'min-[320px]:w-7 min-[320px]:h-7'}`} src={trajectory} alt="" />
        </button>
        <button>
          <img className={`card ${theme === 'Dark' ? 'min-[320px]:w-7 min-[320px]:h-7 invert': 'min-[320px]:w-7 min-[320px]:h-7'}`} src={trajectoryy} alt="" />
        </button>
      </div>
      <div className="flex gap-1">
        <div className="flex py-4 gap-1">
          <button>
            <img className={`card ${theme === 'Dark' ? 'min-[320px]:w-5 min-[320px]:h-18 invert': 'min-[320px]:w-7 min-[320px]:h-7'}`} src={undo} alt="" />
          </button>
          <button>
            <img className={`card ${theme === 'Dark' ? 'min-[320px]:w-5 min-[320px]:h-18 scale-x-[-1] invert': 'min-[320px]:w-7 scale-x-[-1] min-[320px]:h-7'}`} src={undo} alt="" />
          </button>
        </div>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <button onClick={toggleDropdown} style={{
            padding: '10px 20px',
            borderRadius: '20px',
            backgroundColor: theme === 'Dark' ? 'white' : 'black',
            color: theme === 'Dark' ? 'black' : 'white',
            fontWeight: 'bold',
            margin: '8px 8px 8px 0'
          }}>
            First Name
          </button>
          {isDropdownOpen && (
            <div ref={dropdownRef} style={{
              position: 'absolute',
              top: 'calc(100% + 5px)',
              left: '0',
              backgroundColor: theme === 'Dark' ? 'black' : 'white',
              color: theme === 'Dark' ? 'white' : 'black',
              borderRadius: '10px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              zIndex: 1,
              padding: '10px'
            }}>
              <button style={{
                padding: '10px',
                display: 'block',
                width: '100%',
                border: 'none',
                backgroundColor: 'transparent',
                color: 'inherit',
                cursor: 'pointer',
                textAlign: 'left'
              }} onClick={signOut}>
                Log-out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
