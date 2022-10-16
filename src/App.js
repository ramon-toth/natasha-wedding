import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Couple from "./components/Couple";
// // import Hero from "./components/Hero";
// import CountdownSection from "./components/CountdownSection";
// import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import React from "react";
import Rsvp from "./pages/Rsvp";

function App() {
  return (
    <div className="bg-opacity-0">
      <Navbar></Navbar>
      <Hero></Hero>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rsvp" element={<Rsvp></Rsvp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
