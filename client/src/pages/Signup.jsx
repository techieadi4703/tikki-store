import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import google from "../assets/google.png";
import { useNavigate } from "react-router-dom";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import axios from "axios";
import { authDataContext } from "../context/AuthContext.jsx";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/Firebase.js";
import { userDataContext } from "../context/UserContext.jsx";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {serverURL} = useContext(authDataContext);
  const {getCurrentUser} = useContext(userDataContext);
  let navigate = useNavigate();

  const handleSignup=async(e)=>{
    e.preventDefault();
    try {
      const result=await axios.post(`${serverURL}/api/auth/signup`, {
        name,
        email,
        password,
      },{withCredentials: true});
      console.log("SIGNUP_RESULT", result.data);
      getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log("Signup Error FE", error);
    }
  }

  const googleSignup=async(e)=>{
    e.preventDefault();
    try {
      const response= await signInWithPopup(auth, provider);
      const user= response.user;
      const name=user.displayName;
      const email=user.email;
      
      const result=await axios.post(`${serverURL}/api/auth/googleLogin`, {
        name,
        email,
      },{withCredentials: true});
      console.log("GOOGLE_SIGNUP_RESULT", result.data);
      getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log("ERROR",error);
    }
  }
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
          onSubmit={handleSignup}
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
        >
          <div className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer" onClick={googleSignup}>
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
              onChange={(e)=>{
                setName(e.target.value);
              }}
              value={name}
            />
            <input
              type="text"
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Email"
              required
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
              value={email}
            />
            <input
              type={show ? "text" : "password"}
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Password"
              required
              onChange={(e)=>{
                setPassword(e.target.value);
              }}
              value={password}
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
