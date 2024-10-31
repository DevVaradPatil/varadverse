import React from 'react'
import Lottie from "react-lottie";
import animationData from "../assets/animations/projectAnimation.json";

const Projects = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: JSON.parse(JSON.stringify(animationData)),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div id="bento" className='w-full h-full flex flex-col lg:flex-row justify-around items-center p-4'>
      <div className='text-lemon text-4xl font-bold font-arima w-full flex justify-center items-center'>Projects</div>
      <div className="w-full h-full flex justify-center items-center">
        <Lottie options={defaultOptions}/>
      </div>
    </div>
  )
}

export default Projects