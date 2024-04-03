import SelfIntro from "../../components/SelfIntro";
import SkillsTab from "../../components/Tabs/SkillsTab";
import ProjectsTab from "../../components/Tabs/ProjectsTab";
import { ExperienceData } from "../../utils/experienceData";
import ExperienceSection from "../../components/experienceSection";

interface HomepageProps {
  aboutRef: React.RefObject<HTMLHeadingElement>;
  skillRef: React.RefObject<HTMLHeadingElement>;
  projectRef: React.RefObject<HTMLHeadingElement>;
  experienceRef: React.RefObject<HTMLHeadingElement>;
}

const Homepage: React.FC<HomepageProps> = ({
  aboutRef,
  skillRef,
  projectRef,
  experienceRef,
}) => {
  return (
    <div className="w-full h-full text-white flex-col p-4 md:p-8 md:pt-6 items-center">
      <SelfIntro aboutRef={aboutRef} />
      <h1
        ref={skillRef}
        className="text-left text-4xl font-bold opacity-60 text-CustomGrey py-4"
      >
        Skills
      </h1>
      <SkillsTab />
      <h1
        ref={projectRef}
        className="text-left text-4xl font-bold opacity-60 text-CustomGrey py-4"
      >
        Projects
      </h1>
      <ProjectsTab />
      <h1
        ref={experienceRef}
        className="text-left text-4xl font-bold opacity-60 text-CustomGrey py-4"
      >
        Work Experience
      </h1>
      <div className="flex flex-col w-full mt-6 p-6 px-2 md:px-24">
        {ExperienceData.map((item, index) => {
          return <ExperienceSection experience={item} key={index} />;
        })}
      </div>
      {/* <h1
        ref={experienceRef}
        className="text-left text-4xl font-bold opacity-60 text-CustomGrey py-4"
      >
        Contact Me
      </h1> */}
    </div>
  );
};

export default Homepage;
