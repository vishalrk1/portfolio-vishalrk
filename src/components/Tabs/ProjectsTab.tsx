import Tabs from "./Tabs";
import Tab from "./Tab";
import ProjectCard from "../ProjectCard";
import { ProjectsData } from "../../utils/projectsData";

const ProjectsTab = () => {
  const featuredProject = ProjectsData.filter(
    (item) => item.isFeatured === true
  );
  return (
    <Tabs>
      <Tab label="Featured">
        <div className="flex flex-row gap-5 justify-center md:justify-center flex-wrap w-full p-4 px-0">
          {featuredProject.map((item, index) => (
            <ProjectCard projectItem={item} key={index} />
          ))}
        </div>
      </Tab>
      <Tab label="All">
        <div className="flex flex-row gap-5 justify-center md:justify-center flex-wrap w-full p-0">
          {ProjectsData.map((item, index) => (
            <ProjectCard projectItem={item} key={index} />
          ))}
        </div>
      </Tab>
    </Tabs>
  );
};

export default ProjectsTab;
