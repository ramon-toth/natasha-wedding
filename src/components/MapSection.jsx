import Map from "../shared/Map";
import Card from "../shared/Card";

function MapSection() {
  const openVenueSite = () =>
    window.open("https://crmr.com/resorts/emerald-lake/", "_blank");
  return (
    <section className="container min-w-full flex flex-col md:flex-row gap-10 px-10 justify-center bg-opacity-90">
      <Map location={process.env.REACT_APP_LOCATION}></Map>
      <Card styles="bg-opacity-90" onClick={openVenueSite}>
        {{
          title: "Emerald Lake Lodge",
          content: (
              <>
            <p className="mt-10 text-xl ">1 Emerald Lake Rd, Field, BC V0A 1G0</p>
            <p>
                <a
                    href="https://crmr.com/resorts/emerald-lake/"
                    rel="noreferrer"
                    target="_blank"
                    className="font-bold text-xl"
                >
                    Click here
                </a>
                <span className="text-xl">&nbsp; to visit website</span>
            </p>
              </>

          ),
          image:
            "https://crmr.com/wp-content/uploads/2021/02/ELL_Interior-1.jpg",
        }}
      </Card>
    </section>
  );
}

export default MapSection;
