import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Ourservices() {
  const card = [{
    h2:"Checking accounts", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor", btn:false
  },
  {
    h2:"Checking accounts", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor", btn:false
  },
  {
    h2:"Checking accounts", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor", btn:false
  },
  {
    h2:"Checking accounts", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor", btn:false
  },
  {
    h2:"Checking accounts", para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor", btn:false
  },]
  
  return (
    <div className=" lg:w-full  px-2 sm:px-4 lg:px-4 pl-0   lg:py-10  flex  flex-shrink-0 flex-wrap  ">
      <div className=" w-full sm:w-fit h-fit px-0 md:mx-auto md:text-center lg:mx-0 lg:text-left ">
        <h2 className=" text-4xl font-bold text-center lg:text-left text-[#CBFC01] md:text-3xl lg:text-xl">Our Services</h2>
        <h3 className="text-[1.5rem] lg:text-left pt-5 sm:pt-0 text-center tracking-tight sm:text-[3.3rem] leading-none sm:leading-1">Browse our</h3>
        <h3 className="text-[1.5rem] text-center sm:text-left tracking-tight sm:text-[3.3rem] leading-none">
          services & <span className="text-[#CBFC01]">offerings</span>{" "}
        </h3>

        <div className="flex gap-2 mx-auto lg:mx-0 sm:gap-4 items-center  w-fit px-4 my-8 sm:my-10 sm:px-8 py-3 sm:py-4 text-black rounded-sm bg-[#CBFC01] font-[700]">
          <button>Get Started</button>
          <FaArrowRightLong />
        </div>
      </div>

      {card.map((item,index)=><div   className={`w-full max-w-[350px] mx-auto sm:mx-0  ${index === 0 ? "lg:ml-12 xl:ml-52 sm:ml-0  bg-[#2E2E2E]" :"bg-[#151515]"} ${index===1? "lg:ml-32 xl:ml-0":"" } ${index==2?"xl:ml-[18rem] lg:ml-0 md:ml-0 " :""} ${index===4?"md:mx-auto lg:ml-0 ":""} border-[0.1px] border-gray-800 h-[22rem] p-7 bg-[#151515] ${index===3?"lg:ml-32 xl:ml-0":""}`}>
        
        <h6  className={`  w-12 h-1 bg-white my-4`}></h6> 
        <h2 className="text-lg my-5">{item.h2}</h2>
        <p className="leading-tight text-sm w-[90%]">{item.para}</p>

        <div className="w-full text-right">
          <button className={` ${index===0 ? "bg-[#CBFC01]":"bg-white"} p-3 my-12 hover:bg-[#CBFC01] duration-500`}>
          <FaArrowRightLong color="black" size={22} className="-rotate-45"  />

          </button>
        </div>
      </div>
)}
      

    </div>
  );
}

export default Ourservices;
