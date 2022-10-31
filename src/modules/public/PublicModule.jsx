import React from "react";
import Hero from "../../components/Hero";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rsvp from "./pages/Rsvp";
import Submitted from "./pages/Submitted";

function PublicModule() {
  const isIOSDevice =
    !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

  return (
    <div className={`flex-grow ${isIOSDevice ? `ios-background` : `bg-image `}`}>
      <Hero></Hero>
      <main

      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rsvp" element={<Rsvp />}></Route>
          <Route path="/rsvp/submitted" element={<Submitted />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default PublicModule;
