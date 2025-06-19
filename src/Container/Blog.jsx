import React from "react";

function Blog() {
  return (
    <div>
      <div>
        <p className="font-serif text-xl px-10 py-5 text-slate-500">
          Companies we helped grow
        </p>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-6 px-4 py-6">
        <img
          src="voda.png"
          alt="Vodafone"
          className="h-10 w-auto object-contain"
        />
        <img
          src="intel.png"
          alt="Intel"
          className="h-10 w-auto object-contain"
        />
        <img
          src="tesla.png"
          alt="Tesla"
          className="h-10 w-auto object-contain"
        />
        <img src="amda.png" alt="AMD" className="h-10 w-auto object-contain" />
        <img src="talk.png" alt="Talk" className="h-10 w-auto object-contain" />
      </div>
    </div>
  );
}

export default Blog;
