import { useState } from "react";
import Slider from "react-slick";
import { VideoSliderControl } from "./VideoSliderControl";

export const VideoStorySlider = ({
  gallery,
  width,
  height,
  setStoryPrediction,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    customPaging: function (i) {
      return (
        <a className="md:h-10 h-5 aspect-video block">
          <video
            muted
            src={gallery[i]}
            className="w-full aspect-video object-cover"
            alt="output"
          />
        </a>
      );
    },
    dots: true,
    dotsClass:
      "slick-dots slick-thumb md:-bottom-28 -bottom-20 !flex items-center justify-center ",
    infinite: gallery?.length > 3,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };
  console.log({ activeSlide });
  return (
    <>
      {gallery && gallery?.length != 0 && (
        <div className="slider-container  mt-5 max-w-full pb-20 video-slider-container min-h-0 min-w-0">
          <Slider {...settings}>
            {gallery?.map((video_src, index) => (
              <div
                key={"slider_item" + index}
                // className="!flex flex-col gap-2 items-center justify-center"
              >
                <video
                  muted
                  autoPlay
                  src={video_src}
                  className="w-full aspect-video"
                  alt="output"
                  loop
                  width={width}
                  height={height}
                />
                {/* <div
                  onMouseDown={(e) => e.stopPropagation()}
                  onTouchMove={(e) => e.stopPropagation()}
                  className="w-full"
                >

                </div> */}
              </div>
            ))}
          </Slider>
          <VideoSliderControl
            setStoryPrediction={setStoryPrediction}
            index={activeSlide}
          />
        </div>
      )}
    </>
  );
};
