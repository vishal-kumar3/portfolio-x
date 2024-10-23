
import { IconType } from 'react-icons'
import {
  SiNextdotjs, SiGoogle, SiPostgresql, SiTypescript,
  SiNodedotjs,
  SiGithub,
  SiLinux
} from 'react-icons/si'
import {
  FaEnvelope, FaChartBar,
  FaCube,
  FaNetworkWired
} from 'react-icons/fa'
import { BsDroplet } from 'react-icons/bs'
import Image from 'next/image'
import { DiPostgresql } from 'react-icons/di'
import { BiLogoPostgresql } from 'react-icons/bi'

type Skill = {
  name: string
  icon: IconType
}

const skills: Skill[] = [
  { name: 'Next.js/ React.js', icon: SiNextdotjs },
  { name: 'Typescript', icon: SiTypescript },
  { name: "Node.js/ Golang", icon: SiNodedotjs },
  { name: 'SQL/NoSQL Database', icon: BiLogoPostgresql },
  // { name: 'Zustand / Redux', icon: FaCube },
  { name: "Websockets", icon: FaNetworkWired },
  // { name: "CI/CD", icon: SiTypescript },
  // { name: "Serverless Architecture", icon: SiTypescript },
  // { name: "Microservice Architecture", icon: SiTypescript},
  // { name: "Kubernetes", icon: SiTypescript },
  // { name: 'Version Control', icon: SiGithub },
  // { name: 'Linux', icon: SiLinux },
  { name: 'Analytics (Posthog)', icon: FaChartBar },
]

export default function SkillsShowcase() {
  return (
    <section id='skill' className="text-foreground p-4 w-full mx-auto">
      <h2 className="flex items-center justify-center gap-2 text-4xl font-semibold mx-auto w-fit mb-4 text-foreground">
        <Image
          src={"/icons/skills.svg"}
          alt=' '
          width={32}
          height={32}
        />
        <span>
          code:skill
        </span>
      </h2>
      <div className="text-card-foreground p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 content-center md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="card flex items-center space-x-3 p-3 rounded-lg bg-card hover:bg-card-hover hover:text-card-hover-foreground transition-colors duration-300"
              >
                <skill.icon className="text-2xl" />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
