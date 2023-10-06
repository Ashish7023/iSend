import React from "react";
import  bg  from "../assets/bg.png";
const LoginLeft = () => {
  return (
    <>
      <div className="loginleft font-bold underline basis-1/2 bg-[#a4c4b5] flex flex-col justify-center items-center">
       <img src={bg} alt="Logo" width={320} height={320}/>
       <h3 className="font-medium text-white text-4xl ">iSend</h3>
       <p className="text-[#696969] text-2xl">Stay connected with your partner, friends, and family.</p>
       <p className="text-[#696969] text-2xl">Chatting Simplified</p>
      </div>
    </>
  );
};

export default LoginLeft;
