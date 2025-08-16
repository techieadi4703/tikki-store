import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { MdOutlineSearch } from "react-icons/md";
import { RiUser5Fill } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineSearchOff } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { MdPermPhoneMsg } from "react-icons/md";
import { userDataContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../context/AuthContext.jsx";
import axios from "axios";

const Navbar = () => {
  let { getCurrentUser, userData } = useContext(userDataContext);
  let { serverURL } = useContext(authDataContext);
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  let navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const result = await axios.get(serverURL + "/api/auth/logout", {
        withCredentials: true,
      });
      console.log("RESULT", result.data);
      getCurrentUser();
      navigate("/login");
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };
  return (
    <div className="w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black">
      <div className="w-[50%] sm:w-[35%] flex items-center justify-start gap-[10px]">
        <img src={logo} alt="" className="w-[30px]" />
        <h1 className="text-[25px]  text-black font-sans">tikki-store</h1>
      </div>

      <div className="w-[50%] hidden md:flex">
        <ul className="flex items-center md:justify-center gap-[10px] md:gap-[19px] text-white">
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl ">
            HOME
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl ">
            COLLECTIONS
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl ">
            ABOUT
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl ">
            CONTACT
          </li>
        </ul>
      </div>

      <div className="w-[200px] md:w-[30%] flex items-center justify-end gap-[20px]">
        {!showSearch ? (
          <MdOutlineSearch
            className="cursor-pointer w-[30px] h-[30px] text-black"
            onClick={() => setShowSearch(!showSearch)}
          />
        ) : (
          <MdOutlineSearchOff
            className="cursor-pointer w-[30px] h-[30px] text-black"
            onClick={() => setShowSearch(!showSearch)}
          />
        )}
        {!userData ? (
          <RiUser5Fill
            className="cursor-pointer ml-1 w-[30px] h-[30px] text-black"
            onClick={() => setShowProfile(!showProfile)}
          />
        ) : (
          <div
            className="cursor-pointer ml-1 w-[30px] h-[30px] bg-[#080808] text-white rounded-full flex items-center justify-center"
            onClick={() => setShowProfile(!showProfile)}
          >
            {userData.name.slice(0, 1)}
          </div>
        )}
        <TiShoppingCart className="cursor-pointer w-[30px] h-[30px] text-black hidden md:block" />
        <p className="absolute w-[18px] h-[18px] items-center justify-center bg-black px-[5px] py-[2px] text-white rounded-full text-[9px] top-[10px] right-[20px] hidden md:block">
          10
        </p>
      </div>
      {showSearch && (
        <div
          className={`w-[100%] h-[65px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center
      transform transition-all duration-500 ease-out
      ${
        showSearch ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
        >
          <input
            type="text"
            className="w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-white text-[18px]"
            placeholder="Search Items Here"
          />
        </div>
      )}
      {showProfile && (
        <div className="absolute top-[110%] right-[4%] border border-[#aaa9a9] w-[220px] bg-[#000000d7] shadow-md z-10 rounded-[10px]">
          <ul className="w-[100%] h-[100%] flex text-[17px] py-[10px] text-white flex-col justify-around items-start ">
            <li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px cursor-pointer">
              Orders
            </li>
            <li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px cursor-pointer">
              About
            </li>
            {userData && (
              <li
                className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px cursor-pointer"
                onClick={() => {
                  handleLogout();
                  setShowProfile(false);
                }}
              >
                Logout
              </li>
            )}
            {!userData && (
              <li
                className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px cursor-pointer"
                onClick={() => {
                  navigate("/login");
                  setShowProfile(false);
                }}
              >
                Login
              </li>
            )}
          </ul>
        </div>
      )}

      <div className="w-[100vw] h-[90px] justify-between items-center flex px-[20px] text-[14px] fixed bottom-0 left-0 bg-[#191818] md:hidden">
        <button className="text-white flex flex-col items-center justify-center gap-[2px]"><AiFillHome className="w-[30px] h-[30px] "/>Home</button>
        <button className="text-white flex flex-col items-center justify-center gap-[2px]"><PiDotsThreeOutlineFill className="w-[30px] h-[30px] "/>Collections</button>
        <button className="text-white flex flex-col items-center justify-center gap-[2px]"><MdPermPhoneMsg className="w-[30px] h-[30px] "/>Contact</button>
        <button className="text-white flex flex-col items-center justify-center gap-[2px]"><TiShoppingCart className="w-[30px] h-[30px] "/>Cart</button>
      </div>

    </div>
  );
};

export default Navbar;
