import Wrapped from "../hoc/Wrapped";

export const Camera = () => {
  return (
  
      <section className=" pt-32 pb-8 relative">
        <h1 className="z-1 md:block hidden text-[120px] absolute font-semibold uppercase tracking-[-5%] left-[80px] -translate-x-[50%] top-2/4 -translate-y-2/4 -rotate-90 text-white/10 ">
          Motion
        </h1>
        <div className="container lg:max-w-[1100px] mx-auto text-white md:block hidden z-50 relative">
      
            <div className="grid grid-cols-3 items-end gap-4 px-32">
              <video
                playsInline
                autoPlay
                muted
                loop
                className=" rounded-2xl object-cover col-span-2"
              >
                <source
                  src={`https://gist.github.com/user-attachments/assets/a68e0895-1220-43b8-93f0-48cbda15adda`}
                  type="video/mp4"
                />
              </video>
              <video
                playsInline
                autoPlay
                muted
                loop
                className="rounded-2xl object-cover h-[200px] aspect-square"
              >
                <source
                  src="https://gist.github.com/user-attachments/assets/88cfbe2c-65ea-41ac-ac42-07dc4c3a3729"
                  type="video/mp4"
                />
              </video>
            </div>
          

        
            <div className="grid grid-cols-2 items-center gap-4 my-4">
              <video
                playsInline
                autoPlay
                muted
                loop
                className="rounded-2xl size-full  object-cover"
              >
                <source
                  src="https://gist.github.com/user-attachments/assets/e174db28-f360-416a-8bd5-36d0196ca163"
                  type="video/mp4"
                />
              </video>
              <video
                playsInline
                autoPlay
                muted
                loop
                className=" rounded-2xl size-full"
              >
                <source
                  src="https://gist.github.com/user-attachments/assets/4f9af994-363c-4688-b9fe-a0a10c25d3ee"
                  type="video/mp4"
                />
              </video>
            </div>
          

        
            <div className="grid grid-cols-2 gap-10 items-center px-10">
              <div className="flex flex-col gap-10 mt-10">
                <h2 className="text-5xl mb-5">
                  Transform Text and Images into Stunning Animation
                </h2>
                <p className="text-lg font-light opacity-[0.7]">
                  Achieve High-Quality Videos with AI Magic.
                </p>
              </div>
              <video
                playsInline
                autoPlay
                muted
                className="rounded-2xl size-full object-cover"
                loop
              >
                <source
                  src="https://gist.github.com/user-attachments/assets/f01d0c5c-8620-4947-82a5-aeff539e6a13"
                  type="video/mp4"
                />
              </video>
            </div>
          
        </div>
        <div className="max-w-full  md:hidden block mx-auto z-50 relative">
        
            <div className="sm:w-3/4 sm:mx-auto mb-10 px-5">
              <h2 className="sm:text-5xl text-4xl mb-10 text-center text-white ">
                Transform Text and Images into Stunning Animation
              </h2>
              <p className="text-lg opacity-[0.7] text-white">
                Achieve High-Quality Videos with AI Magic.
              </p>
            </div>
        
        
            <div className="flex items-center flex-nowrap gap-5 overflow-x-auto px-5">
              <video
                playsInline
                autoPlay
                muted
                loop
                className="col-span-4 rounded-2xl size-full h-[300px] aspect-video object-cover"
              >
                <source
                  src="https://gist.github.com/user-attachments/assets/f01d0c5c-8620-4947-82a5-aeff539e6a13"
                  type="video/mp4"
                />
              </video>
            </div>
        
        </div>
      </section>
    
  );
};
