import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(removeUser());
    navigate("/");
  };
  const user = useSelector((store) => store.user);
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-52"
        src="https://www.pngall.com/wp-content/uploads/2018/06/Cinema-PNG.png"
        alt="app logo"
      />
      {user && (
        <div className="flex">
          <img
            className="w-10"
            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-1024.png"
            alt="usericon"
          />
          <button className="font-bold text-white" onClick={handleLogOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
