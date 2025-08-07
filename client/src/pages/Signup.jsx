import React, { useState } from "react";
import logo from "../assets/logo.png";
import google from "../assets/google.png";
import { useNavigate } from "react-router-dom";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const Signup = () => {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[#fff] flex flex-col  items-center justify-start">
      <div
        className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer "
        onClick={() => navigate("/")}
      >
        <img className="w-[40px] " src={logo} alt="" />
        <h1 className="text-xl ">tikki-store</h1>
      </div>
      <div className="w-[100%] h-[100px] flex flex-col items-center justify-center gap-[10px] ">
        <span className="text-[25px] font-semibold ">Signup Page</span>
        <span>Welcome to tikki-store, place your order today.</span>
      </div>
      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center">
        <form
          action=""
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
        >
          <div className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer">
            <img src={google} alt="" className="w-[20px]" /> Signup with Google
          </div>
          <div className="w-[100%] h-[20px] flex items-center justify-center gap-[10px]">
            <div className="w-[40%] h-[1px] bg-[#96969635] "></div> OR{" "}
            <div className="w-[40%] h-[1px] bg-[#96969635] "></div>
          </div>
          <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative">
            <input
              type="text"
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Username"
              required
            />
            <input
              type="text"
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Email"
              required
            />
            <input
              type={show ? "text" : "password"}
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Password"
              required
            />
            {show && (
              <LuEye
                className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] top-[47.7%]"
                onClick={() => setShow(!show)}
              />
            )}
            {!show && (
              <LuEyeClosed
                className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] top-[47.7%]"
                onClick={() => setShow(!show)}
              />
            )}
            <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold cursor-pointer ">
              Create Account
            </button>
            <p className="flex gap-[10px]">
              Already have an account?{" "}
              <span
                className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer underline"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
