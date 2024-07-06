import React, { useState, useContext } from "react";
import { Link } from "react-router-dom"; // For navigation to map view components (if applicable)
import { ThemeContext } from "/flightPlan/vite-project/src/context/ThemeContext";
import { FaCaretDown } from "react-icons/fa";


const SatelliteMode = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isMode, setIsMode] = useState('Satellite');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMapModeChange = (mapMode) => {
    // Implement logic to update the map state or trigger actions based on the selected mode (e.g., API calls, state updates)
    setIsOpen(false); // Close dropdown after selection
    setIsMode(mapMode);
  };

  return (
    <div className="relative">
      <button
        // className="text-sm font-medium hover:bg-gray-100 dark:hover:bg-white focus:outline-none px-4 py-2 rounded-md flex items-center"
        className={`font-semibold focus:outline-none rounded-md flex items-center
            mobile  px-2 py-2 my-1 ml-2 text-xs
            card ${
              theme === "Dark"
                ? " bg-zinc-800 text-zinc-500 hover:bg-zinc-700 hover:text-zinc-400"
                : " bg-zinc-300 text-zinc-500 hover:bg-zinc-400 hover:text-zinc-600"
            }`}
        onClick={toggleDropdown}
      >
        {" "}
        {isMode} Mode <FaCaretDown className="ml-2 size-4"/>
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 0 0-3-3v1a1 1 0 0 1-1-1zM16 7a3 3 0 1 1-3-3v1a1 1 0 0 1 1 1zM14 4a1 1 0 0 1 1 1v1h4a1 1 0 0 1 0 2h-4v1a1 1 0 0 1-1 1zM11 16a3 3 0 1 0 0-6v1a1 1 0 0 1-1-1zM2 8a3 3 0 0 1 3-3v1a1 1 0 0 0-1-1zM4 14a1 1 0 0 1 1 1v1h4a1 1 0 0 0 0-2h-4v-1a1 1 0 0 1-1-1zM9 3a3 3 0 1 0 0 6v1a1 1 0 0 1 1-1zM18 15a3 3 0 0 1-3-3v1a1 1 0 0 0 1 1zM16 11a1 1 0 0 1 1 1v1h4a1 1 0 0 0 0-2h-4v-1a1 1 0 0 1-1-1z"
          clipRule="evenodd"
        />
      </button>

      {isOpen && (
        <div 
        className={`absolute left-0 z-50 w-40 mt-2 origin-top-left rounded-md shadow-lg 
        card ${theme === "Dark"
                ? " bg-zinc-800 text-zinc-500  hover:text-zinc-400"
                : " bg-zinc-300 text-zinc-500  hover:text-zinc-600"
            }`}>
          <ul className="py-1">
            <li>
              <button
                // className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
                className={`block text-xs font-semibold duration-1000
                    px-4 pr-24 py-2
                    card ${theme === "Dark"
                            ? " bg-zinc-800 text-zinc-500 hover:bg-gray-700  hover:text-zinc-400"
                            : " bg-zinc-300 text-zinc-500 hover:bg-gray-100 hover:text-zinc-600"
                        }`}
                onClick={() => handleMapModeChange("Satellite")}
              >
                Satellite
              </button>
            </li>
            <li>
              <button
                // className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
                className={`block text-xs font-semibold
                    px-4 pr-24 py-2
                    card ${theme === "Dark"
                            ? " bg-zinc-800 text-zinc-500 hover:bg-gray-700 hover:text-zinc-400"
                            : " bg-zinc-300 text-zinc-500 hover:bg-gray-100 hover:text-zinc-600"
                        }`}
                onClick={() => handleMapModeChange("City")}
              >
                City
              </button>
            </li>
            <li>
              <button
                // className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
                className={`block text-xs font-semibold
                    px-4 pr-24 py-2
                    card ${theme === "Dark"
                            ? " bg-zinc-800 text-zinc-500 hover:bg-gray-700 hover:text-zinc-400"
                            : " bg-zinc-300 text-zinc-500 hover:bg-gray-100 hover:text-zinc-600"
                        }`}
                onClick={() => handleMapModeChange("Terrain")}
              >
                Terrain
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SatelliteMode;
