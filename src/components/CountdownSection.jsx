import React from "react";
import Countdown from "./Countdown";

function CountdownSection(props) {
  return (
    <section className="pt-10">
      <div className="container min-w-full flex justify-center">
        <p className="mb-5 w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          delectus deleniti et libero quis? Accusamus atque autem commodi
          doloremque eaque harum iste laborum libero numquam porro reiciendis
          saepe, vel voluptate.
        </p>
      </div>

      <div className="container min-w-full flex justify-center">
        <h1 className="text-xl font-bold">September 23rd, 2023 at 3:00PM</h1>
      </div>

      <Countdown epoch={process.env.REACT_APP_COUNTDOWN}></Countdown>
    </section>
  );
}

export default CountdownSection;
