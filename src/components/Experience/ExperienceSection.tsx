"use client";
import { Accordion, AccordionItem } from "@/components/Accordion/Accordion";
import { Badge } from "@/components/Badge";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const Highlight = ({ children }: { children: ReactNode }) => {
  return <span className="font-semibold">{children}</span>;
};

const experienceData = [
  {
    title: "Backend Developer",
    description: [
      <>
        Built and integrated a{" "}
        <Highlight>GitHub Actions CI/CD workflow</Highlight> for backend service{" "}
        <Highlight>deployment to AWS EC2</Highlight>, enabling automated builds,
        tests, and zero-downtime updates
      </>,
      <>
        Developed a <Highlight>real-time leaderboard</Highlight> service for
        esports tournaments.
      </>,
      <>
        Implemented <Highlight>live commentary</Highlight> and game update
        features.
      </>,
    ],
    company: "Espo",
    companyLogo: "https://esponews.in/ESPO.svg",
    companyLink: "https://www.linkedin.com/company/esponews",
    type: "full-time",
    duration: "July 2025 - Present",
    location: "Remote",
    techStack: [
      "Node.js",
      "Postgres",
      "MongoDB",
      "AWS",
      "CI/CD",
      "Socket.io",
      "Redis",
      "Postman Docs",
    ],
  },
  {
    title: "Backend Developer Intern",
    description: [
      <>
        Built <Highlight>live booking service</Highlight> with{" "}
        <Highlight>geospatial filtering</Highlight> algorithms and{" "}
        <Highlight>push notifications</Highlight>.
      </>,
      <>
        Integrated <Highlight>Razorpay payment</Highlight> gateway with refund
        mechanisms.
      </>,
      <>
        Created <Highlight>analytics platform</Highlight> for admins leveraging{" "}
        <Highlight>mongoDB&apos;s aggregation pipelines</Highlight>.
      </>,
    ],
    company: "Fiel",
    companyLogo: "https://thefiel.com/assets/images/logo.jpg",
    companyLink: "https://www.linkedin.com/company/thefiel",
    type: "full-time",
    duration: "Jan 2025 - June 2025",
    location: "Remote",
    techStack: [
      "Node.Js",
      "MongoDB",
      "Socket.io",
      "React.Js",
      "Tanstack-Query",
      "Swagger Docs",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <div
      id="experience"
      className="text-foreground p-4 rounded-[var(--radius)] w-full mx-auto"
    >
      <h2 className="flex items-center justify-center gap-2 text-4xl font-semibold mx-auto w-fit mb-4 text-foreground">
        <Image src={"/icons/experience.svg"} alt="" width={32} height={32} />
        <span>code:experience</span>
      </h2>
      <div className="space-y-5">
        {experienceData.map((experience, index) => (
          <Accordion
            className="card bg-card text-card-foreground hover:bg-card-hover transition-all ease-in-out rounded-lg p-2"
            key={index}
          >
            <AccordionItem
              id={experience.company}
              trigger={
                <>
                  <Link
                    href={experience.companyLink}
                    target="_blank"
                    className="flex gap-2 items-center w-fit hover:underline text-xl font-bold"
                  >
                    {experience.companyLogo && (
                      <Image
                        className="size-6 bg-black"
                        src={experience.companyLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    )}
                    {experience.company}
                  </Link>

                  <div className="transition-all ease-out group rounded-lg p-1">
                    <div className="text-xl font-semibold group-hover:underline">
                      {experience.title}
                    </div>
                    <div>
                      {experience.location} | {experience.type} |{" "}
                      {experience.duration}
                    </div>
                  </div>
                </>
              }
            >
              <ul className="pl-8">
                {experience.description.map((des, idx) => (
                  <li className="list-item list-disc" key={idx}>
                    {des}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.techStack.map((tech, idx) => (
                  <Badge
                    variant="outline"
                    className="text-[14px] text-card-foreground border-card-foreground"
                    key={idx}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
