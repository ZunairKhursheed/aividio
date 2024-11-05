// pages/pricing.js

import React from 'react';
import { useState } from 'react';
import { useUser } from "@clerk/nextjs";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function Review() {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [productName, setProductName] = useState();
  const [planName, setPlanName] = useState();
  const [productMessage, setProductMessage] = useState();
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  //const session = useSession();

  //const { status, data } = session;
  const { isSignedIn, user } = useUser();
  
  if (!isSignedIn) {return null};
  
  const submitProduct = async(event) => {

      event.preventDefault();
    
          
      const dateSubmitted = new Date();

      //update the database
      const req_body = {
        userEmail,
        userName,
        productName,
        planName,
        productMessage,
        dateSubmitted };
      await fetch('/api/add_review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req_body),
      }).then(() => {
        setIsError(false);
        toast("Your messsage has been submitted!", { type: 'success' });
        
      }).catch((error) => {
        setIsError(true);
        toast("Something is wrong!", { type: 'error' });
        //console.log(error)
      });

    
      setUserEmail("");
      setUserName("");
      setPlanName("");
      setProductName("");
      setProductMessage("");
    
    
  }


  return (

    <section id="contact" className="overflow-hidden py-10 md:py-10 lg:py-10">
    <div className="container">
      <div className="-mx-4 flex flex-wrap">
       
          <div
            className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
            data-wow-delay=".15s
            "
          >
            <h2 className="mb-3 text-2xl font-bold text-white dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Need Help? Contact us via live chat (recommended) or  send us a message.
            </h2>
            <p className="mb-12 text-base font-medium text-body-color">
              Our support team will get back to you ASAP.
            </p>
            <form onSubmit={(event) => submitProduct(event)}>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="userName"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      name="userName"
                      id="userName"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-black placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="uerEmail"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="userEmail"
                      id="userEmail"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-black placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                </div>

              
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="productName"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Product Name
                    </label>
                    
                    <select
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-black placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
            name="productName"
            id="productName"
          > 
            <option value="">Select Product</option>
            <option value="TalkingAvatar">Talking Avatar</option>
            <option value="Text2Tube">Text2Tube</option>
            <option value="Tube2Tube">Tube2Tube</option>
            <option value="RequestNewProduct">Request New Product</option>
            <option value="Other">Other</option>
          </select>
                </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="planName"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Plan Name
                    </label>
                    
                    <select
            value={planName}
            onChange={(e) => setPlanName(e.target.value)}
            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-black placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
            name="planName"
            id="planName"
          >
            <option value="">Select Plan</option>
            <option value="Lite Plan">Lite Plan</option>
            <option value="Pro Plan">Pro Plan</option>
            <option value="Advanced Plan">Advanced Plan</option>
          </select>
                  </div>
                </div>
                

                <div className="w-full px-4">
                  <div className="mb-8">
                    <label
                      htmlFor="productMessage"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Message
                    </label>
                    <textarea
                      
                      id="productMessage"
              name="productMessage"
              rows={10}
              value={productMessage}
              onChange={(e) => setProductMessage(e.target.value)}
                      
                      
                      
                      placeholder="Enter your Message"
                      className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-black placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-4">
                <button
            type="submit"


            className={`hero-button rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp
                ${isGenerating || userEmail === ""
                ? "cursor-not-allowed opacity-50"
                : ""
              }`}

            disabled={isGenerating || userEmail === ""}
          >
            {isGenerating ? "Generating..." : "Submit Your Message"}

          </button>
                
               
                 
                </div>
              </div>
            </form>
          </div>
        </div>
        
      </div>
   
  </section>
    
  )
}
















