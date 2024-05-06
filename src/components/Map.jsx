import { animate, motion, stagger, useAnimate } from 'framer-motion'
import React from 'react'
import map from '../../public/Images/map.png'

function Map() {
    
    
  return (
    <div className='w-full flex    flex-col lg:flex-row  flex-shrink-0 my-10 xl:my-20 px-2 md:px-4 lg:px-4 py-10 xl:py-20 '>
        <motion.div 
            initial={{opacity:0, y:10,x:-100}}
            whileInView={{opacity:1,y:0,x:0}}
            viewport={{once:true}} 
            transition={{duration:1,delay:0.5}}
    
        className='w-full py-2   sm:py-10  h-full '>
            <h3 className='text-[#CBFC01] text-center lg:text-left  sm:py-0 text-4xl md:text-3xl font-bold lg:text-xl'>Benefits</h3>
            <h2 className='text-[1.5rem] text-center pt-5 md:pt-2 leading-none lg:text-left md:text-[3.3rem] tracking-tight font-semibold'>We have many </h2>
            <h2 className='text-[1.5rem] text-center font-semibold  lg:text-left leading-none md:text-[3.3rem] tracking-tight'>users all over the </h2>
            <h4 className='text-[#CBFC01] lg:text-left text-center leading-none tracking-tight text-[1.5rem] md:text-[3.3rem] font-semibold'>world</h4>
            <p className='lg:w-2/3 md:px-28 lg:px-0 leading-tight md:py-5 w-full text-center lg:text-left my-12 md:text-md md:leading-tight md:text-gray-300 sm:my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna </p>

            <div className='lg:w-[70%] md:px-20 lg:px-0   w-full text-center items-center justify-between flex md:my-5 lg:my-10 my-10'>
                <motion.div
                      initial={{opacity:0, scale:0}}
                      whileInView={{opacity:1,scale:1}}
                      viewport={{once:true}} 
                      transition={{duration:1,delay:0.5}}
                className=''>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-bold'>10M <span className='text-[#CBFC01]'>+</span></h2>
                    <h4 className='text-[#CBFC01] text-sm sm:text-lg  text-left'>user active</h4>
                </motion.div>
                <motion.div 
                      initial={{opacity:0, scale:0}}
                      whileInView={{opacity:1,scale:1}}
                      viewport={{once:true}} 
                      transition={{duration:1,delay:0.5}}
                className=''>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-bold'>30 <span className='text-[#CBFC01]'>+</span></h2>
                    <h4 className='text-[#CBFC01] text-sm sm:text-lg  text-left'>country</h4>
                </motion.div> 
                 <motion.div
                   initial={{opacity:0, scale:0}}
                   whileInView={{opacity:1,scale:1}}
                   viewport={{once:true}} 
                   transition={{duration:1,delay:0.5}}
                 className=''>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-bold'>$50M <span className='text-[#CBFC01]'>+</span></h2>
                    <h4 className='text-[#CBFC01] text-sm sm:text-lg  text-left'>Transaction</h4>
                </motion.div>
             
            </div>

        </motion.div>




        <motion.div 
              initial={{opacity:0, y:10,x:100}}
              whileInView={{opacity:1,y:0,x:0}}
              viewport={{once:true}} 
              transition={{duration:1,delay:0.5}}
        className='h-full w-full '>
            <img className='w-full h-full object-contain' src={map} alt="" />

        </motion.div>
    </div>
  )
}

export default Map