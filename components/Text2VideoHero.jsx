import React from 'react';
import Link from 'next/link';

import Text2VideoPlayer from './Text2VideoPlayer';


import { motion } from "framer-motion";


// React Icons
import { BsFillPlayCircleFill } from 'react-icons/bs';

const Hero = () => {
    return (
       
       
        
        <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=" h-full w-full animate_top border border-black shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4  z-40"
      >
       
       
       <div className="max-w-7xl w-100 m-auto px-4">
       <h1 className="text-white dark:text-white font-bold text-4xl md:text-5xl xl:text-6xl">TEXT2VIDEO</h1>
               
               <h2 className="text-center my-4 text-3xl text-white font-semibold md:text-left md:text-3xl md:my-4">
               Synthesize videos in any style you can imagine using nothing but a text prompt. 
               </h2>
               
    
       </div>
       <div className="grid  grid-rows-3 grid-cols-4 gap-0 py-8 place-items-center md:py-10 md:grid-cols-1">
            
      
            
           
       
        </div>

        </motion.div> 
    )
}

export default Hero;