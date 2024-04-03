import Tabs from "./Tabs";
import Tab from "./Tab";
import ProjectCard from "../ProjectCard";
import { ProjectsData } from "../../utils/projectsData";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { Project } from "../../utils/types";

const ProjectsTab = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProject = ProjectsData.filter(
    (item) => item.isFeatured === true
  );

  const handleClick = (item: Project) => {
    setSelectedProject(item);
    setOpenModal(true);
  };
  return (
    <>
      <Modal
        setShowModal={setOpenModal}
        showModal={openModal}
        data={selectedProject}
      />
      <Tabs>
        <Tab label="Featured">
          <div className="flex flex-row gap-5 justify-center md:justify-center flex-wrap w-full p-4 px-0">
            {featuredProject.map((item, index) => (
              <ProjectCard
                projectItem={item}
                key={index}
                onClick={() => handleClick(item)}
                imagesAutoPlay={true}
              />
            ))}
          </div>
        </Tab>
        <Tab label="All">
          <div className="flex flex-row gap-5 justify-center md:justify-center flex-wrap w-full p-0">
            {ProjectsData.map((item, index) => (
              <ProjectCard
                projectItem={item}
                key={index}
                onClick={() => handleClick(item)}
                imagesAutoPlay={false}
              />
            ))}
          </div>
        </Tab>
      </Tabs>
    </>
  );
};

export default ProjectsTab;
