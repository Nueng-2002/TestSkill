import React from "react";

function Overview() {
  return (
    <div className="bg-stone-800 p-4 pl-44 drop-shadow-2xl ps-56">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <ul className="flex space-x-10 mb-4 md:mb-0">
          <li>
            <a href="#" className="text-orange-200 hover:underline underline-offset-8">
              Overview
            </a>
          </li>
          <li>
            <a href="#" className="text-cyan-50 hover:underline underline-offset-8 hover:text-orange-200">
              Rooms
            </a>
          </li>
          <li>
            <a href="#" className="text-cyan-50 hover:underline underline-offset-8 hover:text-orange-200">
              Location
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-10 pr-56">
          <h1 className="text-orange-300 mr-4 text-2xl ">฿1,358</h1>
          <a
            href="#"
            className="text-black rounded-full bg-orange-300 px-3 py-3 items-center hover:bg-black hover:text-orange-200"
          >
            View this deal
          </a>
        </div>
      </div>
    </div>
  );
}

export default Overview;
