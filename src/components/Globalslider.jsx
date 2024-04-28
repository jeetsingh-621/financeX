import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiAccessibility } from "react-icons/bi";



function Globalslider() {
    var settings = {
      dots: true,
      className: "center",
      infinite: true,
      speed: 500,
      swipeToSlide: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay:true,
      
      autoplaySpeed: 4000,
    
    cssEase: "linear",
    pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,

          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
      speed: 300,
      autoplaySpeed: 6000,


          }
        }
      ]
    };
    
    
  const data= [
    {para:" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel" , image:"/public/images/image.png", h4:"Ranveer" , h6:"Webflow Development"},
  {para:" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel" , image:"/public/images/image1.png", h4:"Mahesh" , h6:"CEO"},
  {para:" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel" , image:"/public/images/image2.png", h4:"Tony stark" , h6:"Webflow Development"},
  {para:" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel" , image:"/public/images/image3.png", h4:"Ranveer" , h6:"CEO"},
  {para:" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel" , image:"/public/images/image.png", h4:"Mahesh" , h6:"Webflow Development"},
  {para:" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel" , image:"/public/images/image1.png", h4:"Tony stark" , h6:"CEO"},
  {para:" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel" , image:"/public/images/image2.png", h4:"Tony stark" , h6:"Webflow Development"},
  {para:" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel" , image:"/public/images/image3.png", h4:"Ranveer" , h6:"CEO"},
  {para:" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel" , image:"/public/images/image.png", h4:"Ranveer" , h6:"Webflow Development"},
  {para:" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel" , image:"/public/images/image1.png", h4:"Mahesh" , h6:"CEO"},
  {para:" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel" , image:"/public/images/image2.png", h4:"Tony stark" , h6:"Webflow Development"},
  {para:" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel" , image:"/public/images/image3.png", h4:"Ranveer" , h6:"CEO"},
  {para:" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel" , image:"/public/images/image.png", h4:"Mahesh" , h6:"Webflow Development"},
  {para:" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel" , image:"/public/images/image1.png", h4:"Tony stark" , h6:"CEO"},
  {para:" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel" , image:"/public/images/image2.png", h4:"Tony stark" , h6:"Webflow Development"},
  {para:" Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel" , image:"/public/images/image3.png", h4:"Ranveer" , h6:"CEO"}
]

    
    //     const [currentImage,setcurrentImage]=useState(0);
    
    
    // const nextImage = () => {
    //     setcurrentImage((prevImage) => (prevImage === data.length - 1 ? 0 : prevImage + 1));
    //   };
    
    //   const prevImage = () => {
    //     setcurrentImage((prevImage) => (prevImage === 0 ? data.length - 1 : prevImage - 1));
    //   };
    //  useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         nextImage()

    //     },3000);
    //     return()=> clearInterval(interval);
    //  },[]);

    //  useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         nextImage();

    //     },3000);
    //     return()=> clearInterval(interval);
    //  },[currentImage,nextImage])

  return (
    <div className="w-full h-[70vh]  md-[45rem] sm:h-[90vh] sm:my-20 my-6  text-black py-5 sm:py-10 bg-[#CBFC01]">
      <div className="w-full px-2  lg:px-20 sm:px-2 my-2  sm:my-0 lg:my-10 font-bold ">
        <h2 className=" text-4xl md:px-2 tracking-tight text-center sm:text-4xl lg:text-left lg:text-xl">Our services</h2>
        <h1 className="text-3xl text-center sm:text-center lg:text-left sm:text-6xl mt-7 sm:mt-4 font-semibold leading-none">
          Global businesses
        </h1>
        <h1 className="text-center md:px-2 text-3xl sm:text-center lg:text-left sm:text-6xl font-semibold leading-none">love financeX</h1>
      </div>





      <div className="swiper mt-10 sm:mt-20 lg:mt-0">

        <div className="swiper-wrapper w-full  justify-center  mx-auto h-[40vh] px-8 sm:px-0 lg:px-0    ">
      <div className="px-5"></div>

      <Slider {...settings} className="mx-20">
        
            {data.map((item,index)=>  <div 
               key={index}
                className="bg-[#151515] flex gap-20 text-white px-4 py-4   border-[1px] border-gray-400 w-64 h-full ">
            <p className="text-sm">
             {item.para}
            </p>

            <div className="pt-5 flex gap-4 leading-tight text-sm">
              <div className="w-11 h-11 rounded-full overflow-hidden ">
                <img className="w-full rounded-full h-full object-cover" src={item.image} alt="" />
              </div>
              <div>
                <h4>{item.h4}</h4>
                <h6 className="text-gray-300">{item.h6}</h6>
              </div>
            </div>
          </div>)}

          </Slider>
        
        </div>

        {/* <div className="w-full text-center "> */}
        {/* <button className="sm:mt-9 mx-4 sm:mx-10" onClick={prevImage}>Previous</button> */}
        {/* <button onClick={nextImage}>Next</button> */}
        {/* </div> */}

      </div>
    </div>
  );
}

export default Globalslider;
