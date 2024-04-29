import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquees from './components/Marquees';
import Ourservices from './components/Ourservices';
import Map from './components/Map';
import Realtime from './components/Realtime';
import Globalslider from './components/Globalslider';
import Grow from './components/Grow';
import Footer from './components/Footer';
import Footerend from './components/Footerend';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="bg-[#151515]">
      <div className='max-w-[1400px] px-3 mx-auto text-white overflow-clip '>
        <Navbar />
        <Hero />
        <Marquees />
        <Ourservices />
        <Map />
        <Realtime />
        <Globalslider />
        <Grow />
        <Footer />
        <Footerend/>

      </div>
    </div>
  )
}

export default App