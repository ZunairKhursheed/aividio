// @ts-nocheck
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import HText from "../../utils/HText";
//import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-24 xl:px-24">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Core Features",
              subtitle: "Lip-Sync, Voice-Sync, Stable-Diffusion, ChatGPT Integrated.",
              description: ``,
            }}
          />
          
          <div className="episode-card py-12 sm:py-20 mx-4 md:mx-16 my-4 rounded-2xl ">
        <div className="md:flex items-center justify-center gap-4 mx-auto w-11/12 xl:w-5/6 h-full">
          <HText className="w-full md:w-2/12 md:max-w-[200px] pb-12 md:p-0">
            STEPS FORWARD FOR GENERATIVE AI
          </HText>
          <div className="sm:flex items-center justify-between w-full md:w-10/12 h-full mx-auto pl-[20px] sm:pl-0">
            <div className="relative flex flex-col justify-center w-full xs:w-2/3 md:w-1/3 h-[120px] p-4 mx-auto rounded-xl border border-secondary-100 bg-secondary-100">
              <div className="absolute top-3 sm:top-[-20px] left-[-20px] sm:left-4 flex items-center justify-center w-10 h-10 border rounded-xl border-secondary-100 bg-gray-800">
              <video muted autoPlay loop src={"https://res.cloudinary.com/dbospsdwo/video/upload/v1688272245/talking_avatar/rgupcw6itclxsh5cuzee.mp4"} width="80" height="80" controlsList="nodownload"  />
                <div className="w-5 h-5 text-secondary-100 rotate-90 sm:rotate-0" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-white pl-3 sm-pl-0 pt-3">
                Talking Avatar
              </h2>
              
            </div>
            <svg
              className="w-auto h-6 mx-auto md:mx-0 hidden sm:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24.15 48.31"
            >
              <g>
                <path
                  className="fill-secondary-100"
                  d="m24.15,0v48.31c0-6.67-5.4-12.08-12.07-12.08S0,41.64,0,48.31V0c0,6.67,5.41,12.08,12.08,12.08S24.15,6.67,24.15,0Z"
                />
              </g>
            </svg>
            <svg
              className="w-6 h-auto mx-auto md:mx-0 block sm:hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48.31 24.15"
            >
              <g>
                <path
                  className="fill-secondary-100"
                  d="m48.31,24.15H0c6.67,0,12.08-5.4,12.08-12.07S6.67,0,0,0h48.31c-6.67,0-12.08,5.41-12.08,12.08s5.41,12.07,12.08,12.07Z"
                />
              </g>
            </svg>
            <div className="relative flex flex-col justify-center w-full xs:w-2/3 md:w-1/3 h-[120px] p-4 mx-auto rounded-xl border border-secondary-100 bg-secondary-100">
              <div className="absolute top-3 sm:top-[-20px] left-[-20px] sm:left-4 flex items-center justify-center w-10 h-10 border rounded-xl border-secondary-100 bg-gray-800">
              <video muted autoPlay loop src={"https://res.cloudinary.com/dbospsdwo/video/upload/v1692843656/tube_video/igtwrrmsm18whjwxpab5.mp4"} width="80" height="80" controlsList="nodownload"  />   
                
                <div className="w-5 h-5 text-secondary-100 rotate-90 sm:rotate-0" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-white pl-3 sm-pl-0 pt-3">
                Text2Video
              </h2>

            </div>
            <svg
              className="w-auto h-6 mx-auto md:mx-0 hidden sm:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24.15 48.31"
            >
              <g>
                <path
                  className="fill-secondary-100"
                  d="m24.15,0v48.31c0-6.67-5.4-12.08-12.07-12.08S0,41.64,0,48.31V0c0,6.67,5.41,12.08,12.08,12.08S24.15,6.67,24.15,0Z"
                />
              </g>
            </svg>
            <svg
              className="w-6 h-auto mx-auto md:mx-0 block sm:hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48.31 24.15"
            >
              <g>
                <path
                  className="fill-secondary-100"
                  d="m48.31,24.15H0c6.67,0,12.08-5.4,12.08-12.07S6.67,0,0,0h48.31c-6.67,0-12.08,5.41-12.08,12.08s5.41,12.07,12.08,12.07Z"
                />
              </g>
            </svg>
            <div className="relative flex flex-col justify-center w-full xs:w-2/3 md:w-1/3 h-[120px] p-4 mx-auto rounded-xl border border-secondary-100 bg-secondary-100">
              <div className="absolute top-3 sm:top-[-20px] left-[-20px] sm:left-4 flex items-center justify-center w-10 h-10 border rounded-xl border-secondary-100 bg-gray-800">
               
              <video muted autoPlay loop src={"https://res.cloudinary.com/dbospsdwo/video/upload/v1683909446/talking_avatar/wcrfglpwywjouvscnoq5.mp4"} width="80" height="80" controlsList="nodownload"  />              
                <div className="w-5 h-5 text-secondary-100 rotate-90 sm:rotate-0" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-white pl-3 sm-pl-0 pt-3">
                ChatGPT Script Creation
              </h2>
            </div>
          </div>
        </div>
      </div>
          
          
          {/* <!-- Section Title End --> */}

         
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
