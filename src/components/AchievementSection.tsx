"use client";
import { Accordion, AccordionItem } from "@/components/Accordion/Accordion";
import { Badge } from "@/components/Badge";
import Image from "next/image";
import Link from "next/link";

const achievementData = [
  {
    event: "Diversion 2K25",
    title: "Won Soul AI Track",
    description: "Built an AI-driven interview and recruitment platform.",
    duration: "Feb 2025",
    link: "https://diversion.tech",
    logo: "https://framerusercontent.com/images/mEJyohoyFhwDzHgTzPe8fgZWGA.png",
    location: "Kolkata",
    type: "Hackathon",
    techStack: ["Next.js", "Flask", "Open AI"],
    projectLinks: [],
  },
  {
    event: "Smart India Hackathon 2K24",
    title: "Finalist",
    description:
      "Built a AI-based frame interpolation system using satellite imagery of weather for WMS service.",
    duration: "11th - 12th Dec 2024",
    logo: "https://sih.gov.in/img1/SIH-Logo.png",
    link: "https://sih.gov.in",
    location: "Ahmedabad, Gujrat",
    type: "Hackathon",
    techStack: ["Next.js", "Flask", "FILM Model", "Leaflet", "WMS"],
    projectLinks: [],
  },
  {
    event: "Hacktoberfest 2K24",
    title: "Finalist",
    description: "Contributed to various open-source projects.",
    duration: "11th - 12th Dec 2024",
    logo: "https://hacktoberfest.com/_next/static/media/logo-hacktoberfest-12--nav.0ac01b46.svg",
    link: "https://hacktoberfest.com",
    location: "Remote",
    type: "Open-Source",
    techStack: [],
    projectLinks: [],
  },
  {
    event: "Open-Source",
    title: "Animata",
    description:
      "Contributed via building a 'Timeline' component to above animation library.",
    duration: "Aug - Dec 2024",
    logo: null,
    link: "https://animata.design",
    location: "Animation Library",
    type: "Open-Source",
    techStack: ["Next.js", "Framer-motion", "TailwindCss"],
    // projectLinks: [],
  },
  {
    event: "HackByte 2.0",
    title: "Won Godspeed Track",
    description:
      "Built sing-sync, a real-time video call sign-language translator for deaf-mute people.",
    duration: "4th - 6th Apr 2024",
    logo: "https://www.hackbyte.in/_next/static/media/HB4Logo.7c4e9af1.svg",
    link: "https://www.hackbyte.in",
    location: "IIITDM Jabalpur",
    type: "Hackathon",
    techStack: ["Next.js", "Flask", "OpenCV"],
    projectLinks: [],
  },
];

export const AchievementSection = () => {
  return (
    <div
      id="achievement"
      className="text-foreground p-4 rounded-[var(--radius)] w-full mx-auto"
    >
      <h2 className="flex items-center justify-center gap-2 text-4xl font-semibold mx-auto w-fit mb-4 text-foreground">
        <Image src={"/icons/achievement.svg"} alt="" width={32} height={32} />
        <span>code:achievement</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start auto-rows-min gap-4">
        {achievementData.map((achievement, index) => (
          <Accordion
            className="card bg-card text-card-foreground hover:bg-card-hover transition-all ease-in-out rounded-lg p-2"
            key={index}
          >
            <AccordionItem
              id={achievement.title}
              trigger={
                <>
                  <Link
                    href={achievement.link || "/"}
                    target="_blank"
                    className="flex gap-2 items-center w-fit hover:underline text-xl font-bold"
                  >
                    {achievement.logo && (
                      <Image
                        className="size-6"
                        src={achievement.logo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    )}
                    {achievement.event}
                  </Link>
                  <div className="transition-all ease-out group rounded-lg p-1">
                    <div className="text-xl font-semibold group-hover:underline">
                      {achievement.title}
                    </div>
                    <div>
                      {achievement.location} | {achievement.type} |{" "}
                      {achievement.duration}
                    </div>
                  </div>
                </>
              }
            >
              <div className="px-1">
                {achievement.description}
                <div className="flex flex-wrap gap-2 mt-2">
                  {achievement.techStack.map((tech, idx) => (
                    <Badge
                      variant="outline"
                      className="text-[14px] text-card-foreground border-card-foreground"
                      key={idx}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
