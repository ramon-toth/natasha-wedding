import React from 'react';
import Countdown from "./Countdown";

function Hero(props) {
    return (
        <section>
            <div className="hero h-128" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <Countdown epoch={1667798067000}></Countdown>
                        {/*<h1 className="mb-5 text-5xl font-bold">Hello there</h1>*/}
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        {/*<button className="btn btn-secondary">Get Started</button>*/}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;