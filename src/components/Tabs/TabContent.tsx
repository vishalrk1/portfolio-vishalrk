import React from "react";
import { Skill } from "../../utils/types";

interface TabContentProps {
  data: Skill[];
}

const TabContent: React.FC<TabContentProps> = ({ data }) => {
  return (
    <div className="text-center text-CustomGrey">
      <div className="flex flex-row flex-wrap gap-3 items-center md:gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex h-[40px] w-[150px] md:w-[200px] bg-gray-600 rounded-md items-center justify-center p-4 space-x-2"
          >
            {item.icon ? (
              <img src={item.icon} alt={item.name} className="w-8 h-8" />
            ) : null}
            <p className="text-sm md:text-lg text-CustomGrey">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabContent;
