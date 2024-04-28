import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


function Hero() {
  return (
    <div className='w-full pl-4 sm:px-0 sm:pl-4  lg:pl-24 md:pl-6  h-[100vh] md:h-[75vh] lg:h-[86vh] mt-12 md:mt-24 lg:mt-20 sm:flex flex flex-col md:flex-row '>
        <div className='left sm:w-1/2 w-full sm:py-20 py-10 '>
            <h3 className='lg:text-xl sm:text-xl text-sm text-[#CBFC01]'>Welcome! Future Platform</h3>
            <div className='sm:text-6xl text-4xl md:text-5xl lg:text-6xl font-bold leading-none py-5 sm:py-2 sm:leading-tight'>
                <h2>The World's</h2>
                <h2>Most Modern</h2>
                <h2>Card <span className='text-[#CBFC01]'>Platform</span> </h2>
            </div>

            <p className='lg:w-[60%] text-sm sm:text-[1rem] leading-4 px-1 sm:leading-tight w-full my-4 sm:my-10 text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>

            <div className='flex gap-2 sm:gap-4 items-center  w-fit px-4  sm:px-8 py-3 sm:py-4 text-black rounded-sm bg-[#CBFC01] font-[700]'>
                <button>Get Started</button>
            <FaArrowRightLong />


            </div>
        </div>

        <div className='right w-full sm:w-1/2 py-10  flex justify-end relative'>
            <div className='w-[100%] h-full absolute -left-5 sm:left-28 '>
                <img className='sm:w-[38rem]  absolute z-[1] md:-left-28 lg:top-5 lg:-left-1 md:top-2 top-0 h-fit  object-cover' src="./public/images/Frame.png" alt="" />
                <img className='sm:w-[38rem]  object-cover top-12 absolute bottom-24 md:top-16 lg:top-32 md:-left-28  left-0 lg:left-10' src="./public/images/Frame.png" alt="" />
            </div>
            <img  className='hidden md:block sm:w-[20rem] md:w-[14rem]  lg:w-[23rem] w-[14rem] object-cover h-fit' src="/public/images/Ellipse.png" alt="" />




        </div>

    </div>
  )
}

export default Hero