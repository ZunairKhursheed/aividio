import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Wrapped from "../hoc/Wrapped";

export const ColorBlob = ({
  section_id = "color_blob",
  heading = "Enter heading here",
  description = "Enter the description",
}) => {
  const targetRef = useRef(null);

  const [scrollStyle, setScrollStyle] = useState({});

  const handleScroll = () => {
    try {
      const targetElement = document.getElementById(section_id);

      const rect = targetElement.getBoundingClientRect();
      const top = rect.top;

      const startTop = top + window?.scrollY;
      const endTop = startTop / 3;

      // Ensure the top is within the range we're interested in
      if (top <= startTop && top >= endTop) {
        const opacity = 0.3 + ((startTop - top) / (startTop - endTop)) * 0.7;
        const scale = 1.5 - ((startTop - top) / (startTop - endTop)) * 1;
        console.log({
          opacity,
          transform: `scale(${scale})`,
        });
        setScrollStyle({
          opacity,
          transform: `scale(${scale})`,
        });
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section >
      <div
        className="flex mt-10 justify-center items-center min-w-screen md:min-h-screen relative "
        ref={targetRef}
        id={section_id}
      >
        <div
          style={{ opacity: scrollStyle?.opacity }}
          className="absolute duration-300 min-w-full h-[180%] top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-0 blur-[100px]"
        >
          <div
            style={{
              transform: `translate(-50%,-50%)  ${scrollStyle?.transform}`,
            }}
            className="rounded-full duration-300 absolute w-screen h-screen  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  overflow-hidden"
          >
            <div className="animate-color_blobs absolute w-screen h-[100vw]  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-gradient-conic"></div>
          </div>
        </div>
        
        <div className="flex flex-col w-full max-w-[900px] relative gap-6 container text-white">
          <h2 className="mx-10 text-[clamp(35px,5vw,52px)] mr-auto md:leading-[99%] leading-normal tracking-[-3.6px]">
            {heading}
          </h2>
          <p className="mx-10 max-w-[675px] ms-auto text-[clamp(16px,3vw,28px)]  md:leading-[99%]">
            {description}
          </p>
          <Link href="/sign-up" >
          <button className="mt-[40px] flex uppercase gap-8 max-w-[497px] mx-auto w-full items-center justify-between border-white border border-opacity-20 bg-[#5BBCFF] bg-opacity-100 transition-all hover:bg-opacity-30 text-balance text-center text-white font-medium tracking-[-0.886px] text-[30px] rounded-full px-10 h-[98px]">
          
            <span>Free Trial</span>
            <Image
              src="/assets/svgs/arrow.svg"
              alt="arrow"
              height={500}
              width={500}
              className="h-12 w-12"
            />
            
          </button>
          </Link>
        </div>
      
      </div>
    </section>
  );
};
