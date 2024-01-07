import React from "react";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  icon: React.ReactElement;
  label: string;
  active?: boolean;
  onclick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  active,
  onclick,
}) => {
  return (
    <div
      className={twMerge(
        `
        flex 
        flex-row 
        h-auto 
        items-center 
        w-full 
        gap-x-4 
        text-md 
        font-medium
        cursor-pointer
        hover:text-CustomYellow
        transition
        text-neutral-400
        py-1`,
        active && "text-CustomYellow"
      )}
      onClick={onclick}
    >
      {icon}
      <p className="truncate w-100">{label}</p>
    </div>
  );
};

export default SidebarItem;
