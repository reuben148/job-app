import React from "react";

function Blog() {
  return (
    <div className="w-full max-w-[900px] mx-auto">
      <div>
        <p className="font-serif text-xl px-4 md:px-10 py-5 text-slate-500">
          Companies we helped grow
        </p>
      </div>

      <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 px-4 py-6">
        <img
          src="voda.png"
          alt="Vodafone"
          className="w-[80px] sm:w-[100px] md:w-[120px] h-auto object-contain"
        />
        <img
          src="intel.png"
          alt="Intel"
          className="w-[80px] sm:w-[100px] md:w-[120px] h-auto object-contain"
        />
        <img
          src="tesla.png"
          alt="Tesla"
          className="w-[80px] sm:w-[100px] md:w-[120px] h-auto object-contain"
        />
        <img
          src="amda.png"
          alt="AMD"
          className="w-[80px] sm:w-[100px] md:w-[120px] h-auto object-contain"
        />
        <img
          src="talk.png"
          alt="Talk"
          className="w-[80px] sm:w-[100px] md:w-[120px] h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Blog;
