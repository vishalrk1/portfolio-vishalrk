import { Box } from "lucide-react";
import React from "react";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
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
        <Box>Side Bar 1</Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">
        <Box>{children}</Box>
      </main>
    </div>
  );
};

export default Sidebar;
