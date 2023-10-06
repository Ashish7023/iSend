import React from "react";

const Input = () => {
  return (
    <>
      <div className="basis-1/2  flex flex-col items-center">
        <h2 className="basis-1/5 w-100 w-full flex items-center justify-center">
          Welcome to iSend
        </h2>
        <div className="basis-3/5  w-full flex flex-col items-center justify-around ">
          <div class="relative">
            <input
              type="text"
              id="username"
              class="border-b py-1 focus:outline-none focus:border-[#717775] focus:border-b-2 transition-colors peer"
              autocomplete="off"
            />
            <label
              for="username"
              class="absolute left-0 top-1 text-[#717775] text-l cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#717775] transition-all">
              User name or Email
            </label>
          </div>
          <div class="relative">
            <input
              type="text"
              id="username"
              class="border-b py-1 focus:outline-none focus:border-[#717775] focus:border-b-2 transition-colors peer"
              autocomplete="off"
            />
            <label
              for="username"
              class="absolute left-0 top-1text-l text-[#717775] cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#717775] transition-all">
              Password
            </label>
          </div>
          <span className="text-xl relative left-0"> Forget password?</span>
        </div>
        <div className="basis-1/5 w-full flex items-center justify-center" >
        <button type="button" className="text-white w-64 rounded-full h-16 bg-[#717775]">Sign in</button>
        </div>
      </div>
    </>
  );
};

export default Input;
