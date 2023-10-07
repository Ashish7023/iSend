import React from "react";
import google from "../assets/search.png";
const Footer = () => {
  return (
    <div className="flex flex-col justify-center	basis-1/4 items-center">
      <div className="flex justify-center items-center my-8 cursor-pointer">
        <img src={google} alt="Logo" width={15} height={15} />
        <p className="text-xl mx-4 text-[#717775]">Sign in With Google</p>
      </div>
      <p className="text-xl my-12 text-[#717775] tracking-wide">
        New iSend ?<a className="text-[#b4c3be] hover:text-blue-600" href="asdfdasdffdsdfv">Create Account</a>
      </p>
    </div>
  );
};

export default Footer;
