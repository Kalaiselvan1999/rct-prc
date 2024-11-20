import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FormsDemo from "./components/FormsDemo";
import GridDemo from "./components/GridDemo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forms" element={<FormsDemo />} />
          <Route path="/grid" element={<GridDemo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
