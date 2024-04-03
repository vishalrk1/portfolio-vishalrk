import { Calendar } from "lucide-react";
import { Experience } from "../utils/types";
import React from "react";
import dayjs from "dayjs";

interface ExperienceSectionProps {
  experience: Experience;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experience,
}) => {
  const endDate = experience.isCurrent ? dayjs() : dayjs(experience.endDate);
  const totalMonths = experience.isCurrent
    ? endDate.diff(experience.startDate, "months")
    : endDate.diff(experience.startDate, "months");

  return (
    <div className="flex flex-row gap-4 relative py-4">
      <div className="z-10">
        <div className="bg-CustomYellow p-2 rounded-full">
          <Calendar size={25} color="black" />
        </div>
      </div>
      <div className="flex flex-col w-full h-max">
        <p className="mt-2 text-CustomYellow text-xl font-semibold">
          {experience.position}
        </p>
        <p className="flex items-center mt-2 sm:text-base text-sm font-normal">
          {experience.company} - {`${totalMonths} months - `}{" "}
          {experience.isCurrent && (
            <p className="ml-1 sm:text-base text-sm font-bold text-green-500">Current</p>
          )}
        </p>
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
