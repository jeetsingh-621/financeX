import React from 'react'
import Marquee from './Marquee'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import Paypal from '../../public/Images/Paypal.png'
import Webflow from '../../public/Images/Webflow.png'
import Google from '../../public/Images/Google.png'
import Vector from '../../public/Images/Vector.png'
import Adobe from '../../public/Images/Adobe.png'


function Marquees() {
  
  
  useGSAP(()=>{
    gsap.from(".marquee",{
      opacity:0,
      duration:2,
      delay:2
    })
  })

  

    var data = [{url:{Paypal} }, {url:{Webflow}, width:"w-20"},{url:{Google}, width:"w-20"},{url:{Vector}, width:"w-20"},{url:{Adobe}, width:"w-20" } ]
  return (
    <div  className='marquee overflow-hidden w-full py-12 sm:py-0 lg:py-0 px-0 sm:px-4 lg:px-4'>
    <div data-scroll data-scroll-speed='-0.05' className='w-full py-5  lg:py-10 mt-56  sm:mt-0 lg:mt-10 relative shrink-0 bg-[#CBFC01] my-14 px-2 sm:px-24 lg:px-2 flex items-center gap-4'>
      <div className='w-full '>
          <Marquee data={data}  />
        </div>

    </div>
    </div>
  )
}

export default Marquees