import React from "react";
import { GoArrowRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
//IMG//
import Foods from "../assets/Food.png";
import Activites from "../assets/Activites.png";
import Wellness from "../assets/Wellness.png";
import AC from "../assets/AC.png";
import Wifi from "../assets/Wifi.png";
import H24 from "../assets/H24.png";
import Foolls from "../assets/Foolls.png";
import Warter from "../assets/warter.png";
import P from "../assets/P.png";
import Ele from "../assets/Ele.png";

function Theluxury() {
  return (
    <div className="bg-stone-800 p-2 pl-56 pt-8">
      <h1 className="text-orange-200 text-2xl">THE LUXURY HOTEL</h1>
      <p className="text-cyan-50 mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
        <br />
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis
        <br />
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis
        <br />
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla
        <br />
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia
        <br />
        deserunt mollit anim id est laborum.
      </p>

      <div className="flex items-center">
      <a href="#" className="text-orange-200 pt-6 hover:text-orange-300">Read More</a>
        <a href="#" className="flex items-center ml-2">
          <GoArrowRight className="ml-1 text-cyan-50 mt-6" />
        </a>
      </div>

      <div className="border-b-2 border-orange-200 w-full max-w-3xl pt-14"></div>

      <div className="text-orange-200 pt-6 text-xl">
        <h1>
          Staycation offers available <br /> Get special benefits for your stay
        </h1>

        <div class="flex pt-8 text-cyan-50 space-x-24">
          <div>
            <div className="flex pt-2 text-cyan-50 items-center">
              <img src={Foods} alt="mlr-2" />
              <h1 className="ml-2">Food and Drinks</h1>
            </div>
            <p class="pt-8 flex items-center">
              <span class="icon text-orange-200">&#10003;</span>
              <p className="ml-2">Room service [24-hour]</p>
            </p>
            <p class="pt-2 flex items-center">
              <span class="icon text-orange-200">&#10003;</span> 
              <p className="ml-2">Coffee shop</p>
            </p>
            <p class="pt-2 flex items-center">
              <span class="icon text-orange-200">&#10003;</span> 
              <p className="ml-2">Room service</p>
            </p>
          </div>

          <div>
            <div className="flex pt-2 text-cyan-50 items-center">
              <img src={Wellness} alt="mr-2" />
              <h1 className="ml-2">Wellness</h1>
            </div>
            <p class="pt-8 flex items-center">
              <span class="icon text-orange-200">&#10003;</span> 
              <p className="ml-2">Salon</p>
            </p>
            <p class="pt-2 flex items-center">
              <span class="icon text-orange-200">&#10003;</span> 
              <p className="ml-2">Fitness center</p>
            </p>
          </div>

          <div>
            <div className="flex pt-2 text-cyan-50 items-center">
              <img src={Activites} alt="mr-2" />
              <h1 className="ml-2">Activites</h1>
            </div>
            <p class="pt-8 flex items-center">
              <span class="icon text-orange-200">&#10003;</span> 
              <p className="ml-2">Swimming Pool</p>
            </p>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-orange-200 w-full max-w-7xl pt-16"></div>

      <div className="relative top-[-650px] ms-96 max-h-1 ps-20">
        <div className="border-solid border-2 border-orange-300 rounded-lg p-8 bg-stone-800 mr-60 ml-96">
          <h1 className="text-orange-200">Main Facilities</h1>
          <div className="flex flex-col pt-8 space-y-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img src={AC} alt="" className="mr-2" />
                <p className="text-cyan-50">AC</p>
              </div>
              <p className="flex-grow"></p>
              <div className="flex items-center">
                <img src={Wifi} alt="" className="mr-2" />
                <p className="text-cyan-50">Wifi</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={Foolls} alt="" className="mr-2" />
              <p className="text-cyan-50">Restaurant</p>
            </div>
            <div className="flex items-center">
              <img src={Warter} alt="" className="mr-2" />
              <p className="text-cyan-50">Swimming Pool</p>
            </div>
            <div className="flex items-center">
              <img src={H24} alt="" className="mr-2" />
              <p className="text-cyan-50">24-Hour Front Desk</p>
            </div>
            <div className="flex items-center">
              <img src={P} alt="" className="mr-2" />
              <p className="text-cyan-50">Parking</p>
            </div>
            <div className="flex items-center">
              <img src={Ele} alt="" className="mr-2" />
              <p className="text-cyan-50">Elevator</p>
            </div>
          </div>
          <ul>
            <li className="pt-52">
              <a href="#" className="text-orange-200 hover:text-orange-300">
                Read More
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Theluxury;
