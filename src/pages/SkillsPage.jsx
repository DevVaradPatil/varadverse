import React from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { skillData } from "../data/skillsData";

const SkillsPage = () => {
  return (
    <div className="flex bg-lavender flex-col min-h-screen w-full py-10 md:p-10">
      <h1 className="text-5xl w-full px-3 md:px-0 text-white text-left font-arima font-bold mb-6">My Skills</h1>
      <p className="text-lg px-3 md:px-0 mb-10 text-white">
        I am skilled in a diverse set of technologies, covering both frontend
        and backend development. My expertise includes HTML, CSS, JavaScript,
        React.js, and frameworks within the MERN stack. I am experienced in
        building responsive, efficient web applications, utilizing modern tools
        like TypeScript, Next.js, and Tailwind CSS to create seamless user
        experiences. Additionally, I have a strong grasp of Git and GitHub for
        version control, MongoDB for data management, and Figma for UI/UX
        design, ensuring that every project is visually appealing and
        functionally robust.
      </p>
      <div className="max-w-7xl mx-auto md:px-8">
      <HoverEffect items={skillData} />
      </div>
    </div>
  );
};

export default SkillsPage;
