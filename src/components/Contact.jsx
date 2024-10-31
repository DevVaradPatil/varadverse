import React from 'react'
import Lottie from "react-lottie";
import animationData from "../assets/animations/contactAnimation.json";

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: JSON.parse(JSON.stringify(animationData)),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div id="bento" className='w-full h-full flex justify-between flex-col items-center p-4'>
      <h1 className='text-tomato text-4xl font-bold font-arima'>Contact Me</h1>
      <div className="w-full h-full flex justify-center items-center">
        <Lottie options={defaultOptions} width={200} />
      </div>
    </div>
  )
}

export default Contact