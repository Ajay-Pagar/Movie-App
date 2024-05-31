import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addSearchMovieResults } from "../utils/searchSlice";

const SearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleSearchClick = () => {
    // console.log(searchText.current.value);
    getMovies();
  };
  // console.log(searchMovies);

  const getMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchText.current.value,
      API_OPTIONS
    );
    const json = await response.json();

    // setSearchMovies(json.results);
    dispatch(addSearchMovieResults(json.results));
    searchText.current.value = "";
  };
  // Promise.All -> return the array of promises

  return (
    <div className="pt-[8%] flex justify-center ">
      <form
        className="bg-black w-1/2 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-2 m-4 col-span-9 rounded-xl"
          ref={searchText}
          type="text"
          placeholder={lang[langKey].searchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
