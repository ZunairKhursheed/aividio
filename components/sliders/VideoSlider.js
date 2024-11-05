import { Loader } from "../../components/layout/Loader";
import { useEffect, useState } from "react";

export const VideoSlider = ({ left_videos, right_videos }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [nextIndex, setNextIndex] = useState(null);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextIndex((next) => {
        if (next == null) {
          setIsLoading(false);
          return 0;
        }
        setCurrentIndex(next);
        setPrevIndex((prev) => {
          if (prev != null || next == 1) {
            return (next - 1 + left_videos.length) % left_videos.length;
          }
          return null;
        });
        return (next + 1) % left_videos.length;
      });
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex gap-2">
          <div
            className="relative w-full h-[500px] flex items-center  overflow-hidden"
            style={{
              perspective: "1100px",
              opacity: 1,
              perspectiveOrigin: "50%",
              transform: "none",
            }}
          >
            {left_videos.map((video, index) => {
              return (
                <div
                  style={{ animationTimingFunction: "linear" }}
                  className={`${
                    index == currentIndex ||
                    index == nextIndex ||
                    index == prevIndex
                      ? "animate-video_slider_left  right-0"
                      : "opacity-0"
                  }  absolute top-0  w-[1600px] h-[900px]  shadow-sm`}
                  key={index + "908"}
                >
                  <video
                    loop
                    // poster={video?.poster}
                    className="absolute duration-300 hover:scale-110  rounded-[50px] inset-0 size-full"
                    playsInline
                    autoPlay
                    muted
                  >
                    <source src={video?.src} type="video/mp4" />
                  </video>
                </div>
              );
            })}
          </div>

          {/* right videos  */}
          <div
            className="relative w-full h-[500px] flex items-center  overflow-hidden"
            style={{
              perspective: "1100px",
              opacity: 1,
              perspectiveOrigin: "50%",
              transform: "none",
            }}
          >
            {right_videos.map((video, index) => {
              return (
                <div
                  className={`${
                    index == currentIndex ||
                    index == nextIndex ||
                    index == prevIndex
                      ? "animate-video_slider_right  left-0"
                      : "opacity-0"
                  }  absolute top-0  w-[1600px] h-[900px]  shadow-sm`}
                  key={index + "908"}
                >
                  <video
                    loop
                    // poster={video?.poster}
                    className="absolute duration-300 hover:scale-110  rounded-[50px] inset-0 size-full"
                    playsInline
                    autoPlay
                    muted
                  >
                    <source src={video?.src} type="video/mp4" />
                  </video>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
