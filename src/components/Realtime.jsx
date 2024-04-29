import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { TfiWorld } from "react-icons/tfi";
import { GiNetworkBars } from "react-icons/gi";

function Realtime() {

 const data = [{ icon:"LuMapPin",  h2:"Local business" , h3:"finance", p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut  "},
  {icon:"TfiWorld",h2:"Build for global" , h3:"payments", p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut  "},
  {icon:"GiNetworkBars",h2:"Make internet of" , h3:"Money", p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut  "}]


  return (
    <div className="w-full   px-2 md:px-0 lg:px-0  lg:py-0  py-1">
      <div className="w-full p-2 md:px-4 lg:px-4 h-1/2  flex flex-col lg:flex-row flex-shrink-0 ">
        <div className="lg:w-1/2 w-full">
          <h2 className="text-[#CBFC01] my-0  text-center lg:text-left font-bold text-4xl md:text-3xl lg:text-xl">
            Our Services
          </h2>
          <h3 className="sm:text-[3.3rem] tracking-tight leading-none text-[1.5rem] mt-6 lg:mt-0 text-center lg:text-left font-semibold">Real time</h3>
          <h3 className="sm:text-[3.3rem] text-[1.5rem] text-center leading-none tracking-tight lg:text-left text-[#CBFC01] font-semibold">
            Transaction Report
          </h3>
          <p className="lg:w-2/3 w-full md:px-28 lg:px-0 text-center lg:text-left text-gray-300 my-10  leading-tight ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna{" "}
          </p>

          <div className="flex gap-2 mx-auto lg:mx-0 lg:gap-4 items-center  w-fit px-4   sm:px-8 py-2  sm:py-4 text-black rounded-sm bg-[#CBFC01] font-[700]">
            <button>Get Started</button>
            <FaArrowRightLong />
          </div>
        </div>

        <div className=" sm:w-1/2  w-full flex sm:justify-end justify-center h-full md:md-2  mt-10 mb-56 sm:mb-0 sm:mt-0 relative">
          <div className="lg:w-[22rem] md:w-[18rem] md:hidden md:h-[18rem] hidden lg:block lg:h-[22rem] w-[10rem] h-[10rem]  rounded-full bg-[#CBFC01]">
            {" "}
          </div>

          <div className="md:w-full  sm:w-full sm:h-full md:h-full lg:w-[80%] lg:h-[80%]    absolute left-0 md:top-10 md:-rotate-45 lg:-rotate-0 md:left-0 lg:top-12 lg:left-28 xl:left-52">
            <img
              className="w-full h-full object-cover lg:object-contain "
              src="/public/Images/Frame4.png"
              alt=""
            />
          </div>
        </div>
      </div>






      <div className="w-full h-full px-2 md:px-4 lg:px-4  flex flex-shrink-0 flex-wrap justify-center my-10 ">
        {data.map((item,index)=><div key={index} className={`max-w-[400px] w-full  duration-300   hover:bg-[#2E2E2E] bg-[#151515] py-8 lg:py-12 px-4 border-[0.5px] border-gray-800`}>
            <div className={`sm:w-12 w-14 h-14 sm:h-12 bg-white  mb-2 sm:text-xl text-2xl font-bold text-black flex items-center justify-center`}>
                {item.icon === "LuMapPin" && < LuMapPin/>} 
                {item.icon ==="TfiWorld"&& <TfiWorld />}
                {item.icon ==="GiNetworkBars"&& <GiNetworkBars />}

            </div>
            <h2 className="lg:text-3xl text-3xl mt-5 sm:mt-6 font-semibold tracking-tight leading-none">{item.h2}</h2>
            <h2 className="lg:text-3xl text-3xl font-[500] leading-none">{item.h3}</h2>
            <p className=" my-5 lg:w-[70%] w-full sm:text-sm text-md leading-none text-gray-400">{item.p} </p>

            <div className="flex  items-center gap-2 mt-10 hover:bg-[#CBFC01] w-fit px-3 py-2 rounded-md hover:text-black font-semibold duration-300">
                <button>learn more</button>
          <FaArrowRightLong />

            </div>


        </div>
      )}

      </div>
    </div>
  );
}

export default Realtime;
