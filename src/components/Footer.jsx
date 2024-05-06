import React from 'react'
import linkedin from '../../public/Images/linkedin.png'
import messenger from '../../public/Images/messenger.png'
import twitter from '../../public/Images/twitter.png'
import twoo from '../../public/Images/twoo.png'
import { motion } from 'framer-motion'


function Footer() {
  
  return (
    <div className='w-full  md:px-0 lg:px-4 mt-10 py-4 md:py-10 flex gap-10 lg:gap-2 flex-col md:flex-row items-center justify-between '>

        <div className ='  w-fit'>
            <motion.h2
             initial={{opacity:0, y:10}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}} 
             transition={{duration:0.5,delay:0.5}} className='font-bold text-2xl text-center md:text-left'>FinanceX</motion.h2>
          
            <motion.p 
            initial={{opacity:0, y:10}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}} 
            transition={{duration:0.5,delay:0.6}} 
            className='md:w-[80%]  w-full text-center md:text-left tracking-tight leading-none text-gray-400 py-3'>Lorem ipsum dolor sit amet, consectetur </motion.p>
      

            <motion.div
                initial={{opacity:0, y:10}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}} 
                transition={{duration:0.5,delay:0.7}} 
            className='icons flex gap-10 md:gap-2 py-3 md:justify-start justify-center lg:py-6'>
              <img className='w-6 h-6  object-cover' src={linkedin} alt="" />
              <img className='w-6 h-6 object-cover' src={messenger} alt="" />
              <img className='w-6 h-6 object-cover' src={twitter} alt="" />
              <img className='w-6 h-6 object-cover' src={twoo} alt="" />


            </motion.div>

          
        </div>

        <div className=' w-fit'>
          <motion.h2
               initial={{opacity:0, y:10}}
               whileInView={{opacity:1,y:0}}
               viewport={{once:true}} 
               transition={{duration:0.5,delay:0.5}}
          className='font-bold text-2xl text-center md:text-left pt-10 md:pt-4 py-4'>Company</motion.h2>
          <motion.div className='text-gray-400 text-center md:text-left flex flex-col gap-2'>
            <motion.h4 
               initial={{opacity:0, y:10}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}} 
             transition={{duration:0.5,delay:0.6}}>
              About us </motion.h4>
            <motion.h4 
               initial={{opacity:0, y:10}}
               whileInView={{opacity:1,y:0}}
               viewport={{once:true}} 
               transition={{duration:0.5,delay:0.7}}>Careers </motion.h4>
            <motion.h4
               initial={{opacity:0, y:10}}
               whileInView={{opacity:1,y:0}}
               viewport={{once:true}} 
               transition={{duration:0.5,delay:0.8}}>Blog </motion.h4>
            <motion.h4
               initial={{opacity:0, y:10}}
               whileInView={{opacity:1,y:0}}
               viewport={{once:true}} 
               transition={{duration:0.5,delay:0.9}}>Pricing</motion.h4>
          </motion.div>
        </div>

        <div className=' w-fit md:hidden lg:block'>
          <motion.h2
             initial={{opacity:0, y:10}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}} 
             transition={{duration:0.5,delay:0.5}}
          className='font-bold text-2xl text-center md:text-left pt-10 md:pt-4 py-4'>Resources</motion.h2>
          <div className='text-gray-400 text-center md:text-left flex gap-2 flex-col'>
            <motion.h4
               initial={{opacity:0, y:10}}
               whileInView={{opacity:1,y:0}}
               viewport={{once:true}} 
               transition={{duration:0.5,delay:0.6}}>Templates </motion.h4>
            <motion.h4
               initial={{opacity:0, y:10}}
               whileInView={{opacity:1,y:0}}
               viewport={{once:true}} 
               transition={{duration:0.5,delay:0.7}}>Tutorials </motion.h4>
            <motion.h4
               initial={{opacity:0, y:10}}
               whileInView={{opacity:1,y:0}}
               viewport={{once:true}} 
               transition={{duration:0.5,delay:0.8}}>Free resources </motion.h4>
            <motion.h4
               initial={{opacity:0, y:10}}
               whileInView={{opacity:1,y:0}}
               viewport={{once:true}} 
               transition={{duration:0.5,delay:0.9}}>Contact templates</motion.h4>
          </div>
        </div>

    <div className='w-fit pt-10 '>
      <motion.h1
         initial={{opacity:0, y:10}}
         whileInView={{opacity:1,y:0}}
         viewport={{once:true}} 
         transition={{duration:0.5,delay:0.5}} className='py-2 text-center md:text-left'>Join our Newsletter</motion.h1>
      <motion.div
         initial={{opacity:0, y:10}}
         whileInView={{opacity:1,y:0}}
         viewport={{once:true}} 
         transition={{duration:0.5,delay:0.6}} className= 'footer  flex pt-4'>
        <input className='py-2  w-full md:w-[60%] px-2 bg-gray-300' type="email" name="" placeholder='your email address' id="" />
        <button className='px-6 py-2 bg-[#CBFC01] text-black tracking-tight font-semibold'>Subscribe</button>
      </motion.div>
        <motion.p
             initial={{opacity:0, y:10}}
             whileInView={{opacity:1,y:0}}
             viewport={{once:true}} 
             transition={{duration:0.5,delay:0.7}}
        className='w-fit py-4 text-gray-400 text-center md:text-left'>*  Will send you weekly updates for your better <br />
finance management.</motion.p>
    </div>
       
    </div>
  )
}

export default Footer