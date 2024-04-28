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
    <div className="w-full min-h-[100vh] md:min-h-[100vh] lg:h-[120vh] px-2 md:px-6 lg:px-24    py-10">
      <div className="w-full p-2 h-1/2 flex flex-col sm:flex-row flex-shrink-0 ">
        <div className="sm:w-1/2 w-full">
          <h2 className="text-[#CBFC01] my-2 text-center sm:text-left font-bold text-3xl sm:text-xl">
            Our Services
          </h2>
          <h3 className="sm:text-4xl text-2xl mt-6 sm:mt-0 text-center sm:text-left font-semibold">Real time</h3>
          <h3 className="sm:text-4xl text-xl text-center sm:text-left text-[#CBFC01] font-semibold">
            Transaction Report
          </h3>
          <p className="sm:w-[60%] w-full text-center sm:text-left text-gray-300 my-6 leading-tight text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna{" "}
          </p>

          <div className="flex gap-2 mx-auto sm:mx-0 sm:gap-4 items-center  w-fit px-2   sm:px-8 py-2  sm:py-4 text-black rounded-sm bg-[#CBFC01] font-[700]">
            <button>Get Started</button>
            <FaArrowRightLong />
          </div>
        </div>

        <div className=" sm:w-1/2 w-full flex sm:justify-end justify-center h-full md:md-2  mt-10 mb-56 sm:mb-0 sm:mt-0 relative">
          <div className="lg:w-[22rem] md:w-[18rem] md:hidden md:h-[18rem] hidden lg:block lg:h-[22rem] w-[10rem] h-[10rem]  rounded-full bg-[#CBFC01]">
            {" "}
          </div>

          <div className="md:w-full sm:w-full sm:h-full md:h-full lg:w-1/2 lg:h-1/2    absolute left-0 md:top-10 md:-rotate-45 lg:rotate-0 md:left-0 lg:top-20 lg:left-48">
            <img
              className="w-full h-full object-cover "
              src="/public/Images/Frame4.png"
              alt=""
            />
          </div>
        </div>
      </div>






      <div className="w-full h-full px-2 sm:px-20  flex flex-shrink-0 flex-wrap justify-center my-16 ">
        {data.map((item,index)=><div key={index} className={`w-[22rem] h-[22rem] duration-300   hover:bg-[#2E2E2E] bg-[#151515] py-12 p-8 border-[0.5px] border-gray-800`}>
            <div className={`sm:w-12 w-14 h-14 sm:h-12 bg-white  mb-2 sm:text-xl text-2xl font-bold text-black flex items-center justify-center`}>
                {item.icon === "LuMapPin" && < LuMapPin/>} 
                {item.icon ==="TfiWorld"&& <TfiWorld />}
                {item.icon ==="GiNetworkBars"&& <GiNetworkBars />}

            </div>
            <h2 className="sm:text-3xl text-3xl mt-3 sm:mt-6 font-semibold tracking-tight leading-none">{item.h2}</h2>
            <h2 className="sm:text-3xl text-3xl font-[500] leading-none">{item.h3}</h2>
            <p className="sm:my-5 my-3 sm:w-[70%] w-full sm:text-sm text-md leading-none text-gray-400">{item.p} </p>

            <div className="flex items-center gap-2 my-10 hover:bg-[#CBFC01] w-fit px-3 py-2 rounded-md hover:text-black font-semibold duration-300">
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
