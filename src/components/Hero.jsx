import { GoArrowRight } from "react-icons/go";
import { GrLocation } from "react-icons/gr";

//img//
import img9 from "../assets/Rectangle 9.png";
import img8 from "../assets/Rectangle 8.png";
import img4 from "../assets/Rectangle 4.png";
import img3 from "../assets/Rectangle 3.png";



function Hero() {

  return (
    <div className="bg-stone-800 p-4">
      <p class="text-cyan-50 flex items-center pl-40 ps-52"> 
        HOME{" "}
        <span class="mx-2">
          <GoArrowRight />
        </span>{" "}
        HOTELS THE{" "}
        <span class="mx-2">
          <GoArrowRight />
        </span>{" "}
        LUXURY HOTEL
      </p>

      <h1 className="text-orange-200 font-sans text-4xl pt-6 pl-40 ps-52">
        THE LUXURY HOTEL
      </h1>
      <div class="flex items-center pl-40 ps-52">
        <GrLocation className="text-cyan-50 mr-2 mt-5" />
        <p class="text-cyan-50 pt-5">
          The Luxury Hotel, Pattaya, Chonburi, Thailand.
        </p>
      </div>

      <div className="flex ps-52 pt-2">
        <img src={img3} alt="" />
        <div className="flex flex-col ml-2">
          <img src={img4} alt="" className="mb-2" />
          <img src={img8} alt="" />
        </div>
        <div className="flex flex-col ml-2">
          <img src={img4} alt="" className="mb-2" />
          <img src={img9} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
