import Card from "../shared/Card";

function TheDay() {
  return (
    <div className="min-w-screen flex justify-center my-10 mx-10">
      <Card styles="min-w-full bg-opacity-90 text-2xl">
        {{
          content: (
            <>
              <p>
                <b>13:30</b> - Wedding Ceremony
              </p>
              <p>
                <b>00:00</b> - Cocktails on the Cilantro Patio
              </p>
              <p>
                <b>00:00</b>- Dinner and Dancing by the Lake
              </p>
            </>
          ),
        }}
      </Card>
    </div>
  );
}

export default TheDay;
