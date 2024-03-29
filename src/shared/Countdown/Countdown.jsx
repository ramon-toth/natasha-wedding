import React, { useEffect, useState } from "react";
import "./countdown.css";

function Countdown({ epoch = Date.now().toString() }) {
  const [timeLeft, setTimeLeft] = useState({});

  const timeHasRunOut = () => epoch - Date.parse(new Date().toString()) < 0;

  useEffect(() => {
    const updateTimer = () => {
      const total = epoch - Date.parse(new Date().toString());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));

      setTimeLeft({
        total,
        days,
        hours: ("0" + hours).slice(-2),
        minutes: ("0" + minutes).slice(-2),
        seconds: ("0" + seconds).slice(-2),
      });
    };

    const interval = setInterval(() => {
      updateTimer();
    }, 1000);
    return () => clearInterval(interval);
  }, [epoch]);

  if (timeHasRunOut()) return <div className="h-40"></div>;
  return (
    <div className="flex justify-center my-10">
      <div className="grid md:grid-flow-col sm:grid-flow-row gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-primary shadow-xl rounded-box text-secondary">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timeLeft.days }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 bg-primary shadow-xl rounded-box text-secondary">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timeLeft.hours }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-primary shadow-xl rounded-box text-secondary">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timeLeft.minutes }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-primary shadow-xl rounded-box text-secondary">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": timeLeft.seconds }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
}

export default Countdown;
