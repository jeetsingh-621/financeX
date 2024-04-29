import React from 'react'
import Marquee from './Marquee'

function Marquees() {

    var data = [{url:"/public/images/Paypal.png", width:"w-20" }, {url:"/public/images/Webflow.png", width:"w-20"},{url:"/public/images/Google.png", width:"w-20"},{url:"/public/images/Vector.png", width:"w-20"},{url:"/public/images/Adobe.png", width:"w-20" } ]
  return (
    <div className=' w-full py-12 sm:py-0 lg:py-0 px-0 sm:px-4 lg:px-4'>
    <div className='w-full py-5  lg:py-10 mt-56  sm:mt-0 lg:mt-10 relative shrink-0 bg-[#CBFC01] my-14 px-2 sm:px-24 lg:px-2 flex items-center gap-4'>
      <div className='w-full '>
          <Marquee data={data}  />
        </div>

    </div>
    </div>
  )
}

export default Marquees