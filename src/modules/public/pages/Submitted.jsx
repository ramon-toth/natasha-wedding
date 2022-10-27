import Card from "../../../shared/Card";

function Submitted() {
  return (
    <div className="flex justify-center mt-10">
      <Card>
        {{
          content: (
            <h2 className="text-2xl">Thank you for submitting your RSVP!</h2>
          ),
        }}
      </Card>
    </div>
  );
}

export default Submitted;
