import React from "react";
import SearchBar from "./SearchBar";
import MovieSuggetions from "./MovieSuggetions";
import { BG_URL } from "../utils/constant";

const Search = () => {
  return (
    <>
      <div className="fixed w-full -z-10">
        <img
          className="h-screen object-cover w-full"
          src={BG_URL}
          alt="background"
        />
      </div>
      <div>
        <SearchBar />
        <MovieSuggetions />
      </div>
    </>
  );
};

export default Search;
