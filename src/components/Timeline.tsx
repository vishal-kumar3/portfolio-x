
import { Calendar, Trophy } from "lucide-react"
import { Badge } from "@/components/Badge"
import Image from "next/image"

const achievements = [
  {
    date: "Feb 2025",
    title: "Diversion 2025",
    description: "Won Soul AI Track for AI-driven interview and recruitment platform.",
    icon: <Trophy className="h-6 w-6" />,
    category: "hackathon",
    link: "https://github.com/vishal-kumar3/CVision",
    skills: ["Next.js", "Flask"],
  },
  {
    date: "Jan 2025 - Present",
    title: "Fiel",
    description: "Backend Developer Intern",
    icon: <Trophy className="h-6 w-6" />,
    category: "Internship",
    link: "https://www.linkedin.com/company/thefiel",
    skills: ["Node.js"],
  },
  {
    date: "11-12th Dec 2024",
    title: "Smart India Hackathon 2024: Finalist",
    description: "AI-based frame interpolation system using satellite imagery of weather for WMS service.",
    icon: <Trophy className="h-6 w-6" />,
    category: "hackathon",
    skills: ["Next.js", "Flask", "FILM Model"],
  },
  {
    date: "Oct-Nov 2024",
    title: "Hacktoberfest 2024",
    description: "Contributed to various open-source projects during Hacktoberfest.",
    icon: <Trophy className="h-6 w-6" />,
    category: "Open Source",
    link: "https://www.linkedin.com/posts/vishal-kumar3_hacktoberfest2024-hacktoberfest-opensource-activity-7252142180574642177-kv_2",
    skills: ["Next.js", "Node.js", "React.js"],
  },
  {
    date: "Oct-Nov 2024",
    title: "Animate: Contributor",
    description: "Contributed to the development of an open-source animation library.",
    icon: <Trophy className="h-6 w-6" />,
    category: "Open Source",
    link: "https://github.com/vishal-kumar3/animata",
    skills: ["Next.js"],
  },
  {
    date: "5th Apr 2024",
    title: "HackByte 2.0",
    description: "Won Godspeed Track for exceptional performance in hackathon.",
    icon: <Trophy className="h-6 w-6" />,
    category: "hackathon",
    skills: ["Godspeed", "Next.js"],
  },
]

export default function Timeline() {

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "hackathon":
        return {
          bg: "bg-gradient-to-r from-purple-500 to-indigo-600",
          text: "text-white",
          light: "bg-purple-100",
          border: "border-purple-300",
          icon: "text-purple-600",
        }
      case "achievement":
        return {
          bg: "bg-gradient-to-r from-teal-500 to-emerald-600",
          text: "text-white",
          light: "bg-teal-100",
          border: "border-teal-300",
          icon: "text-teal-600",
        }
      case "Internship":
        return {
          bg: "bg-gradient-to-r from-orange-500 to-yellow-600",
          text: "text-white",
          light: "bg-orange-100",
          border: "border-orange-300",
          icon: "text-orange-600",
        }
      case "Open Source":
        return {
          bg: "bg-gradient-to-r from-blue-500 to-cyan-600",
          text: "text-white",
          light: "bg-blue-100",
          border: "border-blue-300",
          icon: "text-blue-600",
        }
      default:
        return {
          bg: "bg-gradient-to-r from-gray-500 to-gray-600",
          text: "text-white",
          light: "bg-gray-100",
          border: "border-gray-300",
          icon: "text-gray-600",
        }
    }
  }

  return (
    <section id='timeline' className="text-foreground p-4 w-full mx-auto">
      <div className="mb-10">
        <h2 className="flex items-center justify-center gap-2 text-4xl font-semibold mx-auto w-fit mb-4 text-foreground">
          <Image
            src={"/icons/timeline.svg"}
            alt=' '
            width={32}
            height={32}
          />
          <span>
            code:timeline
          </span>
        </h2>
      </div>
      <div className="relative">
        {/* Timeline center line - visible on larger screens, hidden on mobile */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 rounded-full hidden md:block"></div>

        {/* Timeline left line - visible only on mobile */}
        <div className="absolute left-7 top-0 h-full w-1 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 rounded-full md:hidden"></div>

        <div className="space-y-12 md:space-y-16">
          {achievements.map((item, index) => {
            const colors = getCategoryColor(item.category)
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className="relative"
              >
                {/* Date indicator - centered on desktop, left-aligned on mobile */}
                <div
                  className={`absolute ${isEven ? "md:left-1/2" : "md:left-1/2"} left-7 transform ${isEven ? "md:-translate-x-1/2" : "md:-translate-x-1/2"} -translate-y-1/2 z-10`}
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg border border-gray-100">
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-full ${colors.light} ${colors.icon}`}
                    >
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Content card - alternating on desktop, always right-aligned on mobile */}
                <div
                  className={`relative ${isEven ? "md:mr-auto md:pr-24 md:pl-0 md:text-right" : "md:ml-auto md:pl-24 md:pr-0 md:text-left"
                    } pl-24 pr-4 ml-0 mr-0 text-left w-full md:w-1/2 mb-8`}
                >
                  <div
                    className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl ${colors.bg}`}></div>

                    <div
                      className={`flex items-center mb-3 gap-2 ${isEven ? "md:justify-end" : "md:justify-start"} justify-start`}
                    >
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500 font-medium">{item.date}</span>
                    </div>

                    <div className={`flex ${isEven ? "md:justify-end" : "md:justify-start"} justify-start mb-3`}>
                      <Badge className={`${colors.bg} ${colors.text}`}>
                        {item.category[0].toUpperCase() + item.category.slice(1)}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>

                    <div
                      className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "md:justify-start"} justify-start`}
                    >
                      {item.skills.map((skill, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {item.link && (
                      <div className={`mt-4 ${isEven ? "md:text-right" : "md:text-left"} text-left`}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          View Details →
                        </a>
                      </div>
                    )}

                    {/* Connecting line - different positioning for mobile vs desktop */}
                    <div
                      className={`absolute top-6 ${isEven ? "md:right-12 left-[-18px] md:left-auto" : "md:left-12 left-[-18px]"
                        } w-10 h-0.5 ${colors.bg}`}
                    ></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
