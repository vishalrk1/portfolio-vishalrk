import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Box from "./components/Box";
import SidebarItem from "./components/SidebarItem";
import { socialMediaData } from "./utils/socialMediaData";
import { SocialMediaButton } from "./components/Tabs/SocialMediaButton";
import { useRef, useState } from "react";
import { Briefcase, Folder, Settings, User } from "lucide-react";
import { Route } from "./utils/RoutesData";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const [routesData, setRoutesData] = useState<Route[]>([
    {
      icon: <User size={24} />,
      label: "Introduction",
      active: true,
      refObj: aboutRef,
    },
    {
      icon: <Settings size={24} />,
      label: "Skills",
      active: false,
      refObj: skillsRef,
    },
    {
      icon: <Folder size={24} />,
      label: "Projects",
      active: false,
      refObj: projectsRef,
    },
    {
      icon: <Briefcase size={24} />,
      label: "Experience",
      active: false,
      refObj: experienceRef,
    },
  ]);

  const handleItemClick = (index: number) => {
    const updatedRoutesData = routesData.map((item, i) => {
      if (i === index) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    });
    setRoutesData(updatedRoutesData);

    // Scroll to the clicked section using the reference
    routesData[index].refObj.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="h-screen w-screen bg-BgBlack">
      <div className="flex h-full">
        <div
          className="
          hidden 
          md:flex 
          flex-col 
          gap-y-2 
          h-full 
          w-[300px] 
          p-2
        "
        >
          <Box className="p-4 h-full">
            <p className="font-bold text-xl text-gray-400 mt-3 mb-5">
              SECTIONS
            </p>
            <div className="flex flex-col space-y-5">
              {routesData.map((item, index) => (
                <SidebarItem
                  icon={item.icon}
                  label={item.label}
                  active={item.active}
                  onclick={() => handleItemClick(index)}
                  key={index}
                />
              ))}
            </div>
          </Box>
          <Box className="p-4 h-max">
            <p className="font-bold text-xl text-gray-400 mt-3 mb-5">SOCIALS</p>
            <div className="flex flex-col space-y-2">
              {socialMediaData.map((item, index) => (
                <SocialMediaButton
                  icon={item.icon}
                  label={item.label}
                  url={item.url}
                  key={index}
                />
              ))}
            </div>
          </Box>
        </div>
        <main className="h-full flex-2 overflow-y-auto md:py-2">
          <Box className="mr-0 md:mr-3">
            <Homepage
              aboutRef={aboutRef}
              skillRef={skillsRef}
              projectRef={projectsRef}
              experienceRef={experienceRef}
            />
          </Box>
        </main>
      </div>
    </div>
  );
}

export default App;
