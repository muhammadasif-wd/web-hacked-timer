import React from "react";
import Countdown from "react-countdown-now";

const CountdownTimer = ({ launchDate }) => {
  return <Countdown date={launchDate} />;
};

export default CountdownTimer;
