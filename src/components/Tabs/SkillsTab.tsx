import React from "react";
import Tabs from "./Tabs";
import Tab from "./Tab";
import TabContent from "./TabContent";
import {
  AI_DSData,
  BackendData,
  FrontendData,
  PrograminLanguagesData,
} from "../../utils/skillsData";

const SkillsTab = () => {
  return (
    <Tabs>
      <Tab label="Programing Languages">
        <TabContent data={PrograminLanguagesData} />
      </Tab>
      <Tab label="Data Science">
        <TabContent data={AI_DSData} />
      </Tab>
      <Tab label="Frontend">
        <TabContent data={FrontendData} />
      </Tab>
      <Tab label="Backend">
        <TabContent data={BackendData} />
      </Tab>
    </Tabs>
  );
};

export default SkillsTab;
