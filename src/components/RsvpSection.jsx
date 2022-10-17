import { Link } from "react-router-dom";

function RsvpSection() {
  return (
    <section>
      <div className="hero h-96 bg-base-100 bg-opacity-0">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold mb-10 cursive">
              Click here to RSVP
            </h1>
            <Link to="/rsvp" className="btn btn-lg btn-outline btn-secondary">
              RSVP Now!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RsvpSection;
