import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  if (!movies) return;
  return (
    <div className="px-4">
      <h1 className="md:text-2xl text-xl pt-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll h-[340px] content-center">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
