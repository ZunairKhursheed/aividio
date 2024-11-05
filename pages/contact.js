import React from 'react';

import BackgroundVideo from '../components/BackgroundVideo/BackgroundVideo';
//import '../styles/App.css';

function App() {
  //const videoSource = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  const videoSource = "https://res.cloudinary.com/dbospsdwo/video/upload/v1724030216/little_prince_and_the_rose_phpw5k.mp4"
  //const videoSource ="https://res.cloudinary.com/dbospsdwo/video/upload/v1724068251/merida_light_stqswy.mp4"
  const scrollToBottom = () => {
    const bottomEle = document.querySelector("#video-bottom");
    bottomEle.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <div style={{ height: '70vh' }}>
        <BackgroundVideo
          blur={2}
          videoSource={videoSource} >
          <div className='contact_content'>
            <div className='contact_subcontent' >
              <h1>Contact Us</h1>
              <p>Contact us via chat or email at support@aividoo.com.</p>
              <button
                className="btn btn-outline-dark"
                onClick={scrollToBottom}>
                Let's go!
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

export default App;
