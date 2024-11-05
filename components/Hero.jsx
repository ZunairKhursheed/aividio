import React from 'react';
import Link from 'next/link';
import VideoPlayer from './VideoPlayer';
import Text2VideoPlayer from './Text2VideoPlayer';
import Image from "next/image";


// React Icons
import { BsFillPlayCircleFill } from 'react-icons/bs';

const Hero = () => {
    return (
       
       
        
  
       
       <div className="grid grid-cols-1 gap-6 py-10 place-items-center md:py-16 md:grid-cols-2">
            
            
            
            <div  >
           
                    
                
            <h1 className="text-white dark:text-white font-bold text-4xl md:text-5xl xl:text-6xl">TALKING AVATAR</h1>   
                
                <p className="text-center font-normal text-md text-light-gray my-6 mb-8 md:text-left md:text-xl leading-normal">
                </p>

                <Link href="/"
                    title="Sign In"
                    className="hero-button flex justify-center items-center gap-3 w-max m-auto mt-8 py-3 px-6 text-sm text-white font-semibold rounded-full active:scale-95 md:text-md md:m-0">
                    <span className="text-xl md:text-2xl"><BsFillPlayCircleFill /></span>
                    <span>Make Your Own</span>
                </Link>

            </div>

            <div>
                <div className="video-card  flex justify-center items-center gap-3 m-auto mt-8 py-3 px-6">
                    <VideoPlayer />
                </div>
            </div>

            
        </div>
        
    )
}

export default Hero;