import CountdownSection from "../../../components/CountdownSection";
import MapSection from "../../../components/MapSection";
import Couple from "../../../components/Couple";
import RsvpSection from "../../../components/RsvpSection";
import Divider from "../../../shared/Divider";
import VenueInfo from "../../../components/VenueInfo";
import TheDay from "../../../components/TheDay";
import Accommodations from "../../../components/Accommodations";

function Home() {
  return (
    <>
      <CountdownSection />
      <Divider text="About the Happy Couple"></Divider>
      <Couple />
      <RsvpSection></RsvpSection>
      <Divider text="About the Day"></Divider>
      <TheDay />
      <Divider text="About the Venue"></Divider>
      <MapSection />
      <Divider text="Accommodations"></Divider>
        <Accommodations/>
      <Divider text="Stay and Play"></Divider>
      <VenueInfo />
    </>
  );
}

export default Home;
