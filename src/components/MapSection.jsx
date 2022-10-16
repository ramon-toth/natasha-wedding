import React from "react";
import Map from "../shared/Map";
import Card from "../shared/Card";

function MapSection(props) {
  const openVenueSite = () =>
    window.open("https://crmr.com/resorts/emerald-lake/", "_blank");
  // const location =
  //   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.596455573344!2d-79.31159748370477!3d43.718934779119294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cdc630659b31%3A0x9a72761e7a0e1f9b!2s100%20Sunrise%20Ave%2C%20North%20York%2C%20ON%20M4A%201B3!5e0!3m2!1sen!2sca!4v1664938506820!5m2!1sen!2sca";
  return (
    <section className="container p-10 min-w-full flex flex-col md:flex-row gap-10 p-10 justify-center bg-opacity-90">
      <Map location={process.env.REACT_APP_LOCATION}></Map>
      <Card styles="bg-opacity-90" onClick={openVenueSite}>
        {{
          title: "Emerald Lake Lodge",
          content: (
            <p className="mt-10 ">1 Emerald Lake Rd, Field, BC V0A 1G0</p>
          ),
          image:
            "https://crmr.com/wp-content/uploads/2021/02/ELL_Interior-1.jpg",
        }}
      </Card>
    </section>
  );
}

export default MapSection;
