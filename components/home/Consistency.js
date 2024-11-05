import Wrapped from "../hoc/Wrapped";

export const Consistency = () => {
  return (
    <section className=" pt-32 pb-8 relative">
      <h1 className="z-1 md:block hidden text-[120px] absolute font-semibold uppercase tracking-[-5%] left-[80px] -translate-x-[50%] top-2/4 -translate-y-2/4 -rotate-90 text-white/10 ">
        Consistency
      </h1>
      <div className="container lg:max-w-[960px] mx-auto text-white md:block hidden z-50 relative">
        
          <div className="grid grid-cols-2 gap-10 items-end lg:max-w-[800px] w-full lg:mx-auto">
            <video
              playsInline
              autoPlay
              muted
              className="rounded-2xl size-full object-cover h-[200px]"
              loop
            >
              <source
                src="https://gist.github.com/user-attachments/assets/6e96677a-ab6f-46ad-b4ac-cce8a184673f"
                type="video/mp4"
              />
            </video>
            <div className="flex flex-col gap-14 mb-14">
              <h2 className="sm:text-5xl  w-full">
                Unleash Your Wizarding World
              </h2>
              <p className="text-lg opacity-[0.7] ">
                Create Harry Potter-Style Fantasy Videos with Perfect Character
                Consistency and Accurate Facial Expressions Using AI
              </p>
            </div>
          </div>
  
        
          <div className="grid grid-cols-7 items-center gap-4 my-4">
            <video
              playsInline
              autoPlay
              muted
              loop
              className="rounded-2xl size-full col-span-3 object-cover"
            >
              <source
                src="https://gist.github.com/user-attachments/assets/1c1cbe1f-b504-415f-9190-e1cbe7ffdf5d"
                type="video/mp4"
              />
            </video>
            <video
              playsInline
              autoPlay
              muted
              loop
              className="col-span-4 rounded-2xl size-full"
            >
              <source
                src="https://gist.github.com/user-attachments/assets/cab44b39-2c72-4552-99c3-2eeb74b9ee1a"
                type="video/mp4"
              />
            </video>
          </div>
      
        
          <div className="grid grid-cols-2 items-start gap-4 px-20">
            <video
              playsInline
              autoPlay
              muted
              loop
              className=" rounded-2xl object-cover "
            >
              <source
                src="https://gist.github.com/user-attachments/assets/7d932443-d627-42c9-b0d8-13d338bf668e"
                type="video/mp4"
              />
            </video>
            <video
              playsInline
              autoPlay
              muted
              loop
              className="rounded-2xl object-cover h-[250px]"
            >
              <source
                src="https://gist.github.com/user-attachments/assets/71371b10-ca24-462e-85e2-ba8820e88efe"
                type="video/mp4"
              />
            </video>
          </div>
    
      </div>
      <div className="max-w-full  md:hidden block mx-auto z-50 relative">
        
          <div className="sm:w-3/4 sm:mx-auto mb-10 px-5">
            <h2 className="sm:text-5xl text-4xl mb-10 text-center text-white ">
              Unleash Your Wizarding World
            </h2>
            <p className="text-lg opacity-[0.7] text-white">
              Create Harry Potter-Style Fantasy Videos with Perfect Character
              Consistency and Accurate Facial Expressions Using AI
            </p>
          </div>
      
        
          <div className="flex items-center flex-nowrap gap-5 overflow-x-auto px-5">
            <video
              playsInline
              autoPlay
              muted
              className="rounded-2xl size-full h-[300px] aspect-video object-cover"
              loop
            >
              <source
                src="https://gist.github.com/user-attachments/assets/6e96677a-ab6f-46ad-b4ac-cce8a184673f"
                type="video/mp4"
              />
            </video>
           
          </div>
      
      </div>
    </section>
  );
};
