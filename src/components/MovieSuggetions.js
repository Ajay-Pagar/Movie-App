import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

const MovieSuggetions = () => {
  const movieResults = useSelector((store) => store.search.searchMovies);
  // console.log(movieResults);
  if (!movieResults) return null;

  return (
    <div className="flex overflow-x-scroll p-4 md:m-4 md:mt-32 mt-32 bg-black text-white opacity-90">
      <div className="flex">
        {movieResults.map((movie) =>
          movie.poster_path ? (
            <div>
              <h1 className="md:text-xl text-sm font-bold p-2 text-center md:h-[66px] h-[30px]">
                {movie.original_title}
              </h1>
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default MovieSuggetions;
