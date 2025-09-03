import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import axios from "axios";
import { AuthDataContext } from "../context/AuthContext";
const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { serverURL } = useContext(AuthDataContext);
  //   const {getCurrentUser} = useContext(userDataContext);
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      let resu = await axios.post(
        `${serverURL}/api/auth/adminLogin`,
        {
          email,
          password,
        },
        { credentials: "true" }
      );
      console.log(resu.data,"ADMIN_LOGIN_RESULT");
      if (resu.data) {
        console.log("ADMIN_LOGIN_RESULT", resu.data);
      }
    } catch (error) {
      console.log("ADMIN_LOGIN_ERROR", error);
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[#fff] flex flex-col  items-center justify-start">
      <div className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer ">
        <img className="w-[40px] " src={logo} alt="" />
        <h1 className="text-xl ">tikki-store</h1>
      </div>
      <div className="w-[100%] h-[100px] flex flex-col items-center justify-center gap-[10px] ">
        <span className="text-[25px] font-semibold ">Admin Login Page</span>
        <span>Login to our adminPanel.</span>
      </div>
      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center">
        <form
          action=""
          onSubmit={handleAdminLogin}
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
        >
          <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative">
            <input
              type="text"
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <input
              type={show ? "text" : "password"}
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            {show && (
              <LuEye
                className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] top-[45%]"
                onClick={() => setShow(!show)}
              />
            )}
            {!show && (
              <LuEyeClosed
                className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] top-[45%]"
                onClick={() => setShow(!show)}
              />
            )}
            <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold cursor-pointer ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
