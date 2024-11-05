import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { isImage, validateImgSize } from "../utils/fileValidation";
//import FAQ from './FAQ';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubscriptionContext from "../context/SubscriptionContext";
import Disclaimer from "./Disclaimer";
import StoryBoardFAQ from "./StoryBoardFAQ";
//import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { VideoStorySlider } from "./sliders/VideoStorySlider";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Dashboard() {
  const [age, setAge] = useState("");
  const [events, setEvents] = useState([]);
  const [prediction, setPrediction] = useState(null);
  const [storyPrediction, setStoryPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [imageSrc, setImageSrc] = useState();

  const [image, setImage] = useState();

  const [imageError, setImageError] = useState();

  const [videoUrl, setVideoUrl] = useState("");
  const [usage, setUsage] = useState("");

  const [characters, setCharacters] = useState("");
  const [idea, setIdea] = useState("");
  const [numPanels, setNumPanels] = useState("");
  const [storyDescription, setStoryDescription] = useState("");

  const [style, setStyle] = useState("");
  const [width, setWidth] = useState(1280);
  const [height, setHeight] = useState(720);
  const [aspectRatio, setAspectRatio] = useState("");
  const [numIds, setNumIds] = useState("");

  const [isOverUsageLimit, setIsOverUsageLimit] = useState(true);

  const [isRefImage, setIsRefImage] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [effect, setEffect] = useState(false);
  const [startDate, setStartDate] = useState("");

  const { isSignedIn, user } = useUser();

  // updated code subscription check

  const [count, setCount] = useState(0);

  const { subscriptionData, decreaseStoryBoardAndImage2VideoCount } =
    useContext(SubscriptionContext);

  console.log("here is sub data", subscriptionData);

  useEffect(() => {
    setCount(subscriptionData?.metadata?.storyBoardCount);
    // fetchUserUsage();
  }, [subscriptionData?.metadata?.storyBoardCount]);

  const handleImageChange = (e) => {
    setImageError("");
    const img = e.target.files[0];
    // if no image selected
    if (!img) {
      return;
    }

    // check if image
    const result = isImage(img.name);
    if (!result) {
      const error = "File type should be a jpg/jpeg image";
      toast(error, { type: "error" });
      setImageError(error);
      return;
    }
    const isImageLarge = validateImgSize(img);
    if (isImageLarge) {
      const error = "File must be less or equal to 1MB";
      toast(error, { type: "error" });
      setImageError(error);
      return;
    }
    const reader = new FileReader();
    // converts to BASE 64
    reader.readAsDataURL(img);
    reader.addEventListener("load", () => {
      setImageSrc(reader.result);
      setImage(img);
      setIsRefImage(true);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    const res = await fetch("/api/returnStoryDescription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        characters,
        idea,
        numPanels,
      }),
    });
    setIsGenerating(false);
    const data = await res.json();
    setStoryDescription(data.storyDescription.trim());
  };

  //handle form submit to create avatar and create record in the database
  const handleOnSubmit = async (event) => {
    event.preventDefault();

    // if (subscriptionData?.metadata?.storyBoardCount == '0') {
    //   window.alert('No attempt left , Please purchase a plan');
    //   return;
    // }

    const form = event.currentTarget;

    if (isRefImage) {
      const image_fileInput = Array.from(form.elements).find(
        ({ name }) => name === "image"
      );

      const image_formData = new FormData();

      for (const file of image_fileInput.files) {
        image_formData.append("file", file);
      }

      image_formData.append("upload_preset", "app_users");

      const image_data = await fetch(
        "https://api.cloudinary.com/v1_1/dvdxxna6v/image/upload",
        {
          method: "POST",
          body: image_formData,
        }
      ).then((r) => r.json());

      const image_url = image_data.secure_url;

      if (aspectRatio == "16:9") {
        var body = {
          num_ids: 3,
          ref_image: image_url,
          style_name: style,
          story_description: storyDescription,
          character_description: characters,
          aspect_ratio: aspectRatio,
          video_width: 1280,
          video_height: 720,
        };
      } else {
        var body = {
          num_ids: 3,
          ref_image: image_url,
          style_name: style,
          story_description: storyDescription,
          character_description: characters,
          aspect_ratio: aspectRatio,
          video_width: 608,
          video_height: 1080,
        };
      }
    } else {
      // post request to prediction api to create talking avatar
      if (aspectRatio == "16:9") {
        var body = {
          num_ids: 3,
          style_name: style,
          story_description: storyDescription,
          character_description: characters,
          aspect_ratio: aspectRatio,
          video_width: 1280,
          video_height: 720,
        };
      } else {
        var body = {
          num_ids: 3,
          style_name: style,
          story_description: storyDescription,
          character_description: characters,
          aspect_ratio: aspectRatio,
          video_width: 608,
          video_height: 1080,
        };
      }
    }

    const story_response = await fetch("/api/video_story", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    let storyPrediction = await story_response.json();
    if (story_response.status !== 201) {
      setError(storyPrediction.detail);
      setStoryPrediction(storyPrediction);
      return;
    }
    setStoryPrediction(storyPrediction);

    while (
      storyPrediction.status !== "succeeded" &&
      storyPrediction.status !== "failed"
    ) {
      await sleep(1000);
      const story_response = await fetch(
        "/api/video_story/" + storyPrediction.id
      );
      storyPrediction = await story_response.json();
      if (story_response.status !== 200) {
        setError(storyPrediction.detail);
        return;
      }
      console.log({ storyPrediction });
      setStoryPrediction(storyPrediction);
    }
    if (storyPrediction.status == "succeeded") {
      setStoryPrediction(storyPrediction);
      const updatedCount = await decreaseStoryBoardAndImage2VideoCount(
        user?.primaryEmailAddress?.emailAddress
      );
      setCount(updatedCount?.metadata?.storyBoardCount);
    }

    //const story_url = storyPrediction?.output;
    //setImageSrc(data.secure_url);

    // post request to prediction api to create talking avatar

    // post request to creation api to create creation record in the database

    setImage("");
  };

  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-y-12 md:grid-cols-1 md:gap-x-12 ">
        <div className="">
          <form onSubmit={(e) => handleOnSubmit(e)}>
            <h1 className="inline-block  mb-5 text-center border border-gray-400 rounded transition-all duration-500  text-[#ccc5b9] font-semibold py-3 px-3 lg:px-3">
              Available generation : {count || 0}
            </h1>

            <div className="flex flex-col">
              <div className="flex mt-10 items-center space-x-3">
                <div
                  style={{ backgroundColor: "#5BBCFF" }}
                  className="rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm"
                >
                  {1}
                </div>
                <p className="text-left font-medium flex align-center">
                  {"Characters"}
                </p>
              </div>
              <textarea
                type="text"
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                rows={3}
                name="characters"
                placeholder="Bella, a girl with a slender frame, long auburn hair, and piercing green eyes"
                id="characters"
                value={characters}
                onChange={(e) => setCharacters(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <div className="flex mt-10 items-center space-x-3">
                <div
                  style={{ backgroundColor: "#5BBCFF" }}
                  className="rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm"
                >
                  {2}
                </div>
                <p className="text-left font-medium flex align-center">
                  {"Story Idea"}
                </p>
              </div>

              <input
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                placeholder="Idea"
                type="text"
                name="idea"
                id="idea"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex mt-10 items-center space-x-3">
                <div
                  style={{ backgroundColor: "#5BBCFF" }}
                  className="rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm"
                >
                  {3}
                </div>
                <p className="text-left font-medium flex align-center">
                  {"Number of  Panels"}
                </p>
              </div>

              <select
                value={numPanels}
                onChange={(e) => setNumPanels(e.target.value)}
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                name="numPanels"
                id="numPanels"
              >
                <option value="default">Select Number of Panels</option>
                <option value="four">four</option>
                <option value="five">five</option>
                <option value="six">six</option>
                <option value="seven">seven</option>
                <option value="eight">eight</option>
                <option value="nine">nine</option>
              </select>
            </div>

            <button
              className="hero-button min-h-[40px] shadow-sm sm: w-[250px] py-2 inline-flex justify-center font-medium items-center px-4 text-gray-100 sm:rounded-md"
              onClick={handleSubmit}
              type="submit"
              disabled={
                isGenerating ||
                characters === "" ||
                idea === "" ||
                numPanels === ""
              }
            >
              {isGenerating ? "Generating..." : "Generate Story Description"}
            </button>

            <div className="flex flex-col">
              <div className="flex mt-10 items-center space-x-3">
                <div
                  style={{ backgroundColor: "#5BBCFF" }}
                  className="rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm"
                >
                  {4}
                </div>
                <p className="text-left font-medium flex align-center">
                  {"Story Description"}
                </p>
              </div>

              <textarea
                rows={
                  storyDescription === ""
                    ? 7
                    : storyDescription.split("\n").length + 12
                }
                name="output"
                value={storyDescription}
                onChange={(e) => setStoryDescription(e.target.value)}
                //disabled={storyDescription === ""}
                id="output"
                placeholder="AI Generated Story Description"
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
              />
            </div>

            <div className="flex flex-col ">
              <div className="flex mt-10 items-center space-x-3">
                <div
                  style={{ backgroundColor: "#5BBCFF" }}
                  className="rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm"
                >
                  {5}
                </div>
                <p className="text-left font-medium flex align-center">
                  {"Reference Image (Optional)"}
                </p>
              </div>

              <label className="px-2 py-1 text-sm text-white">
                Use Ref Image:{" "}
                <input
                  type="checkbox"
                  name="isRefImage"
                  defaultChecked={false}
                  color="success"
                />
              </label>
            </div>
            <div className="flex flex-col ">
              <label className="px-2 py-1 text-sm text-white" htmlFor="image">
                Reference Image (Optional) {"   "}
                {"    "}
                <span className="text-sm text-red-500">(jpg/jpeg) </span>
                <span className="text-sm text-red-400">*</span>
              </label>
              <input
                type="file"
                className="hero-button flex rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-white-500 my-2 text-white-900"
                name="image"
                placeholder="Select Picture"
                onChange={handleImageChange}
              />

              <img
                src={imageSrc}
                className="basis-1/2 h-auto w-48 my-5"
                accept="image/*"
              />
            </div>

            <div>
              <div className="flex mt-10 items-center space-x-3">
                <div
                  style={{ backgroundColor: "#5BBCFF" }}
                  className="rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm"
                >
                  {6}
                </div>
                <p className="text-left font-medium flex align-center">
                  {"Options"}
                </p>
              </div>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 150,
                  bgcolor: "#5BBCFF",
                  borderRadius: 1,
                }}
              >
                <InputLabel id="demo-simple-select-required-label">
                  Image Style
                </InputLabel>
                <Select
                  name="style"
                  label="Image Style"
                  onChange={(e) => setStyle(e.target.value)}
                >
                  <MenuItem value="Japanese Anime">
                    <em>Japanese Anime</em>
                  </MenuItem>
                  <MenuItem value="Digital/Oil Painting">
                    Digital/Oil Painting
                  </MenuItem>
                  <MenuItem value="Pixar/Disney Character">
                    Pixar/Disney Character
                  </MenuItem>
                  <MenuItem value="Cinematic">Cinematic</MenuItem>
                  <MenuItem value="Photographic">Photographic</MenuItem>
                  <MenuItem value="Comic book">Comic book</MenuItem>
                  <MenuItem value="Line art">Line art</MenuItem>
                  <MenuItem value="Black and White Film Noir">
                    Black and White Film Noir
                  </MenuItem>
                  <MenuItem value="Isometric Rooms">Isometric Rooms</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                sx={{
                  m: 1,
                  minWidth: 150,
                  bgcolor: "#5BBCFF",
                  borderRadius: 1,
                }}
              >
                <InputLabel id="demo-simple-select-required-label">
                  Aspect Ratio
                </InputLabel>
                <Select
                  name="aspectRatio"
                  label="Aspect Ratio"
                  onChange={(e) => setAspectRatio(e.target.value)}
                >
                  <MenuItem value="16:9">
                    <em>16:9</em>
                  </MenuItem>
                  <MenuItem value="9:16">9:16</MenuItem>
                </Select>
              </FormControl>
            </div>

            {count == 0 ? (
              <Link href="/pricing">
                <button className="hero-button text-white font-bold py-2 px-4 rounded">
                  Buy a Plan
                </button>
              </Link>
            ) : (
              <button
                className={`hero-button flex w-full text-white font-bold py-2 px-4 rounded`}
                type="submit"
                disabled={
                  isGenerating ||
                  characters === "" ||
                  storyDescription === "" ||
                  style === "" ||
                  aspectRatio === ""
                }
              >
                {isGenerating ? "Generating..." : "Generate Video Story"}
              </button>
            )}
            <button
              className={`hero-button flex w-full text-white font-bold py-2 px-4 rounded`}
              type="submit"
              disabled={
                isGenerating ||
                characters === "" ||
                storyDescription === "" ||
                style === "" ||
                aspectRatio === ""
              }
            >
              {isGenerating ? "Generating..." : "Generate Video Story"}
            </button>
          </form>
        </div>

        <div className="">
          <div className="flex flex-col">
            <label htmlFor="output" className="sr-only">
              Output
            </label>

            <p className="py-3 text-sm opacity-50">
              Generation Status: {storyPrediction?.status}
            </p>

            {storyPrediction?.output && (
              <video
                controls
                muted
                autoPlay
                src={storyPrediction.output.final_video_story}
                width={width}
                height={height}
                alt="output"
              />
            )}
            <VideoStorySlider
              gallery={storyPrediction?.output?.individual_videos}
              setStoryPrediction={setStoryPrediction}
              width={width}
              height={height}
            />
          </div>
        </div>
      </div>

      <Disclaimer />

      <StoryBoardFAQ />
    </div>
  );
}
