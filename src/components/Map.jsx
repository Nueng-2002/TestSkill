import React from "react";
import Map1 from "../assets/Map.png";

//img//
import LO from "../assets/LO.png";
import Img56 from "../assets/img 56.png";
import Shops from "../assets/Shops.png";
import Din from "../assets/Din.png";
import Moo from "../assets/Moo.png";

function Map() {
  return (
    <div className="bg-stone-800 p-4 ps-44 text-3xl pl-56">
      <div className="text-orange-200 underline underline-offset-8">
        <h1>WHERE’S THE LUXURY HOTEL</h1>
      </div>

      <div className="pt-5 flex ">
        <img src={Map1} alt="" />
        <div className="border-2 border-cyan-50 rounded-r-lg ">
          <div className="bg-orange-200 p-5 px-40">
            <p className="text-xs">What’s near by</p>
          </div>

          <div className="bg-white p-4 flex items-center">
            <img src={LO} alt="Emoji" className="w-6" />
            <p className="text-xs ml-2">Current Selection</p>
          </div>
          <div className="bg-white p-4 flex">
            <img src={Img56} alt="Emoji" className="" />
            <div className="ml-2">
              <p className="text-xs">THE LUXURY HOTEL2</p>
              <p className="text-xs">⭐⭐⭐⭐⭐ 9.0</p>
            </div>
          </div>

          <div className="bg-white p-2 flex items-center">
            <img src={Moo} alt="" />
            <p className="text-xs">Explore</p>
          </div>
          <div className="bg-white p-2 flex items-center">
            <img src={Din} alt="" />
            <p className="text-xs">Play</p>
          </div>
          <div className="bg-white p-2 flex items-center">
            <img src={Shops} alt="" />
            <p className="text-xs">Shop</p>
          </div>

          <div className="bg-white p-24"></div>
        </div>
      </div>
    </div>
  );
}

export default Map;
