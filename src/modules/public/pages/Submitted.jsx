import Card from "../../../shared/Card";
import {Link} from "react-router-dom";

function Submitted() {
  return (
    <div className="flex justify-center mt-10">
      <Card>
        {{
          content: (
              <>
            <h2 className="text-2xl">Thank you for submitting your RSVP!</h2>
                  <Link to="/" className="btn mt-5 btn-lg btn-outline btn-secondary">
                      Continue to Home Page
                  </Link>

              </>
            ),
        }}
      </Card>
    </div>
  );
}

export default Submitted;
