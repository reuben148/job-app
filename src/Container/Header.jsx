import React from "react";
import logo from "../assets/image.svg";
import logos from "../assets/line.svg";

function Header() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-10 py-8">
   
      <div className="text-center md:text-left py-6 md:py-10 md:mr-[10px]">
        <p className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight">
          <span className="text-black">Discover more than</span>
          <br />
          <span className="text-blue-500">5000+ Jobs</span>
        </p>
        <p className="text-base md:text-xl text-slate-600 font-serif mt-4">
          Great platform for job seekers passionate about startups and{" "}
          <br className="hidden md:block" />
          seeking new career heights.
        </p>
        <img
          src={logos}
          alt="line"
          className="mx-auto md:mx-0 py-5 px-6 md:px-10 w-[80%] md:w-auto"
        />
      </div>

  
      <div className="w-full md:w-[50%] flex justify-center md:justify-end">
        <img
          src={logo}
          alt="Logo"
          className="w-[80%] md:w-[500px] max-w-[500px] h-auto py-4"
        />
      </div>
    </div>
  );
}

export default Header;
