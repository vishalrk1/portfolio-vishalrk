import { Calendar } from "lucide-react";
import { Experience } from "../utils/types";
import React from "react";

interface ExperienceSectionProps {
  experience: Experience;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experience,
}) => {
  return (
    <div className="flex flex-row gap-4 relative py-4">
      <div className="z-10">
        <div className="bg-CustomYellow p-2 rounded-full">
          <Calendar size={25} color="black" />
        </div>
      </div>
      <div className="flex flex-col w-full h-max">
        <p className="mt-2 text-CustomYellow text-xl font-semibold">{experience.position}</p>
        <p className="mt-2 text-base font-normal">{experience.company} - {`months`}</p>
        <ul className="list-disc mx-4 my-3 space-y-3">
          {experience.description.map((txt) => (
            <li className="font-light text-xs md:text-base">{txt}</li>
          ))}
        </ul>
      </div>
      <div className="absolute left-5 top-1/2 transform -translate-y-1/2 border-l-2 border-dotted border-gray-400 h-full"></div>
    </div>
  );
};

export default ExperienceSection;
