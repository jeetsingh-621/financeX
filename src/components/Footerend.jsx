import { motion } from 'framer-motion'
import React from 'react'

function Footerend() {
  
  return (
    <motion.div 
    initial={{opacity:0, y:10,scale:0}}
    whileInView={{opacity:1,y:0,scale:1}}
    viewport={{once:true}} 
    transition={{duration:0.5,delay:0.5}}
    className='w-full px-2 md:px-4 py-4  lg:py-10 border-t-[1px] border-white text-center'>
        <h3>Copyright @ Jeet Singh 2022. All Rights Reserved.</h3>
        
        

    </motion.div>
  )
}

export default Footerend