import { Briefcase, Folder, Settings, User } from "lucide-react";
import React, { useRef } from "react";

export interface Route {
  icon: React.ReactElement;
  label: string;
  active?: boolean;
  refObj: React.RefObject<any>;
}

// export const RoutesData = [
//   {
//     icon: <User size={24} />,
//     label: "Introduction",
//     active: true,
//     // refObj: SkillRef,
//   },
//   {
//     icon: <Settings size={24} />,
//     label: "Skills",
//     active: false,
//     // refObj: SkillRef,
//   },
//   {
//     icon: <Folder size={24} />,
//     label: "Projects",
//     active: false,
//     // refObj: ProjectsRef,
//   },
//   {
//     icon: <Briefcase size={24} />,
//     label: "Experience",
//     active: false,
//     // refObj: ExperienceRef,
//   },
// ] as Route[];
