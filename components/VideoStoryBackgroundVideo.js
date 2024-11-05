import React from 'react';



import BackgroundVideo from './BackgroundVideo/BackgroundVideo';
//import '../styles/App.css';

function VideoStoryBackgroundVideo() {
  //const videoSource = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  //const videoSource = "https://res.cloudinary.com/dbospsdwo/video/upload/v1724030216/little_prince_and_the_rose_phpw5k.mp4"
  //const videoSource = "https://res.cloudinary.com/dbospsdwo/video/upload/v1724069617/HarryPotter_Demo_g9rpin.mp4"
  const videoSource = "https://res.cloudinary.com/dvdxxna6v/video/upload/v1726973365/little_prince_video_pd8p1o.mp4";
  //const videoSource ="https://res.cloudinary.com/dbospsdwo/video/upload/v1724068251/merida_light_stqswy.mp4"
  const scrollToBottom = () => {
    const bottomEle = document.querySelector("#video-bottom");
    bottomEle.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <div style={{ height: 'flex' }}>
        <BackgroundVideo
          blur={0}
          videoSource={videoSource} >
          <div className='contact_content'>
            <div className='contact_subcontent' >
             
              <button
                className="btn btn-outline-dark"
                onClick={scrollToBottom}>
                Let's do it!
              </button>
              <img
                className="view-image"
                src="https://www.jing.fm/clipimg/detail/139-1394959_panda-cartoon-png-cute-cartoon-panda-bear.png"
                alt="profile" />
            </div>
          </div>
        </BackgroundVideo>
      </div>
     
    </div>
  );
}

export default VideoStoryBackgroundVideo;











