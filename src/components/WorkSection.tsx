import { ExternalLink, Code } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Tooltip from './Tooltip';

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

export interface Repo {
  owner: string;
  repo: string;
  link: string;
  description: string;
  image: string;
  website: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
}

const WorkSection = async () => {
  const res = await fetch(`https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=vishal-kumar3`)
  const repos = await res.json()

  return (
    <div id='work' className="text-foreground p-4 rounded-[var(--radius)] w-full mx-auto">
      <h2 className="flex items-center justify-center gap-2 text-4xl font-semibold mx-auto w-fit mb-4 text-foreground">
        <Image
          src={"/icons/work.svg"}
          alt=' '
          width={32}
          height={32}
        />
        <span>
          code:work
        </span>
      </h2>
      {/* <GitHubPinnedRepos /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo: Repo) => (
          <div key={repo.repo} className="bg-card text-card-foreground p-4 rounded-[var(--radius)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Link href={`https://github.com/${repo.owner}`} className='flex items-center gap-2'>
                  <Image
                    src={`https://github.com/${repo.owner.split("/")[0]}.png`}
                    alt={repo.owner}
                    className="rounded-full"
                    width={20}
                    height={20}
                  />
                  <span className="text-md">
                    {repo.owner}
                  </span>
                </Link>
                <div className="flex items-center gap-4">
                  {
                    repo.website && (
                      <Tooltip tip={`${repo.website}`}>
                        <Link href={repo.website} target="_blank">
                          🚀
                        </Link>
                      </Tooltip>
                    )
                  }
                  <Tooltip tip={`${repo.link}`}>
                    <Link href={repo.link} target="_blank">
                      <ExternalLink size={16} className="text-card-foreground" />
                    </Link>
                  </Tooltip>
                </div>
              </div>
              <Link href={repo.link} target="_blank" className="text-2xl hover:underline font-semibold mb-2">
                {repo.repo}
              </Link>
              <p className="text-lg leading-5 mb-4">{repo.description}</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="info flex gap-[.2rem] items-center">
                <span
                  className="dot h-[11px] w-[11px] rounded-[50%] inline-block text-accent"
                  style={{ backgroundColor: repo.languageColor }}
                />
                <h6>{repo.language}</h6>
              </div>
              {repo.stars > 0 && (
                <>
                  <Image
                    width={16}
                    height={16}
                    className="h-[16px] w-auto translate-y-[-1px]"
                    src="icons/star.svg"
                    id="star"
                    alt="star"
                  />
                  <h6>{repo.stars}</h6>
                </>
              )}
              {repo.forks > 0 && (
                <>
                  <Image
                    width={16}
                    height={16}
                    className="h-[17px]"
                    src="icons/fork.svg"
                    id="fork"
                    alt="fork"
                  />
                  <h6>{repo.forks}</h6>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
