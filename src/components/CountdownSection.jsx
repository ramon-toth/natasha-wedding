import React from "react";
import Countdown from "../shared/Countdown/Countdown";

function CountdownSection() {
  return (
    <section className="p-10">
      <div className="container min-w-full flex flex-col justify-center items-center text-center">
        <p className="mb-5 lg:w-1/2 cursive text-4xl">
          You are cordially invited to the wedding of Natasha Aelicks and Rhys
          Ingham.
        </p>
        <p className="mb-5 lg:w-1/2 text-xl">
          Please join us on <b>September 23rd, 2023 at 3:00PM</b> at Emerald
          Lake Lodge for the ceremony and reception.
        </p>
      </div>

      {/*<div className="container min-w-full flex justify-center">*/}
      {/*  <h1 className="text-xl font-bold">*/}
      {/*    Please join us on September 23rd, 2023 at 3:00PM at Emerald Lake Lodge*/}
      {/*    for the ceremony and reception.*/}
      {/*  </h1>*/}
      {/*</div>*/}

      <Countdown epoch={process.env.REACT_APP_COUNTDOWN}></Countdown>
    </section>
  );
}

export default CountdownSection;
