import React from "react";

function Navbar() {
  return (
    <div className="flex flex-wrap items-center justify-between px-4 py-2 ">
      {/* Left Logo */}
      <div className="flex items-center gap-2">
        <img src="/logos.svg" alt="" />
        <p className="text-2xl font-semibold">JobHuntly</p>
      </div>

      {/* Middle Nav Links */}
      <div className="hidden md:flex gap-4 text-slate-600  font-serif">
        <p className="hover:text-blue-500 cursor-pointer">Find Jobs</p>
        <p className="hover:text-blue-500 cursor-pointer">Browse Companies</p>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-4 mt-2 md:mt-0">
        <p className="text-blue-700 font-serif hover:bg-blue-500 hover:text-white px-3 py-1 rounded-md cursor-pointer">
          Login
        </p>
        <button className="border w-[100px] h-[40px] rounded-[7px] text-white bg-blue-700 border-blue-700 transition-all duration-200 transform hover:scale-105 hover:shadow-md">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
