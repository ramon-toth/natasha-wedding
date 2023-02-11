import { Link } from "react-router-dom";
import Card from "../shared/Card";

function RsvpSection() {
  return (
      <>

        <section className="md:hidden">
          <div className="container min-w-full flex flex-col justify-center items-center text-center p-10 ">

          <Card styles="min-w-full bg-opacity-90 text-2xl md:hidden">
            {{
              content: (
                  <>
                    <div className="max-w-md">
                      <h1 className="text-6xl font-bold mb-10 text-secondary cursive">
                        Click here to RSVP
                      </h1>
                      <Link to="/rsvp" className="btn btn-lg btn-outline btn-secondary">
                        RSVP Now!
                      </Link>
                    </div>

                  </>
              ),
            }}
          </Card>
          </div>
    </section>
    <section className="hidden md:block lg:block">
      <div className="hero h-96 bg-base-100 bg-opacity-0">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold mb-10 text-secondary cursive">
              Click here to RSVP
            </h1>
            <Link to="/rsvp" className="btn btn-lg btn-outline btn-secondary">
              RSVP Now!
            </Link>
          </div>
        </div>
      </div>
    </section>
        </>
  );
}

export default RsvpSection;
