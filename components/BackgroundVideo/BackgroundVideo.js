import React from 'react';

const BackgroundVideo = ({ videoSource, children, blur }) => {
  return (
    <>
      <div className='contact_container'>
        <video
          style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
          autoPlay="autoplay"
          loop="loop"
          muted
          id="video-id"
          className='contact_video' >
          {/* TODO make it accept multiple media types */}
          <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
        {children}
      </div>
      <span id="video-bottom"></span>
    </>
  )
}

export default BackgroundVideo







