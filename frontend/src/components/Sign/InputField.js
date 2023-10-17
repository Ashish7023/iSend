/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { motion } from "framer-motion";
const InputField = () => {
  const [show, setshow] = useState(false);
  //   const [name, setname] = useState();
  //   const [email, setemail] = useState();
  //   const [password, setpassword] = useState();
  //   const [confirmPassword, setconfirmPassword] = useState();
  //   const [pic, setpic] = useState();

  const UploadPic = () => {
    document.getElementById("profilePic").click();
    document.getElementById("btn").innerText = "Successfully Upload";
  };
  const UploaedPic = (obj) => {
    var file = obj.target.value;

    console.log(file);
  };
  const handleClick = () => {
    setshow(!show);
  };
  return (
    <>
      <div className="basis-3/5 justify-center flex flex-col items-center">
        <h2 className="basis-1/5 w-100 w-full flex items-center justify-center">
          Welcome to iSend
        </h2>
        <div className="basis-3/5 relative  w-full flex flex-col items-center justify-around ">
          <div className="relative">
            <input
              id="name"
              name="name"
              autoComplete="off"
              type="text"
              className="peer h-10 w-full border-b  focus:border-b-2  border-[#717775]  text-[#717775]  focus:outline-none placeholder-transparent focus:border-[#717775]"
              placeholder="Email address"
            />
            <label
              htmlFor="name"
              className="absolute text-[#717775] left-0 -top-8 text-xl peer-placeholder-shown:text-3xl peer-placeholder-shown:text-[#717775] transition-all peer-placeholder-shown:top-1 peer-focus:-top-6  peer-focus:text-[#717775] peer-focus:text-xs">
              Name
            </label>
          </div>
          <div className="relative mt-8">
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
              className="absolute text-[#717775] left-0 -top-8 text-xl peer-placeholder-shown:text-3xl peer-placeholder-shown:text-[#717775] transition-all peer-placeholder-shown:top-1 peer-focus:-top-6  peer-focus:text-[#717775] peer-focus:text-xs">
              Email
            </label>
          </div>

          <div className="relative mt-8">
            <input
              id="password"
              name="password"
              autoComplete="off"
              type={show ? "text" : "password"}
              className="peer h-10 w-full border-b  focus:border-b-2  border-[#717775]  text-[#717775]  focus:outline-none placeholder-transparent focus:border-[#717775]"
              placeholder="Email address"
            />
            <label
              htmlFor="password"
              className="absolute text-[#717775] left-0 -top-8 text-xl peer-placeholder-shown:text-3xl peer-placeholder-shown:text-[#717775] transition-all peer-placeholder-shown:top-1 peer-focus:-top-6 peer-focus:text-[#717775] peer-focus:text-xs">
              password
            </label>
            <i
              className={
                show
                  ? "fa-solid fa-eye-slash  absolute top-0 right-0"
                  : "fa-solid fa-eye absolute top-0 right-0"
              }
              style={show ? { color: "red" } : { color: "#717775" }}
              onClick={handleClick}></i>
          </div>
          <div className="relative mt-8">
            <input
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="off"
              type={show ? "text" : "password"}
              className="peer h-10 w-full border-b  focus:border-b-2  border-[#717775]  text-[#717775]  focus:outline-none placeholder-transparent focus:border-[#717775]"
              placeholder="Email address"
            />
            <label
              htmlFor="confirmPassword"
              className="absolute text-[#717775] left-0 -top-8 text-xl peer-placeholder-shown:text-3xl peer-placeholder-shown:text-[#717775] transition-all peer-placeholder-shown:top-1 peer-focus:-top-6  peer-focus:text-[#717775] peer-focus:text-xs">
              Confirm password
            </label>
            <i
              className={
                show
                  ? "fa-solid fa-eye-slash  absolute top-0 right-0"
                  : "fa-solid fa-eye absolute top-0 right-0"
              }
              style={show ? { color: "red" } : { color: "#717775" }}
              onClick={handleClick}></i>
          </div>
          <div
            className="reletive mt-8 border-dashed cursor-pointer border-2 border-[#717775] rounded-md w-96 h-12 text-[#717775]"
            onClick={UploadPic}
            id="btn">
            <i
              className="fa-solid fa-cloud-arrow-up"
              style={{ margin: "5px", color: "cyan" }}></i>
            Click to upload a file
            <input
              id="profilePic"
              name="profilePic"
              type="file"
              className=" hidden "
              onClick={UploaedPic}
            />
          </div>
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

export default InputField;
