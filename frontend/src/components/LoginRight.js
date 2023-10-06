import React from "react";
import Logo from "./Logo";
import Input from "./Input";
const LoginRight = () => {
  return (
    <div className="loginright text-3xl font-bold basis-1/2 bg-white flex flex-col ">
      <Logo />
      <Input />
      <hr></hr>
      <div className="basis-1/4 "></div>
    </div>
  );
};

export default LoginRight;
