import React from "react";
import { Header, Navbar, Input, Blog } from "./Container";

function App() {
  return (
    <div className="bg-[#e0e7ff]">
      <div>
        <Navbar />
        <Header />
        <Input />
        <Blog />
      </div>
    </div>
  );
}

export default App;
