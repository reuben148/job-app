import React from "react";

function Input() {
  return (
    <div className="flex justify-center items-center px-4 py-8">
      <div className="w-full max-w-[850px] bg-white rounded-[12px] shadow-md p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-center">
        
        <input
          type="text"
          placeholder="Job Title or Keywords"
          className="w-full md:w-[250px] p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-serif placeholder:text-slate-400"
        />

   
        <input
          type="text"
          placeholder="Location"
          className="w-full md:w-[250px] p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-serif placeholder:text-slate-400"
        />

        
        <button className="w-full md:w-[150px] p-3 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition-all font-semibold">
          Search
        </button>
      </div>
    </div>
  );
}

export default Input;
