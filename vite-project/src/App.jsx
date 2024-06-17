import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="containertwo">
        <Card />
      </div>
    </div>
  );
};

export default App;
