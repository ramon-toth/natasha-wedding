import Navbar from "./shared/Navbar";
// import Hero from "./components/Hero";
// import Couple from "./components/Couple";
// // import Hero from "./components/Hero";
// import CountdownSection from "./components/CountdownSection";
// import MapSection from "./components/MapSection";
import Footer from "./shared/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import React from "react";
import Rsvp from "./pages/Rsvp";
import Submitted from "./pages/Submitted";

function App() {
  return (
    <div className="bg-opacity-0 flex flex-col h-screen bg-image">
      <Navbar></Navbar>
      <Hero></Hero>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rsvp" element={<Rsvp></Rsvp>}></Route>
          <Route
            path="/rsvp/submitted"
            element={<Submitted></Submitted>}
          ></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
