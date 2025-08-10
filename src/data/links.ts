"use client";
import { socialClickEvent, SocialEventName } from "@/utils/posthog";
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const dataLinks = [
  {
    id: 1,
    icon: FaGithub,
    name: "Github",
    link: "https://github.com/vishal-kumar3",
    tip: "vishal-kumar3",
    onclick: () => {
      socialClickEvent(SocialEventName.Github);
    },
  },
  {
    id: 2,
    icon: FaDiscord,
    name: "Discord",
    link: "https://discord.com/users/954279073234956308",
    tip: "vishal_kumar3",
    onclick: () => {
      socialClickEvent(SocialEventName.Discord);
    },
  },
  {
    id: 3,
    icon: FaEnvelope,
    name: "Email",
    link: "mailto:kumarvishal823003@gmail.com",
    tip: "kumarvishal823003@gmail.com",
    onclick: () => {
      socialClickEvent(SocialEventName.Mailto);
    },
  },
  {
    id: 4,
    icon: FaLinkedin,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vishal-kumar-61b2b4254/",
    tip: "LinkedIn Profile",
    onclick: () => {
      socialClickEvent(SocialEventName.Linkedin);
    },
  },
  {
    id: 5,
    icon: SiLeetcode,
    name: "Leetcode",
    link: "https://leetcode.com/u/VishalKumar10/",
    tip: "Leetcode",
    onclick: () => {
      socialClickEvent(SocialEventName.Leetcode);
    },
  },
];

export const resumeLink =
  process.env.RESUME_LINK ||
  "https://drive.google.com/file/d/1Pe8675ZCnk1q1LxbSuq1HYaQVzMvv5ry/view?usp=drive_link";
