import React from "react";
import bottombg from "../../../assets/bottom bg.png";
const Logo = () => {
  return (
    <>
      <div className="basis-1/4 flex justify-center items-center flex-col">
        <h1 className="logo font-[Cursive] text-[#717775] text-4xl">iSend</h1>
         <img src={bottombg} alt="Logo" width={120} height={40}/>
      </div> 
    </>
  );
};

export default Logo;
