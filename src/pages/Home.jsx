import React from "react";
import CountdownSection from "../components/CountdownSection";
import MapSection from "../components/MapSection";
import Couple from "../components/Couple";
import RsvpSection from "../components/RsvpSection";

function Home() {
  return (
    <>
      <CountdownSection></CountdownSection>
      <Couple></Couple>
      <RsvpSection></RsvpSection>
      <MapSection></MapSection>
    </>
  );
}

export default Home;
