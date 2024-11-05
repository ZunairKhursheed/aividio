
import { useRef } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";

const VideoPlayer = () => {
  //const videoRef = useRef();
  return (
    <CloudinaryContext cloud_name="dbospsdwo" secure>
      <div className="herovideo-card">
        <Video
          publicId="talking_ai_hero"
          //publicId="trump_rap_qgtuxz"
          width="600"
          height="400"
          controls
          //innerRef={videoRef}
          controlsList="nodownload"
        />
      </div>
    </CloudinaryContext>
  );
};

export default VideoPlayer;