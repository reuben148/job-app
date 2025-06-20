import React from "react";
import { Header, Navbar, Input, Blog, Blogs } from "./Container";
import { Footer } from "./Content";

function App() {
  return (
    <div className="bg-[#e0e7ff]">
      <div>
        <Navbar />
        <Header />
        <Input />
        <Blog />
        <Blogs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
