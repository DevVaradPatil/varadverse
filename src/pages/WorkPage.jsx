import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { workData } from "../data/workData";

const WorkPage = () => {
  return (
    <div className="flex bg-strawberry text-white min-h-screen flex-col w-full p-3 md:px-10 md:py-8">
      <h1 className="text-5xl font-arima font-bold mb-6">My Experience</h1>
      <p className="text-lg mb-10">
        I have worked on a variety of web development projects, focusing on
        building responsive full-stack applications and intuitive user
        interfaces. Using technologies like HTML, CSS, JavaScript, React.js, and
        the MERN stack, I create scalable, efficient, and user-focused web
        solutions. My experience includes integrating third-party APIs,
        optimizing backend performance, and ensuring cross-platform
        compatibility, always prioritizing clean, maintainable code.
      </p>

      <div className="flex w-full justify-center items-center">
        <VerticalTimeline>
          {workData.map((work, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "linear-gradient(135deg, #ffe4e6, #ffccd5)", // light strawberry gradient
                color: "#1f2937", // dark text for contrast
                borderRadius: "12px", // rounded corners
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // subtle shadow
              }}
              contentArrowStyle={{
                borderRight: "7px solid #ffe4e6", // arrow matches the background
              }}
              date={<div style={{ color: "#fff" }}>{work.date}</div>} // Using custom hex color
              iconStyle={{ background: "#f87171", color: "#fff" }} // strawberry color for icons
              icon={<img src={work.icon} alt="icon" className="rounded-full" />}
            >
              <h3 className="text-2xl font-semibold">{work.job}</h3>
              <h4 className="text-xl font-light text-gray-500">
                {work.company}
              </h4>
              <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-gray-600">
                {work.listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkPage;
