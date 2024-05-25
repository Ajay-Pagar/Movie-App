import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="md:w-screen md:h-screen pt-[18%] md:px-16 absolute bg-gradient-to-r from-black">
      <h1 className="text-xl font-bold text-white md:text-3xl">{title}</h1>
      <p className="text-sm py-5 w-3/12 text-white md:text-lg">{overview}</p>
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
