import Card from "../shared/Card";

function VenueInfo() {
  return (
    <div className="min-w-screen flex justify-center m-10">
      <Card styles="min-w-full bg-opacity-90">
        {{
          title: (
            <span className="cursive text-3xl text-secondary">
              Stay and Play
            </span>
          ),
          content: (
            <div className="text-xl">
              <p>
                The beautiful Emerald Lake Lodge nestled in the breathtaking
                Rocky Mountains boasts ample opportunity for hiking, biking,
                canoeing, and sightseeing. Only 40 minutes to Lake Louise, and
                65 minutes to Banff, there is no shortage of adventure that
                awaits you in this serene escape from busy life.
              </p>
              <p>
                To book your room reservations{" "}
                <a
                  href="https://bookings.crmr.com/115058#/guestsandrooms"
                  rel="noreferrer"
                  target="_blank"
                  className="font-bold"
                >
                  click here,
                </a>
                <br />
                and to learn more about the adventure that awaits you,{" "}
                <a
                  href="https://crmr.com/activities/"
                  rel="noreferrer"
                  target="_blank"
                  className="font-bold"
                >
                  click here
                </a>
              </p>
            </div>
          ),
        }}
      </Card>
    </div>
  );
}

export default VenueInfo;
