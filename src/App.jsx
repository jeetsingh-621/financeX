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



function App() {
const locomotiveScroll = new LocomotiveScroll();
  return (
    <div  className='max-w-screen-2xl mx-auto min-h-screen text-white overflow-hidden bg-[#151515]'>
      <Navbar/>
      <Hero/>
      <Marquees/>
      <Ourservices/>
      <Map/>
      <Realtime/>
      <Globalslider/>
      <Grow/>
      <Footer/>

    </div>
  )
}

export default App