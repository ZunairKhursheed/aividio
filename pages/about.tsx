import Head from 'next/head';
import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
//import Header from "@/components/Header";
import BackgroundImage from "../components/BackgroundImage";
import Slides from "../components/Slides";
import SlideInfo from "../components/SlideInfo";
import Controls from "../components/Controls";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};




export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });


  return (
    <>

      <Head>
        <title>About Us | AIVIDOO</title>
        <meta name="description" content="AIVIDOO Unveils Next-Gen AI Innovation with VideoStory Suite" />
        <link rel="icon" href="/aividoo_logo.png" />
      </Head>

      <main
      className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="  absolute z-20  h-full w-full brightness-20">
         
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className=" col-span-6  flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
   
     
     
     
     
      </main>
    </>

  );
}



const sliderData = [
  {
    img: "/robo_3.jpeg",
    location: "AIVIDOO",
    description:
      "Revolutionize content creation by utilizing the latest artificial intelligence (AI) technologies.",
     
      title:  "Our mission",
  },
  {
    img: "/robo_2.jpeg",
    title: "Our Technology",
    description:
      "StoryboardVision, a suite of cutting-edge AI tools, designed to streamline video and image generation while enhancing both education and pre-production process.",
    location: "AIVIDOO",
  },
  {
    img: "/7.png",
    title: "Our People",
    description:
      "Passionate About Creating AI-enabled Tools.",
    location: "AIVIDOO",
  },
  {
    img: "/1.png",
    title: "Our Belief",
    description:
      "Artificial Intelligence For Good",
    location: "AIVIDOO",
  },
  {
    img: "/2.png",
    title: "Our Pledge",
    description:
      "Enable Your Ceativity and Protect Your Privacy",
    location: "AIVIDOO",
  },
];

const initData = sliderData[0];
