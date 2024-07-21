import { FaLocationDot } from "react-icons/fa6";
import { RiCalendarCheckLine } from "react-icons/ri";
import { ImUngroup } from "react-icons/im";

//img//
import HU from "../assets/hu.png";
import UN from "../assets/Union.png";

function Menu() {
  return (
    <div>
      <div className="bg-stone-800 p-3 flex items-center mx-auto drop-shadow-2xl space-x-20">
        <h1 className="text-cyan-50 flex items-center border rounded-md border-orange-200 py-4 px-32 ml-52 ">
          <FaLocationDot className="-ml-28" />
          <p className="">City, Hotel, Place to go</p>
        </h1>

        <div className="flex items-center text-cyan-50 space-x-2 border rounded-md py-4 px-16 border-orange-200 ">
          <RiCalendarCheckLine className="text-cyan-50 text-xl -ml-14" />
          <p className="text-lg ml-2">Check-in</p> 
          <ImUngroup className="text-cyan-50 text-xl" />
          <h1 className="text-lg">Check-out</h1>
        </div>

        <div className="text-cyan-50 border rounded-md px-36 flex items-center border-orange-200">
          <img src={HU} alt="Emoji" className="w-7 mr-3 py-4 -ml-32" />
          <div className="flex flex-col">
            <h1 className="text-base">1 Adult</h1>
            <h1 className="text-base">1 room</h1>
          </div>
        </div>
        <div className="py-2 px-2">
          
          <button className="bg-orange-200 text-b text-black font-bold py-4 px-12 rounded flex items-center ">
          <img src={UN} alt="Emoji" className="w-6 mr-2 " />{"Search"}
          </button>
        </div>
      </div>

      
    </div>
  );
}

export default Menu;
