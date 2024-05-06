import { motion } from 'framer-motion'
import React from 'react'

function Grow() {
  
  return (
    <motion.div
   
    className='w-full  my-0   h-full px-2 lg:px-4'>
        <motion.div 
         initial={{opacity:0, y:100,backgroundColor:"green"}}
         whileInView={{opacity:1,y:0,backgroundColor:"#CBFC01"}}
         viewport={{once:true}} 
         transition={{duration:1,delay:0.5}}className='w-full bg-[#cbfc01] h-full text-center py-10 '>
    <h1 className='text-black font-bold text-2xl lg:text-6xl'>Let's grow your business,</h1>
    <h2 className='text-black font-bold text-2xl lg:text-6xl'>together</h2>
        <div className='bg-black text-[#CBFC01] px-5 lg:px-10 py-3 my-10 lg:my-8 rounded-md w-fit mx-auto'>
            <button>Get Started</button>
        </div>
        </motion.div>

    </motion.div>
  )
}

export default Grow