
import React, { useState,useContext } from "react";
import { useUser } from "@clerk/nextjs";
import cn from "classnames";

import { useEffect } from 'react';
import Link from 'next/link';
import Disclaimer from './Disclaimer';
import SubscriptionContext from "../context/SubscriptionContext";
import TextField from '@mui/material/TextField';


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Dashboard() {

  const [promptInput, setPromptInput] = useState("");

  const [negativePrompt, setNegativePrompt] = useState("");

  const [videoLength, setVideoLength] = useState("16");
  
  const [error, setError] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [videoPrediction, setVideoPrediction] = useState(null);

  const [videoSrc, setVideoSrc] = useState();
  const [usage, setUsage] = useState('');
  const [isOverUsageLimit, setIsOverUsageLimit] = useState(true);

  const [isGenerating, setIsGenerating] = useState(false);

  const [newUser, setNewUser] = useState(false);
  const [effect, setEffect] = useState(false);
  const [seed, setSeed] = useState();
  const [loading, setLoading] = useState(false);
  const [messageId, setMessageId] = useState("");
  const [image, setImage] = useState(null);
  const [canShowImage, setCanShowImage] = useState(false);

  //get the  3 days lag date from current date 

  
 
  // const {
  //   subscription,
  // } = useSubscription();

  const { isSignedIn, user } = useUser();


  const showLoadingState = loading || (image && !canShowImage);
  
  
  useEffect(() => {

    // fetchUserUsage();

  });

  // updated code subscription check
  const [count, setCount] = useState(0);

  const {
    subscriptionData,
    decreaseText2VideoCount
  } = useContext(SubscriptionContext);

  console.log('here is sub data', subscriptionData)

  useEffect(() => {
    setCount(subscriptionData?.metadata?.text2Video)
    // fetchUserUsage();

  }, [subscriptionData?.metadata?.text2Video]);

  

  const handleOnSubmit = async (event) => {

    event.preventDefault();
    if (subscriptionData?.metadata?.text2Video == '0') {
      window.alert('No attempt left , Please purchase a plan');
      return;
    }
  
    //useEffect(()=>{
    //  const ele = document.querySelector('.buble');
    //if (ele) {
    //  ele.style.left = `${Number(value / 4)}px`;
   // }
  //})

    // post request to prediction api to create talking avatar
    const video_body = {
      model_name: "dreamlike-art/dreamlike-photoreal-2.0",
      prompt: promptInput,
      timestep_t0: 44,
      timestep_t1: 47,
      motion_field_strength_x: 12,
      motion_field_strength_y: 12,
      video_length: 16,
      fps: 4,
      seed: seed
    };

    const video_response = await fetch("/api/video_predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        video_body),
    });

    let videoPrediction = await video_response.json();
    if (video_response.status !== 201) {
      setError(videoPrediction.detail);

      return;
    }

    setVideoPrediction(videoPrediction);
    while (
      videoPrediction.status !== "succeeded" &&
      videoPrediction.status !== "failed"
    ) {
      await sleep(1000);
      const video_response = await fetch("/api/video_predictions/" + videoPrediction.id);
      videoPrediction = await video_response.json();
      if (video_response.status !== 200) {
        setError(videoPrediction.detail);
        setVideoPrediction(videoPrediction);
        return;
      }
      console.log({ videoPrediction });
      setVideoPrediction(videoPrediction);
    }

    if (videoPrediction.status == "succeeded") {
      setVideoPrediction(videoPrediction);
      setVideoSrc(videoPrediction.output);
      const video_url = videoPrediction.output;
      
      const updatedCount = await decreaseText2VideoCount(user?.primaryEmailAddress?.emailAddress)
      setCount(updatedCount?.metadata?.text2Video)  


    }
    setPromptInput("");
    setNegativePrompt("");
      
    setVideoLength("16");


  }

  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-y-12 md:grid-cols-1 md:gap-x-12 ">
        <div className="">
      
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center">
      
          <form
            className="space-y-2 w-full mb-10"
            onSubmit={(e) => handleOnSubmit(e)}
          >
          <h1 className="inline-block  mb-5 text-center border border-gray-400 rounded transition-all duration-500  text-[#ccc5b9] font-semibold py-3 px-3 lg:px-3">Available generation : {count || 0}</h1>
          <div className="flex flex-col">
            
          <TextField
              variant="filled" 
              color="success"
              multiline
              maxRows={5}
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                name="promptInput"
                placeholder="Text Prompt for Video"
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
              />
            
            
           
            <button
              className=" hero-button min-h-[40px] shadow-sm sm: w-[150px] py-2 inline-flex justify-center font-medium items-center px-4 text-gray-100 sm:rounded-md"
              type="submit"
              disabled={promptInput === ""}
            >
              {showLoadingState && (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {!showLoadingState ? "Generate" : ""}
            </button>
            </div> 
          </form>
          
          <div className="relative flex w-full items-center justify-center">
          {videoPrediction?.output && (
            <div >
              <video controls muted autoPlay
                //src={prediction.output[prediction.output.length - 1]}
                src={videoSrc}
                alt="output"
              />
            </div>
          )}
          </div>
          <p className="py-3 text-sm opacity-50 text-white">video status: {videoPrediction?.status}</p>
         </div>




      <Disclaimer />
     
     
    </div>

  );
}


