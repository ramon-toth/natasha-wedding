import Card from "../shared/Card";

function TheDay() {
  return (
    <div className="min-w-screen flex justify-center my-10 mx-10">
      <Card styles="min-w-full bg-opacity-90 text-2xl">
        {{
          content: (
            <>
              <p>
                <b>15:00</b> - Wedding Ceremony
              </p>
              <p>
                <b>16:00</b> - Cocktails on the Cilantro Patio
              </p>
              <p>
                <b>17:00</b>- Dinner and Dancing in Cilantro by the Lake
              </p>
            </>
          ),
        }}
      </Card>
    </div>
  );
}

export default TheDay;
