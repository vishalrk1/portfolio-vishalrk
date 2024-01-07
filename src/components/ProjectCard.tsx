import React from "react";
import ImageCarousel from "./imageCarousel";
import { Project } from "../utils/types";
import { Github } from "lucide-react";

interface ProjectCardProps {
  projectItem: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectItem }) => {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="flex flex-col w-full md:w-[350px] h-max rounded-md bg-gray-700 p-2">
      <ImageCarousel images={projectItem.images} />
      <div className="flex flex-row justify-between">
        <p className="flex-1 text-left text-CustomGrey font-semibold text-lg m-2 mb-0">
          {projectItem.name}
        </p>
        {projectItem.liveLink && (
          <button
            onClick={() => openInNewTab(projectItem.liveLink)}
            className="flex-2 text-left text-green-500 font-semibold text-xs border-green-500 border-2 rounded-md m-2 mb-0 pl-2 pr-2"
          >
            Live
          </button>
        )}
      </div>
      <p className="text-left text-CustomGrey text-xs m-2 mt-3 text-ellipsis line-clamp-2 md:line-clamp-3">
        {projectItem.description}
      </p>
      {projectItem.githubLink && (
        <button
          onClick={() => openInNewTab(projectItem.githubLink)}
          className="flex flex-row w-max text-left text-CustomGrey font-semibold text-xs border-gray-600 border-2 rounded-md m-2 mb-0 p-2"
        >
          <Github className="inline-block mr-2" size={18} />
          <p className="text-sm">Github</p>
        </button>
      )}
    </div>
  );
};

export default ProjectCard;
