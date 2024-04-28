import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Navbar() {
  const [showNavBar, setShowNavBar] = useState(false);
  const toggleNavBar = () => {
    setShowNavBar((prevState) => !prevState);
  };
  useEffect(() => {
    if (showNavBar) {
        document.body.classList.add("overflow-hidden");
    } else {
        document.body.classList.remove("overflow-hidden");
    }
    return () => {
        document.body.classList.remove("overflow-hidden");
    };
}, [showNavBar]);
  return (
    <div className="w-full fixed z-[999] bg-[#151515] top-0 px-4 py-4 sm:py-7 md:py-7 mde:px-20 lg:px-24 flex items-center justify-between">
      <h2 className="text-2xl font-[500]">FinanceX</h2>

      <div className="sm:flex hidden  lg:gap-14 text-gray-300 md:gap-6">
        {["Why FinanceX", "Features", "Update", "Blog"].map((item, index) => (
          <h3 key={index} className="hover:text-[#CBFC01] hover:scale-110 duration-300 hover:underline hover:underline-offset-8">
            
            <a> {item}</a>
          </h3>
        ))}
      </div>
      <div className="sm:flex hidden hover:text-black hover:font-semibold duration-300 hover:bg-[#CBFC01] gap-2 items-center  px-5 py-2 rounded-lg">
        <button>Sign Up</button>
        <FaArrowRightLong />
      </div>



      <div onClick={toggleNavBar} className=" sm:hidden z-[2000] ">
        <div
          className={`flex  flex-col w-full cursor-pointer z-[300] ${
            showNavBar
              ? "gap-0   justify-between h-6 w-6 ms-1"
              : "gap-[5px]  h-full"
          }`}
        >
          <span
            className={`bg-white ms-auto h-[3px] rounded-xl duration-500 ${
              showNavBar ? "w-6 rotate-45 translate-y-[11px]" : "w-5"
            }`}
          ></span>
          <span
            className={`bg-white h-[3px] rounded-xl duration-500 ${
              showNavBar ? "w-0" : "w-7"
            }`}
          ></span>
          <span
            className={`bg-white ms-auto h-[3px] rounded-xl duration-500 ${
              showNavBar ? "w-6 -rotate-45 -translate-y-[10px]" : "w-5"
            }`}
          ></span>
        </div>
      </div>
     
      <div
        className={`flex flex-col min-h-[100vh]   bg-[#151515] items-center justify-center gap-4 sm:gap-6 font-semibold  sm:hidden fixed transition-all duration-300 bg-ebony ${
          showNavBar
            ? "top-0 right-0 w-full h-full z-[100] fixed"
            : "-right-full top-0 w-full h-full"
        }`}
      >
        <ul className="navul px-8 w-full sm:flex flex flex-col gap-8 items-center justify-center font-semibold text-3xl lg:gap-10 md:gap-4  sm:text-sm  sm:font-semibold">
          {["Why FinanceX", "Features", "Update", "Blog"].map((item, index) => (
            <li className="relative  hover:text-[#CBFC01] hover:scale-110 duration-300 hover:underline hover:underline-offset-8" key={index}>
              {item}
            </li>
          ))}

<div className="sm:flex flex hover:text-black duration-300 hover:bg-[#CBFC01] gap-2 items-center  px-5 py-2 rounded-lg">
        <button>Sign Up</button>
        <FaArrowRightLong />
      </div>
        </ul>
      </div>

     
      
    </div>
  );
}

export default Navbar;
