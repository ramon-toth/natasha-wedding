import Card from "../shared/Card";

function VenueInfo() {
  return (
    <div className="min-w-screen flex justify-center mb-10 mx-10">
      <Card styles="min-w-full bg-opacity-90">
        {{
          title: (
            <span className="cursive text-3xl text-secondary">
              Stay and Play
            </span>
          ),
          content: (
            <span className="text-xl">
              The beautiful Emerald Lake Lodge nestled in the breathtaking Rocky
              Mountains boasts ample opportunity for hiking, biking, canoeing,
              and sightseeing. Only 40 minutes to Lake Louise, and 65 minutes to
              Banff, there is no shortage of adventure that awaits you in this
              serene escape from busy life. To book your room reservations{" "}
              <a
                href="https://bookings.crmr.com/115058#/guestsandrooms"
                rel="noreferrer"
                target="_blank"
                className="font-bold"
              >
                click here
              </a>
              , and to learn more about the adventure that awaits you,{" "}
              <a
                href="https://crmr.com/activities/"
                rel="noreferrer"
                target="_blank"
                className="font-bold"
              >
                click here
              </a>
            </span>
          ),
        }}
      </Card>
    </div>
  );
}

export default VenueInfo;
