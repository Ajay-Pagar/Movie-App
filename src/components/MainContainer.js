import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return; // to avoiding next error we are early returning || we can write as well "movies === null"
  const mainMovie = movies[0]; // we get initally error of null beacuse before the store is getting created i.e., nowPlayingMovie are null and we are trying to access first index of null
  //   console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
