import React from "react";
import { twMerge } from "tailwind-merge";

interface SocialMediaButtonProps {
  icon: React.ReactElement;
  label: string;
  url: string;
}

export const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  icon,
  label,
  url,
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
        py-1`
      )}
      onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
    >
      {icon}
      <p className="truncate w-100">{label}</p>
    </div>
  );
};
