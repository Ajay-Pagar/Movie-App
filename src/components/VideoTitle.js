import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[23%] px-16 absolute bg-gradient-to-r from-black">
      <h1 className="text-2xl font-bold text-white">{title}</h1>
      <p className="text-l py-5 w-3/12 text-white">{overview}</p>
      <div>
        <button className="bg-blue-200 text-gray-700 font-bold rounded-lg p-2 px-8 text-lg hover:bg-opacity-70">
          ▶ Play
        </button>
        <button className="mx-2 bg-blue-200 text-gray-700 font-bold rounded-lg p-2 px-8 text-lg hover:bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
