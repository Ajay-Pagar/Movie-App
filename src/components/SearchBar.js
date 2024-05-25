import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[5%] flex justify-center ">
      <form className="bg-black w-1/2 grid grid-cols-12 rounded-lg">
        <input
          className="p-2 m-4 col-span-9 rounded-xl"
          type="text"
          placeholder={lang[langKey].searchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
