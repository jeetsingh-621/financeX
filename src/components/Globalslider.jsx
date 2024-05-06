import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import images from '../../public/Images/image.png'



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
    autoplay: true,

    autoplaySpeed: 4000,

    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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


  const data = [
    { para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel", image: images, h4: "Ranveer", h6: "Webflow Development" },
    { para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel", image: "/public/images/image1.png", h4: "Mahesh", h6: "CEO" },
    { para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel", image: "/public/images/image2.png", h4: "Tony stark", h6: "Webflow Development" },
    { para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel", image: "/public/images/image3.png", h4: "Ranveer", h6: "CEO" },
    { para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel", image: "/public/images/image.png", h4: "Mahesh", h6: "Webflow Development" },
    { para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel", image: "/public/images/image1.png", h4: "Tony stark", h6: "CEO" },
    { para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel", image: "/public/images/image2.png", h4: "Tony stark", h6: "Webflow Development" },
    { para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel", image: "/public/images/image3.png", h4: "Ranveer", h6: "CEO" },
    { para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel", image: "/public/images/image.png", h4: "Ranveer", h6: "Webflow Development" },
    { para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel", image: "/public/images/image1.png", h4: "Mahesh", h6: "CEO" },
    { para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel", image: "/public/images/image2.png", h4: "Tony stark", h6: "Webflow Development" },
    { para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel", image: "/public/images/image3.png", h4: "Ranveer", h6: "CEO" },
    { para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel", image: "/public/images/image.png", h4: "Mahesh", h6: "Webflow Development" },
    { para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel", image: "/public/images/image1.png", h4: "Tony stark", h6: "CEO" },
    { para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel", image: "/public/images/image2.png", h4: "Tony stark", h6: "Webflow Development" },
    { para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementumfacilisis leo, vel", image: "/public/images/image3.png", h4: "Ranveer", h6: "CEO" }
  ]

  return (
    <div className="w-full  lg:my-20 my-6  text-black py-5 md:py-10 bg-[#cafc01e4]">
      <div className="w-full px-2  lg:px-4 sm:px-2 my-2  sm:my-0 lg:my-0 font-bold ">
        <h2 className=" text-4xl my-0 md:px-2 tracking-tight text-center md:text-3xl  lg:text-left lg:text-xl">Our services</h2>
        <h1 className="text-[1.5rem] text-center tracking-tight lg:text-left sm:text-[3.3rem] mt-7 sm:mt-0 font-semibold leading-none">
          Global businesses
        </h1>
        <h1 className="text-center md:px-2 text-[1.5rem] sm:text-center lg:text-left sm:text-[3.3rem] font-semibold leading-none">love financeX</h1>
      </div>





      <div className="swiper mt-10 py-5 md:mt-0 lg:py-10">

        <div className="swiper-wrapper w-full  justify-center md:px-10  mx-auto  px-7 sm:px-6 lg:px-10    ">
          <Slider {...settings} className=" h-full">

            {data.map((item, index) => {
              return (
                <div key={index} className="px-2 lg:px-3  h-full">
                  <div
                    className="bg-[#151515] text-white px-3 py-10 border-[1px] border-gray-400 h-full">
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
                  </div>
                </div>
              )
            })}
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
