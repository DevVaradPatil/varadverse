import React from "react";
import { motion } from "framer-motion"; // Import motion
import ProjectCard from "../components/ProjectCard";
import { projectData } from "../data/projectsData";

const ProjectsPage = () => {
  // Define animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 }, // Initial state (hidden)
    visible: { opacity: 1, y: 0 },  // Final state (visible)
  };

  return (
    <div className="flex flex-col p-3 md:p-10 bg-lemon min-h-screen w-full items-center justify-center">
      <h1 className="text-5xl w-full text-left font-arima font-bold mb-6">
        My Skills
      </h1>
      <p className="text-lg mb-10">
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
      <div className="w-full h-full flex justify-around items-center flex-wrap">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants} // Assign the variants
            initial="hidden" // Initial state
            animate="visible" // Animate to visible state
            transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for staggered animation
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
