import React from 'react'
import Marquee from './Marquee'

function Marquees() {

    var data = [{url:"/public/images/Paypal.png", width:"w-20" }, {url:"/public/images/Webflow.png", width:"w-20"},{url:"/public/images/Google.png", width:"w-20"},{url:"/public/images/Vector.png", width:"w-20"},{url:"/public/images/Adobe.png", width:"w-20" } ]
  return (
    <div className='w-full h-12 sm:h-24 lg:h-36 relative shrink-0 bg-[#CBFC01] my-14 px-2 sm:px-24 flex items-center gap-4'>
      <div className='w-full '>
          <Marquee data={data}  />
        </div>

    </div>
  )
}

export default Marquees