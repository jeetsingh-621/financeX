import { motion } from "framer-motion";
import React from "react";


function Marquee({ data,direction }) {
  const { url,width } = data;
  

  return (
    <>
    
    
      <motion.div 
       
       className="w-full flex gap-2 md:gap-6 lg:gap-20 ">
        {data.map((item,index)=> <div key={index} className= " w-full  sm:w-full"><img key={index} className=" inline-block  w-12 md:w-36 md:h-10 h-6 object-contain sm:w-full sm:h-16 sm:object-contain" src={item.url}  alt=""/></div>
)}
        
    
      </motion.div>

      
   </>
  );
}

export default Marquee;
