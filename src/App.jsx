import React from "react";
import { Header, Navbar, Input, Blog, Blogs } from "./Container";

function App() {
  return (
    <div className="bg-[#e0e7ff]">
      <div>
        <Navbar />
        <Header />
        <Input />
        <Blog />
        <Blogs />
      </div>
    </div>
  );
}

export default App;
