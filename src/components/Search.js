import React from "react";
import SearchBar from "./SearchBar";
import MovieSuggetions from "./MovieSuggetions";
import { BG_URL } from "../utils/constant";

const Search = () => {
  return (
    <div>
      <div className="absolute w-full -z-10">
        <img className="h-screen w-full" src={BG_URL} alt="background" />
      </div>
      <SearchBar />
      <MovieSuggetions />
    </div>
  );
};

export default Search;
