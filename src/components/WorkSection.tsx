import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Tooltip from './Tooltip';
import RepoCard from './RepoCard';
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
          <RepoCard repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
