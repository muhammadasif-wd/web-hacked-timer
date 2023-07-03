import React from "react";
import Timer from "./Components/Timer";

const App = () => {
  return (
    <div className="background_image">
      <div className="flex items-center justify-center h-screen text-white">
        <div>
          <h1 className="text-center text-6xl font-bold drop-shadow-2xl">
            Welcome to our system
          </h1>
          <p className="text-center mt-1 text-xl font-bold drop-shadow-2xl">
            Please understand your website by talking to your developer within
            the time frame below.
          </p>
          <div>
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
