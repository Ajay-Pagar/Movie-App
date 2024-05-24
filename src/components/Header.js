import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { APP_LOGO, USER_ICON } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(removeUser());
    navigate("/");
  };
  const user = useSelector((store) => store.user);

  return (
    <div className="absolute w-full px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-52" src={APP_LOGO} alt="app logo" />
      {user && (
        <div className="flex">
          <img className="w-10" src={USER_ICON} alt="user icon" />
          <button className="font-bold text-white" onClick={handleLogOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
