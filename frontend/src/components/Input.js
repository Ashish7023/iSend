import React from "react";
import { motion } from "framer-motion";
const Input = () => {
  return (
    <>
      <div className="basis-1/2   justify-center flex flex-col items-center">
        <h2 className="basis-1/4 w-100 w-full flex items-center justify-center">
          Welcome to iSend
        </h2>
        <div className="basis-1/2 relative  w-full flex flex-col items-center justify-around ">
          <div className="relative">
            <input
              type="text"
              id="username"
              className="border-b py-1 focus:outline-none focus:border-[#717775] focus:border-b-2 transition-colors peer"
              autoComplete="off"
            />
            <label
              htmlFor="username"
              className="absolute left-0 top-1 text-[#717775] text-l cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#717775] transition-all">
              User name or Email
            </label>
          </div>
          <div className="relative my-">
            <input
              type="text"
              id="password"
              className="border-b py-1 focus:outline-none focus:border-[#717775] focus:border-b-2 transition-colors peer"
              autoComplete="off"
            />
            <label
              htmlFor="username"
              className="absolute left-0 top-1text-l text-[#717775] cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#717775] transition-all">
              Password
            </label>
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
            Sign in
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Input;
