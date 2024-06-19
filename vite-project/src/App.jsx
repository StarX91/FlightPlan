import React from "react";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

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
