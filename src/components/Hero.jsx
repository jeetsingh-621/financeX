import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import frame from '../../public/Images/Frame.png';
import Ellipse from '../../public/Images/Ellipse.png';
import { motion } from 'framer-motion';
// import ScrollTrigger from 'react-scroll-trigger';



function Hero() {
    
    // gsap.registerPlugin(ScrollTrigger);
    useGSAP(()=>{
        gsap.from('.left',{
            opacity:0,
            duration:1.5,
            x:-200,
            delay:0.5,
            // scrollTrigger:{
            //     trigger:'.left',
            //     scroller:"body",
            //     start:'top 40%',
            //     end:'bottom 80%',
            //     scrub:true,
            //     markers:true
            // }

        })
        gsap.from('.right',{
            opacity:0,
            duration:1.5,
            x:200,
            delay:0.5
        })
        gsap.from('.text',{
            opacity:0,
            duration:1.5,
            x:100,
            delay:0.5
        })
        // gsap.from('.btn',{
        //     opacity:0,
        //     duration:1.5,
        //     // x:100,
        //     delay:0.5
        // })
    })
  return (
    <div data-scroll data-scroll-speed='-0.05' data-scroll-direction='horizontal' >
    <div className='w-full px-2   h-full pt-0 md:pt-6 lg:pt-8 sm:px-4 lg:px-4 sm:flex flex flex-col md:flex-row '>
        <div data-scroll  className='  left sm:w-1/2 w-full sm:py-20 py-10 '>
            <h3 className='lg:text-xl sm:text-xl text-sm text-[#CBFC01]'>Welcome! Future Platform</h3>
            <div className='sm:text-6xl text-4xl md:text-5xl lg:text-6xl font-bold leading-none py-5 sm:py-2 sm:leading-tight'>
                <h2>The World's</h2>
                <h2>Most Modern</h2>
                <h2>Card <span className='text-[#CBFC01]'>Platform</span> </h2>
            </div>

            <p className='lg:w-[60%] text-sm sm:text-[1rem] leading-4 px-1 sm:leading-tight w-full my-4 sm:my-10 text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>

            <div className='flex gap-2 mt-12 sm:mt-0 sm:gap-4 items-center  w-fit px-4  sm:px-8 py-3 sm:py-4 text-black rounded-sm bg-[#CBFC01] font-[700]'>
                <button>Get Started</button>
            <FaArrowRightLong />


            </div>
        </div>

        <div data-scroll  className='right w-full  sm:w-1/2 py-10  ml-2 sm:ml-0  flex justify-end relative'>
            <div className='w-full  h-full absolute -left-5 sm:left-28 '>
                <img className='sm:w-[38rem]  absolute z-[1] md:-left-28 xl:top-6  xl:-left-12 md:top-2 top-0 h-fit   object-cover' src={frame} alt="" />
                <img className='sm:w-[38rem]  object-cover top-12 absolute bottom-24 md:top-16 lg:top-28 md:-left-28  xl:-left-12   left-0 ' src={frame} alt="" />
            </div>
            <img  className='hidden md:block sm:w-[20rem] md:w-[14rem]  lg:w-[23rem] w-[14rem] object-cover h-fit' src={Ellipse} alt="" />




        </div>

    </div>
    </div>
  )
}

export default Hero