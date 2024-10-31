import React from 'react';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Link } from 'react-router-dom';

const ProjectCard = ({ name, description, image, live_link, source_code_link }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#fdf1b8] relative group/card hover:shadow-lg hover:shadow-yellow-500/[0.15] border-[#e6d785] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-black"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-800 text-sm max-w-sm mt-2"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-md"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as={Link}
            to={live_link}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-medium text-gray-800 border border-gray-800 hover:bg-[#f3e3a1] transition-all"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            to={source_code_link}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-gray-800 text-white hover:bg-gray-700 text-xs font-bold transition-all"
          >
            Source Code
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
