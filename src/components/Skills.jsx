import React from 'react'
import Lottie from "react-lottie";
import animationData from "../assets/animations/skillsAnimation.json";

const Skills = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: JSON.parse(JSON.stringify(animationData)),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div id="bento" className='w-full h-full flex flex-col lg:flex-row-reverse justify-around items-center p-4'>
      <h1 className='text-lavender text-4xl font-bold font-arima w-full flex justify-center items-center'>Skills</h1>
      <div className="w-full h-full flex justify-center items-center">
        <Lottie options={defaultOptions} height={250} width={400} />
      </div>
    </div>
  )
}

export default Skills