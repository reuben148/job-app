import React from "react";
import { Button } from "../Content";

function Blogs() {
  return (
    <div className="flex justify-center px-4 py-8">
      <div className="w-full max-w-[950px] rounded-br-[50px] rounded-tl-[50px] bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] border-2 border-blue-200 p-6 md:flex md:justify-between md:items-center">
        {/* Text Content */}
        <div className="md:w-1/2">
          <p className="text-4xl md:text-5xl font-mono text-white py-4 px-2 md:px-6">
            Start Posting <br /> Jobs Today
          </p>
          <p className="text-white text-sm md:text-base px-2 md:px-6 pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing <br />
            elit.
          </p>
          <div className="px-2 md:px-6">
            <Button />
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="dash.jpg"
            alt="Dashboard"
            className="w-[220px] md:w-[300px] rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
