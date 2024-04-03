import React from "react";
import { Skill } from "../../utils/types";
import SkillBadge from "../skillBadge";

interface TabContentProps {
  data: Skill[];
}

const TabContent: React.FC<TabContentProps> = ({ data }) => {
  return (
    <div className="text-center text-CustomGrey">
      <div className="flex flex-row flex-wrap gap-3 items-center md:gap-5">
        {data.map((item, index) => (
          <SkillBadge key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default TabContent;
