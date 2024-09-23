import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    name: "Write Flow",
    description: "Write Flow is a clean, intuitive blog app designed for effortless writing and seamless publishing. Stay focused on your creativity with real-time editing and easy formatting",
    techStack: ["TypeScript", "Nextjs"],
    author: "vishal-kumar3",
    link: "https://github.com/vishal-kumar3/WriteFlow"
  },
  {
    id: 2,
    name: "Law Keeper",
    description: "Law Keeper is an administrative platform for managing police operations, including officer recruitment, promotions, and ranks. It also offers e-FIR services and resources for understanding laws, ensuring a comprehensive and efficient law enforcement system.",
    techStack: ["TypeScript", "Nextjs"],
    author: "vishal-kumar3",
    link: "https://github.com/vishal-kumar3/LawKeeper"
  }
];

const WorkSection = () => {
  return (
    <div id='work' className="text-foreground p-4 rounded-[var(--radius)] w-full mx-auto">
      <h2 className="text-4xl font-semibold mx-auto w-fit mb-4 text-foreground">code:work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link target='_blank' href={project.link} key={project.id} className="bg-card text-card-foreground p-4 rounded-[var(--radius)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-md">{project.author}</span>
                <ExternalLink size={16} className="text-card-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-lg leading-5 mb-4">{project.description}</p>
            </div>
            <div className="flex items-center space-x-2">
              {project.techStack.map((tech, index) => (
                <span key={index} className="flex items-center text-sm bg-background text-foreground px-2 py-1 rounded-full">
                  <Code size={15} className="mr-1" />
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;