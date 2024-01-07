import React from "react";

export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  name: string;
  description: string;
  images: Image[];
  liveLink: string;
  githubLink: string;
  skills: Skill[];
  isFeatured: boolean;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string[];
  isCurrent: boolean;
}

export interface Image {
  url: string;
  alt: string;
}

export interface Social {
  name: string;
  url: string;
  icon: React.ReactElement;
}

export interface Contact {
  name: string;
  url: string;
  icon: React.ReactElement;
}
