import React from "react";
import img4 from "../assets/Rectangle 4.png";
import { GoPeople } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

function Rooms() {
  return (
    <div className="bg-stone-800 p-5 pl-16">
      <div className="ps-40 ">
        <h1 className="text-orange-200 text-4xl underline underline-offset-8">ROOM</h1>
        <h1 className="text-cyan-50 pt-8 text-xl">Superior Modern</h1>
      </div>

      <div class="flex pt-5 text-cyan-50 space-x-4">
        <div className="ps-40">
          <img src={img4} alt="" className="mr-2"/>
          <div className="pt-5">
            <a href="" className="text-orange-200 flex items-center">
              See room details{" "}
              <span className="ml-1">
                <GoChevronRight />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h1>Food and Drinks</h1>
          <p class="pt-8 flex items-center pe-10">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed
            do <br /> eiusmod tempor incididunt ut <br /> labore et dolore magna
            aliqua. Ut <br /> enim ad minim veniam, quis
          </p>
        </div>

        <div>
          <h1 className="ml-10">Guest(s)</h1>
          <p class="pt-8 flex items-center pe-60">
            <GoPeople className="ml-10" />
            <p className="ml-2">2</p>
          </p>
        </div>

        <div>
          <h1 className="-ml-16">Price/room/night</h1>
          <div className="flex pt-8">
            <p class="-ml-16">฿1,358</p>
            <a
              href=""
              className="ml-64 text-black rounded-full bg-orange-300 px-3 py-2 text-lg relative top-[-10px]">
              Choose
            </a>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-orange-200 max-w-7xl pt-16 ms-40"></div>
      <div className="ps-40">

        <h1 className="text-cyan-50 pt-8 text-xl">Business Suite</h1>
      </div>

      <div class="flex pt-5 text-cyan-50 space-x-4">
        <div className="ps-40">
          <img src={img4} alt="" className="mr-2"/>
          <div className="pt-5">
            <a href="" className="text-orange-200 flex items-center">
              See room details{" "}
              <span className="ml-1">
                <GoChevronRight />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h1>Food and Drinks</h1>
          <p class="pt-8 flex items-center pe-10">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed
            do <br /> eiusmod tempor incididunt ut <br /> labore et dolore magna
            aliqua. Ut <br /> enim ad minim veniam, quis
          </p>
        </div>

        <div>
          <h1 className="ml-10">Guest(s)</h1>
          <p class="pt-8 flex items-center pe-60">
            <GoPeople className="ml-10" />
            <p className="ml-2">2</p>
          </p>
        </div>

        <div>
          <h1 className="-ml-16">Price/room/night</h1>
          <div className="flex pt-8">
            <p class="-ml-16">฿1,358</p>
            <a
              href=""
              className="ml-64 text-black rounded-full bg-orange-300 px-3 py-2 text-lg relative top-[-10px]">
              Choose
            </a>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-orange-200 max-w-7xl pt-16 ms-40"></div>
    </div>
  );
}

export default Rooms;
