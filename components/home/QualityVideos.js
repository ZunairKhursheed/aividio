import Wrapped from "../hoc/Wrapped";

export const QualityVideos = () => {
  return (
    <section className=" pt-32 pb-8">
      <div className="container lg:max-w-[1024px] mx-auto text-white md:block hidden">
        
          <div className="grid grid-cols-2 gap-4 items-center ">
            <h2 className="text-5xl">
              Transform Text into Seamless Narrative Videos 
            </h2>
            <video
              playsInline
              autoPlay
              muted
              className="rounded-2xl size-full"
              loop
              preload="none"
            >
              <source
                //src={`https://gist.github.com/user-attachments/assets/3064a6e6-d85a-4ca7-b05e-d294d121d7a5`}
                //src={'https://res.cloudinary.com/dbospsdwo/video/upload/v1724030216/little_prince_and_the_rose_phpw5k.mp4'}
                //src={'https://res.cloudinary.com/dbospsdwo/video/upload/v1724489416/little_prince_video_clo1xf.mp4'}
                src={'https://res.cloudinary.com/dvdxxna6v/video/upload/v1726973365/little_prince_video_pd8p1o.mp4'}
                type="video/mp4"
              />
             
            </video>
          </div>
      
        
          <div className="grid grid-cols-7 items-center gap-4 my-4">
            <video
              playsInline
              autoPlay
              muted
              loop
              className="col-span-4 rounded-2xl size-full"
            >
              <source
                
                //src="https://gist.github.com/user-attachments/assets/3ee2f728-0273-426d-9a30-85d98763c66e"
                //src="https://res.cloudinary.com/dbospsdwo/video/upload/v1724485997/harrypotter_video_dj6b3o.mp4"
                src="https://res.cloudinary.com/dvdxxna6v/video/upload/v1726973523/a_thousand_year_lbzfep.mp4"
                type="video/mp4"
              />
            </video>
            <video
              playsInline
              autoPlay
              muted
              loop
              className="rounded-2xl size-full col-span-3 object-cover"
            >
              <source
                //src="https://gist.github.com/user-attachments/assets/26a487ed-dd48-4723-8861-83fdd7d10654"
                //src='https://res.cloudinary.com/dbospsdwo/video/upload/v1724489894/merida_story_fl83ln.mp4'
                src="https://res.cloudinary.com/dvdxxna6v/video/upload/v1726973389/merida_story_vpx3sv.mp4"
                //src={'https://res.cloudinary.com/dbospsdwo/video/upload/v1724487297/merida_story_ymbnwr.mp4'}
                type="video/mp4"
              />
            </video>
          </div>
        
      </div>
      <div className="max-w-full  md:hidden block mx-auto ">
        
          <h2 className="text-4xl mb-10 text-center text-white sm:w-2/4 sm:mx-auto px-5">
            Transform Text into Seamless Narrative Videos
          </h2>
        
        
          <div className="flex items-center flex-nowrap gap-5 overflow-x-auto px-5">
            <video
              playsInline
              autoPlay
              muted
              className="rounded-2xl size-full h-[300px] aspect-video object-cover"
              loop
            >
              <source
                src={'https://res.cloudinary.com/dbospsdwo/video/upload/v1724030216/little_prince_and_the_rose_phpw5k.mp4'}
                type="video/mp4"
              />
            </video>
           
           
          </div>
      </div>
    </section>
  );
};
