import React, { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [showFullDescription, setFullDescription] = useState(false);

  const showFullDescriptionHandler = () => {
    setFullDescription(!showFullDescription);
  };

  const description = showFullDescription ? overview : overview.slice(0, 160);

  return (
    <div className="md:w-screen md:h-screen md:pt-[18%] pt-[60%] px-10 md:px-16 absolute bg-gradient-to-r from-black">
      <h1 className="text-xl font-bold text-white md:text-3xl">{title}</h1>
      <p className="text-sm pt-60 md:pt-5 md:w-3/12 text-white md:text-lg mb-4">
        {description}
      </p>
      {/* <span className="text-white mb-4" onClick={showFullDescriptionHandler}>
        Read {showFullDescription ? "Less" : "More"}
      </span> */}
      <div>
        <button className="bg-blue-200 text-gray-700 font-bold rounded-lg p-2 md:px-8 px-2 md:text-lg text-sm hover:bg-opacity-70">
          ▶ Play
        </button>
        <button className="mx-2 bg-blue-200 text-gray-700 font-bold rounded-lg p-2 md:px-8 px-2 md:text-lg text-sm hover:bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
