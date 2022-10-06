import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Couple from "./components/Couple";
// import Hero from "./components/Hero";
import MapSection from "./components/MapSection";

function App() {
  return (
      <div className="bg-primary">
          <Navbar></Navbar>
          <Hero></Hero>
          <MapSection></MapSection>
          <Couple></Couple>
      </div>
   );
}

export default App;
