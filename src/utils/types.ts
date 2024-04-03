import React from "react";

export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  name: string;
  description: string;
  liveLink: string;
  githubLink: string;
  isFeatured: boolean;
  images: Image[];
  skills: Skill[];
  projectFeatures: String[];
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
