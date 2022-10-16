import React from "react";
// import Countdown from "./Countdown";
import logo from "../assets/logo.png";

function Hero(props) {
  return (
    <section>
      <div className="hero lg:h-128 md:h-64 sm:h-32 bg-base-100 bg-opacity-90">
        <img src={logo} alt="" className="lg:h-128 md:h-64 sm:h-32" />
        {/*<div className="hero-overlay bg-opacity-60"></div>*/}
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            {/*<Countdown epoch={1667798067000}></Countdown>*/}
            {/*<h1 className="mb-5 text-5xl font-bold">Hello there</h1>*/}
            {/*<p className="mb-5">*/}
            {/*  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda*/}
            {/*  excepturi exercitationem quasi. In deleniti eaque aut repudiandae*/}
            {/*  et a id nisi.*/}
            {/*</p>*/}
            {/*<button className="btn btn-secondary">Get Started</button>*/}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
