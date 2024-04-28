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
    <div className=" lg:w-full min-h-[80vh] pl-0   lg:py-6 lg:px-24 flex flex-shrink-0 flex-wrap  ">
      <div className=" w-fit h-fit px-4 md:mx-auto md:text-center lg:mx-0 lg:text-left ">
        <h2 className=" text-xl font-bold text-[#CBFC01] md:text-3xl lg:text-xl">Our Services</h2>
        <h3 className="text-[2rem]  tracking-tight sm:text-[3.3rem] leading-none sm:leading-1">Browse our</h3>
        <h3 className="text-[2rem] tracking-tight sm:text-[3.3rem] leading-none">
          services & <span className="text-[#CBFC01]">offerings</span>{" "}
        </h3>

        <div className="flex gap-2 md:mx-auto lg:mx-0 sm:gap-4 items-center  w-fit px-4  my-10 sm:px-8 py-3 sm:py-4 text-black rounded-sm bg-[#CBFC01] font-[700]">
          <button>Get Started</button>
          <FaArrowRightLong />
        </div>
      </div>

      {card.map((item,index)=><div   className={`w-72 mx-auto sm:mx-0 md:w-80 ${index === 0 ? "lg:ml-44 xl:ml-20 sm:ml-20  bg-[#2E2E2E]" :"bg-[#151515]"} ${index==2?"lg:ml-[20rem] md:ml-20 xl:ml-56" :""} ${index===4?"md:ml-[15.5rem] lg:ml-0 ":""} border-[0.1px] border-gray-800 h-[22rem] p-7 bg-[#151515]`}>
        
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
