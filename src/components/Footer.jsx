import React from 'react'

function Footer() {
  return (
    <div className='w-full  md:px-0 lg:px-4 mt-10 py-4 md:py-10 flex gap-10 lg:gap-2 flex-col md:flex-row items-center justify-between '>

        <div className ='  w-fit'>
            <h2 className='font-bold text-2xl text-center md:text-left'>FinanceX</h2>
          
            <p className='md:w-[80%] w-full text-center md:text-left tracking-tight leading-none text-gray-400 py-3'>Lorem ipsum dolor sit amet, consectetur </p>
      

            <div className='icons flex gap-10 md:gap-2 py-3 md:justify-start justify-center lg:py-6'>
              <img className='w-6 h-6  object-cover' src="/public/images/linkedin.png" alt="" />
              <img className='w-6 h-6 object-cover' src="/public/images/messenger.png" alt="" />
              <img className='w-6 h-6 object-cover' src="/public/images/twitter.png" alt="" />
              <img className='w-6 h-6 object-cover' src="/public/images/twoo.png" alt="" />


            </div>

            <div>
                
            </div>
        </div>

        <div className=' w-fit'>
          <h2 className='font-bold text-2xl text-center md:text-left pt-10 md:pt-4 py-4'>Company</h2>
          <div className='text-gray-400 text-center md:text-left flex flex-col gap-2'>
            <h4>About us </h4>
            <h4>Careers </h4>
            <h4>Blog </h4>
            <h4>Pricing</h4>
          </div>
        </div>

        <div className=' w-fit md:hidden lg:block'>
          <h2 className='font-bold text-2xl text-center md:text-left pt-10 md:pt-4 py-4'>Resources</h2>
          <div className='text-gray-400 text-center md:text-left flex gap-2 flex-col'>
            <h4>Templates </h4>
            <h4>Tutorials </h4>
            <h4>Free resources </h4>
            <h4>Contact templates</h4>
          </div>
        </div>

    <div className='w-fit pt-10 '>
      <h1 className='py-2 text-center md:text-left'>Join our Newsletter</h1>
      <div className= 'footer  flex pt-4'>
        <input className='py-2  w-full md:w-[60%] px-2 bg-gray-300' type="email" name="" placeholder='your email address' id="" />
        <button className='px-6 py-2 bg-[#CBFC01] text-black tracking-tight font-semibold'>Subscribe</button>
      </div>
        <p className='w-fit py-4 text-gray-400 text-center md:text-left'>*  Will send you weekly updates for your better <br />
finance management.</p>
    </div>
       
    </div>
  )
}

export default Footer