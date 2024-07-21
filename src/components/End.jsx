import React from "react";
import logo from "../assets/Group 35.png";

function End() {
  return (
    <div className="bg-orange-200 p-4 ps-96">
      <img src={logo} alt="" className="ps-96" />

      <div className="flex items-center space-x-9 ps-44 pt-20 relative top-[-50px] ml-6">
        <h1>Hotels</h1>
        <h1>Flights</h1>
        <h1>Airport Transfer</h1>
        <h1>Car Rental</h1>
        <h1>Things to Do</h1>
      </div>
    </div>
  );
}

export default End;
