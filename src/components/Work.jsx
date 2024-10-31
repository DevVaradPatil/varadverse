import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animations/workAnimation.json";

const Work = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: JSON.parse(JSON.stringify(animationData)),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div id="bento" className="w-full h-full flex flex-col justify-around items-center p-4">
      <h1 className="text-strawberry text-4xl font-bold font-arima">
        Work Experience
      </h1>
      <div className="w-full h-full flex justify-center items-center">
        <Lottie options={defaultOptions}  />
      </div>
    </div>
  );
};

export default Work;
