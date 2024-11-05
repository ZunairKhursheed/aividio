// @ts-nocheck
import React from "react";
//import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }) => {
  const { video_url, title, description } = feature;

  return (
    <>
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
        className="episode-card  px-10 items-center justify-center  animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4  z-40 "
      >
       
       <div className="mx-40">
                                <video muted autoPlay loop src={video_url} width="80" height="80" controlsList="nodownload"  />
                            </div>
      
        <h3 className=" feature-button py-3 font-bold text-center text-3xl xl:text-itemtitle text-white mt-7.5 mb-5">
          {title}
        </h3>
        <p className="font-semibold text-center text-sm xl:text-itemtitle text-white mt-7.5 mb-5">{description}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
