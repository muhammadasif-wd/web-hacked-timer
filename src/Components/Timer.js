import React, { useEffect, useState } from "react";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimerFinished, setIsTimerFinished] = useState(false);

  const deadline = "July 5, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / (1000 * 60)) % 60));
    setSeconds(Math.floor((time / 1000) % 60));

    if (time <= 0) {
      setIsTimerFinished(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(getTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer" role="timer">
      {isTimerFinished ? (
        <p>Sorry your contact time is finished 😔</p>
      ) : (
        <div className="flex gap-2 text-black bg-white p-2 text-center rounded-md justify-center w-fit mx-auto">
          <div className="col-4">
            <div className="box-border bg-green-700/30 p-5 rounded-md w-44">
              <p className="text-4xl font-medium text-green-700">
                {days < 10 ? "0" + days : days}
              </p>
              <span className="text-2xl font-bold">Days</span>
            </div>
          </div>
          <div className="col-4">
            <div className="box-border bg-orange-700/30 p-5 rounded-md w-44">
              <p className="text-4xl font-medium text-orange-700">
                {hours < 10 ? "0" + hours : hours}
              </p>
              <span className="text-2xl font-bold">Hours</span>
            </div>
          </div>
          <div className="col-4">
            <div className="box-border bg-red-700/30 p-5 rounded-md w-44">
              <p className="text-4xl font-medium text-red-700">
                {minutes < 10 ? "0" + minutes : minutes}
              </p>
              <span className="text-2xl font-bold">Minutes</span>
            </div>
          </div>
          <div className="col-4">
            <div className="box-border bg-blue-700/30 p-5 rounded-md w-44">
              <p className="text-4xl font-medium text-blue-700">
                {seconds < 10 ? "0" + seconds : seconds}
              </p>
              <span className="text-2xl font-bold">Seconds</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
