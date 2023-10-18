import React from "react";
import Logo from "./Logo";
import InputField from "./InputField";
import Footer from "./Footer";

const SignRight = () => {
  return (
    <div className="loginright text-3xl font-bold basis-1/2 bg-white flex flex-col ">
      <Logo  name="sign"/>
      <InputField />
      <div className="flex basis-items-center">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="px-3 text-gray-500">OR</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>
      <Footer/>
    </div>
  );
};

export default SignRight;
