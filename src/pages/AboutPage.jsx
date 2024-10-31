import React from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import animationData from "../assets/animations/heroAnimation.json";
import { FaDownload, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const AboutPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: JSON.parse(JSON.stringify(animationData)),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <div className="bg-mint p-3 md:p-10 flex items-center justify-center min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between w-full md:px-10">
        <motion.div
          className="md:w-1/2 w-full flex justify-center md:justify-start mb-8 md:mb-0"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <Lottie options={defaultOptions} width={500} />
        </motion.div>

        <motion.div
          className="md:w-1/2 w-full text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Hello, I am <span className="text-[#FF6129]">Varad</span>
          </motion.h1>
          <motion.p
            className="text-lg text-justify md:text-left text-gray-800 leading-relaxed"
            variants={itemVariants}
          >
            I am a passionate web developer with a focus on building innovative,
            scalable, and efficient applications. My journey in web development
            started with an interest in solving real-world problems through
            technology. I enjoy creating intuitive user experiences and clean
            code that makes projects shine. I thrive in challenging
            environments, continuously learning and adapting to new
            technologies.
          </motion.p>

          {/* Social Media Links */}
          <motion.div
            className="flex justify-center items-center flex-wrap gap-6 md:justify-start mt-6"
            variants={itemVariants}
          >
            <a
              href="https://github.com/devVaradPatil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                className="text-gray-800 transition-all duration-200 hover:scale-[1.01] hover:text-[#FF6129]"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/varad-patil-web-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                className="text-gray-800 transition-all duration-200 hover:scale-[1.01] hover:text-[#FF6129]"
              />
            </a>
            <a
              href="https://www.instagram.com/varad__patil_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={30}
                className="text-gray-800 transition-all duration-200 hover:scale-[1.01] hover:text-[#FF6129]"
              />
            </a>

            {/* Call to Action Button */}
            <a
              href="/Varad_Resume.pdf"
              className="bg-[#FF6129] text-white flex gap-2 justify-center items-center px-6 py-2 rounded-lg font-bold hover:bg-[#e85015] transition duration-300"
              download
            >
              Download Resume
              <FaDownload size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
