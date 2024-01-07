import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

export interface SocialMedia {
  icon: React.ReactElement;
  label: string;
  url: string;
}

// Footer.tsx uses this data
export const socialMediaData: SocialMedia[] = [
  {
    icon: <LinkedinIcon size={24} />,
    label: "LinkedIn",
    url: "https://linkedin.com/in/vishal-karangale",
  },
  {
    icon: <GithubIcon size={24} />,
    label: "Github",
    url: "https://www.github.com/vishalrk1",
  },
  {
    icon: <TwitterIcon size={24} />,
    label: "Twitter",
    url: "https://twitter.com/KarangaleVishal",
  },
  {
    icon: <InstagramIcon size={24} />,
    label: "Instagram",
    url: "https://www.instagram.com/",
  },
];
