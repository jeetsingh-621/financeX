import React from 'react'

function Map() {
  return (
    <div className='w-full flex  flex-col sm:flex-row  flex-shrink-0 my-20 px-4 md:px-6 lg:px-28 py-2 h-[80vh] sm:h-[50vh] lg:h-[70vh]'>
        <div className='w-full py-2 sm:py-10   h-full '>
            <h3 className='text-[#CBFC01] text-center sm:text-left py-4 sm:py-0 text-4xl md:text-2xl font-bold  sm:text-2xl'>Benefits</h3>
            <h2 className='text-2xl text-center  sm:text-left md:text-3xl lg:text-5xl font-bold'>We have many </h2>
            <h2 className='text-2xl text-center sm:text-left leading-none md:text-3xl lg:text-5xl font-bold'>users all over the </h2>
            <h4 className='text-[#CBFC01] sm:text-left text-center font-bold text-3xl md:text-3xl lg:text-5xl'>world</h4>
            <p className='sm:w-2/3 w-full text-center sm:text-left my-10 md:text-md md:leading-tight md:text-gray-300 sm:my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna </p>

            <div className='sm:w-[70%]  w-full text-center items-center justify-between flex md:my-10 lg:my-20 my-20'>
                <div className=''>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-bold'>10M <span className='text-[#CBFC01]'>+</span></h2>
                    <h4 className='text-[#CBFC01] text-sm sm:text-lg  text-left'>user active</h4>
                </div>
                <div className=''>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-bold'>30 <span className='text-[#CBFC01]'>+</span></h2>
                    <h4 className='text-[#CBFC01] text-sm sm:text-lg  text-left'>country</h4>
                </div>  <div className=''>
                    <h2 className='text-lg md:text-xl lg:text-2xl font-bold'>$50M <span className='text-[#CBFC01]'>+</span></h2>
                    <h4 className='text-[#CBFC01] text-sm sm:text-lg  text-left'>Transaction</h4>
                </div>
             
            </div>

        </div>




        <div className='h-full w-full'>
            <img className='w-full h-full object-contain' src="/public/images/map.png" alt="" />

        </div>
    </div>
  )
}

export default Map