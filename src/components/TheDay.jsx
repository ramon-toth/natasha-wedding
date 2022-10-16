import Card from "../shared/Card";

function TheDay(props) {
  return (
    <div className="min-w-screen flex justify-center my-10 mx-10">
      <Card styles="min-w-full bg-opacity-90 text-xl">
        {{
          content: (
            <>
              <p>13:30 - Wedding Ceremony</p>
              <p>- Cocktails on the Cilantro Patio</p>
              <p>- Dinner and Dancing by the Lake</p>
            </>
          ),
        }}
      </Card>
    </div>
  );
}

export default TheDay;
