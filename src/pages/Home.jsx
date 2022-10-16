import React from "react";
import Hero from "../components/Hero";
import CountdownSection from "../components/CountdownSection";
import MapSection from "../components/MapSection";
import Couple from "../components/Couple";
function Home() {
  return (
    <>
      <CountdownSection></CountdownSection>
      <MapSection></MapSection>
      <Couple></Couple>
    </>
  );
}

export default Home;
