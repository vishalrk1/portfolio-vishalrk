import { Experience } from "./types";

export const ExperienceData = [
  {
    company: "JIO Platforms",
    position: "Frontend Developer",
    description: [
      "Working on Chatbot for farmers. goal is to create an LLM based chatbot that can assist agronomists to resolve farmers queries with the help provided data.",
      "We are using different version of Meta's LLAMA 2 model for this chatbot. i have built an API with LLAMA 2, retrival QA pipeline of langchain and django to include this chatbot in our webapp.",
      "Furthermore, I actively contribute to the Frontend team of Jio Cloud Gaming, a platform built with Next.js., i have mainly worked on fixing bugs on website.",
      "Alog with web I have been working on a Internal mobile application with React Native"
    ],
    isCurrent: true,
    startDate: "6-12-2023",
  },
  {
    company: "HDFC Life",
    position: "AI Intern",
    description: [
      "Utilized GAN models (Swimswap, First-order-model, LIP GAN) to create personalized insurance ads/videos. Employed TTS models (Tacotron, Fastspeech, VITS) for voice cloning/synthesis, enhancing customer engagement.",
      "Developed an anti-face spoofing detection model to improve and prevent attacks on the face recognition system",
      "Worked in all project phases in Agile/Scrum methodology with Jira",
    ],
    isCurrent: false,
    startDate: "6-9-2022",
    endDate: "1-9-2023",
  },
] as Experience[];
