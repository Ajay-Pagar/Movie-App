import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { APP_LOGO, SUPPORTED_LANGUAGES, USER_ICON } from "../utils/constant";
import { toggleSearchView } from "../utils/searchSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(removeUser());
    navigate("/");
  };
  const user = useSelector((store) => store.user);

  // To hide language tab from header
  const showSearch = useSelector((store) => store.search.showSearch);

  const handleSearchClick = () => {
    dispatch(toggleSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed w-full px-8 py-4 bg-gradient-to-b from-black z-50 flex justify-between">
      <img className="w-52" src={APP_LOGO} alt="app logo" />
      {user && (
        <div className="flex">
          {showSearch && (
            <select
              className="mr-4 p-2 rounded-lg bg-transparent text-white border border-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="bg-gray-600"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-4 mr-2 bg-red-700 rounded-xl text-white"
            onClick={handleSearchClick}
          >
            {showSearch ? "Home" : "Search"}
          </button>
          <img className="w-10 mr-2" src={USER_ICON} alt="user icon" />
          <button
            className="font-bold text-white border border-white px-2 rounded-xl"
            onClick={handleLogOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
