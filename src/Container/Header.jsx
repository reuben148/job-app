import React from "react";
import logo from "../assets/image.svg";
import logos from "../assets/line.svg";

function Header() {
  return (
    <div className="justify-between flex">
      <div>
        <img
          src={logo}
          alt="Logo"
          className="w-[500px] h-auto h-[500px] py-4 px-2"
        />
      </div>

      <div className="py-10 mr-[10px]">
        <p className="text-7xl py-4 font-serif leading-tight">
          <span className="text-black">Discover more than</span>
          <br />
          <span className="text-blue-500">5000+ Jobs</span>
        </p>
        <p className="text-xl text-slate-600 font-serif">
          Great platform for job seekers passionate about startups and <br></br>{" "}
          seeking new career heights.
        </p>

        <img src={logos} alt="line" className="py-3 px-10" />
      </div>
    </div>
  );
}

export default Header;
