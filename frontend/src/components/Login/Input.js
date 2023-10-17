import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
const Input = () => {
  const [show, setshow] = useState(false);
  const handleClick = ()=>{
    setshow(!show);
  }
  return (
    <>
      <div className="basis-1/2   justify-center flex flex-col items-center">
        <h2 className="basis-1/4 w-100 w-full flex items-center justify-center">
          Welcome Back to iSend
        </h2>
        <div className="basis-1/2 relative  w-full flex flex-col items-center justify-around ">
          <div class="relative">
            <input
              id="email"
              name="email"
              autoComplete="off"
              type="text"
              className="peer h-10 w-full border-b  focus:border-b-2  border-[#717775]  text-[#717775]  focus:outline-none placeholder-transparent focus:border-[#717775]"
              placeholder="Email address"
            />
            <label
              htmlFor="email"
              className="absolute text-[#717775] left-0 -top-12 text-xl peer-placeholder-shown:text-3xl peer-placeholder-shown:text-[#717775] transition-all peer-placeholder-shown:top-1 peer-focus:-top-12  peer-focus:text-[#717775] peer-focus:text-xs">
              Email address
            </label>
          </div>
          <div class="relative">
            <input
              id="password"
              name="password"
              autoComplete="off"
              type={show?"text":"password"}
              className="peer h-10 w-full border-b  focus:border-b-2  border-[#717775]  text-[#717775]  focus:outline-none placeholder-transparent focus:border-[#717775]"
              placeholder="Email address"
            />
            <label
              htmlFor="password"
              className="absolute text-[#717775] left-0 -top-12 text-xl peer-placeholder-shown:text-3xl peer-placeholder-shown:text-[#717775] transition-all peer-placeholder-shown:top-1 peer-focus:-top-12  peer-focus:text-[#717775] peer-focus:text-xs">
              password
            </label>
            <i className={show?"fa-solid fa-eye-slash  absolute top-0 right-0":"fa-solid fa-eye absolute top-0 right-0"}  style={show?{color:"red"}:{color:"#717775"}}  onClick={handleClick}></i>
          </div>
          <span className="text-xl absolute bottom-0 right-10 ab  text-[#717775] underline cursor-pointer hover:text-[#0000ff]">
            <a href="Ashish"> Forget password?</a>
          </span>
        </div>
        <div className="basis-1/4 w-full flex items-center justify-center">
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white w-64 rounded-full h-16 bg-[#717775]">
            Login
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Input;
