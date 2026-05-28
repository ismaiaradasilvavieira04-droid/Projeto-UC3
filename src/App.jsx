import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Photographers from "./pages/Photographers.jsx";
import Details from "./pages/Details.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fotografos" element={<Photographers />} />
        <Route path="/fotografo/:id" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;