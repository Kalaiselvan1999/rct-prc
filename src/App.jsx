import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PositionDemo from "./components/PositionDemo";
import PositionDemoTwo from "./components/PositionDemoTwo";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
      <PositionDemo />
      <PositionDemoTwo />
    </>
  );
}

export default App;
