import React from "react";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from './context/ThemeContext';
import Map from "./components/Map/Map";

const App = () => {
  return (
    <ThemeProvider>
        <Navbar />
      <div className="sm:flex min[320px]:flex-col">
        <Card />
        <Map/>
      </div>
    </ThemeProvider>
  );
};

export default App;
