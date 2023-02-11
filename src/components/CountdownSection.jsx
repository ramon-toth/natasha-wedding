import Countdown from "../shared/Countdown/Countdown";
import Card from "../shared/Card";

function CountdownSection() {
  return (
    <section className="p-10">
      <div className="container min-w-full flex flex-col justify-center items-center text-center ">
          <Card styles="min-w-full bg-opacity-90 text-2xl md:hidden">
              {{
                  content: (
                      <>
                          <p className="mb-5 lg:w-1/2 cursive text-4xl">
                              You are cordially invited to the wedding of Natasha Aelicks and Rhys
                              Ingham.
                          </p>
                          <p className="mb-5 lg:w-1/2 text-xl">
                              Please join us on <b>September 23rd, 2023 at 3:00PM</b> at Emerald
                              Lake Lodge for the ceremony and reception.
                          </p>

                      </>
                  ),
              }}
          </Card>
{/*<div className="sm:hidden md:block lg:block">*/}
    <p className="mb-5 lg:w-1/2 cursive text-4xl hidden md:block lg:block">
        You are cordially invited to the wedding of Natasha Aelicks and Rhys
        Ingham.
    </p>
    <p className="mb-5 lg:w-1/2 text-xl hidden md:block lg:block">
        Please join us on <b>September 23rd, 2023 at 3:00PM</b> at Emerald
        Lake Lodge for the ceremony and reception.
    </p>

{/*</div>*/}

      </div>
      <Countdown epoch={process.env.REACT_APP_COUNTDOWN}></Countdown>
    </section>
  );
}

export default CountdownSection;
