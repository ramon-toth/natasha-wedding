import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import React from "react";
import Rsvp from "./pages/Rsvp";
import Submitted from "./pages/Submitted";

function App() {
  const isIOSDevice =
    !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

  return (
    <div className="bg-opacity-0 flex flex-col h-screen ">
      <Navbar></Navbar>
      <Hero></Hero>
      <main
        className={`flex-grow ${isIOSDevice ? `ios-background` : `bg-image `}`}
      >
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
