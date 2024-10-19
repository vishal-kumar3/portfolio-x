import React from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

export interface Repo {
  owner: string
  repo: string
  link: string
  description: string
  image: string
  website: string
  language: string
  languageColor: string
  stars: string
  forks: any
}

async function fetchPinnedRepos(username: string): Promise<Repo[]> {
  const res = await fetch(`https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=${username}`, { next: { revalidate: 3600 } })
  if (!res.ok) throw new Error('Failed to fetch repos')
  return res.json()
}

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <div className="bg-blue-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-40">
        <Image
          src={repo.image || '/placeholder.svg'}
          alt={`${repo.repo} preview`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        <div className="absolute top-0 right-0 m-2 bg-white rounded-full p-1">
          <a href={repo.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-2">{repo.repo}</h3>
        <p className="text-sm text-blue-700 mb-4">{repo.owner}</p>
        <p className="text-blue-600 mb-4 line-clamp-3">{repo.description}</p>
        <div className="flex flex-wrap gap-2">
          {repo.language && (
            <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs font-semibold rounded-full">
              {repo.language}
            </span>
          )}
          {repo.stars && (
            <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs font-semibold rounded-full">
              ⭐ {repo.stars}
            </span>
          )}
          {repo.forks && (
            <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs font-semibold rounded-full">
              🍴 {repo.forks}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default async function GitHubPinnedRepos({ username = 'vishal-kumar3' }) {
  let repos: Repo[]
  try {
    repos = await fetchPinnedRepos(username)
  } catch (error) {
    console.error('Error fetching repos:', error)
    return <div className="text-red-500">Failed to load repositories. Please try again later.</div>
  }

  return (
    // <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <RepoCard key={repo.repo} repo={repo} />
        ))}
      </div>
    // {/* </div> */}
  )
}
