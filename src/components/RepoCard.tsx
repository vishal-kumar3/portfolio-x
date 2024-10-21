"use client"
import React from 'react'
import { Repo } from './WorkSection'
import Link from 'next/link'
import Image from 'next/image'
import Tooltip from './Tooltip'
import { ExternalLink } from 'lucide-react'
import { projectClickEvent, ProjectEventName, socialClickEvent, SocialEventName } from '@/utils/posthog'

type props = {
  repo: Repo
}

const RepoCard = ({repo}: props) => {
  return (
    <div key={repo.repo} className="bg-card text-card-foreground p-4 rounded-[var(--radius)] flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-2">
          <Link
            href={`https://github.com/${repo.owner}`}
            onClick={() => socialClickEvent(SocialEventName.Github)}
            className='flex items-center gap-2'
          >
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
                  <Link
                    href={repo.website}
                    onClick={() => projectClickEvent(ProjectEventName.Live, repo.repo)}
                    target="_blank"
                  >
                    🚀
                  </Link>
                </Tooltip>
              )
            }
            <Tooltip tip={`${repo.link}`}>
              <Link
                href={repo.link}
                onClick={() => projectClickEvent(ProjectEventName.Repo, repo.repo)}
                target="_blank"
              >
                <ExternalLink size={16} className="text-card-foreground" />
              </Link>
            </Tooltip>
          </div>
        </div>
        <Link
          href={repo.link}
          target="_blank"
          onClick={() => projectClickEvent(ProjectEventName.Repo, repo.repo)}
          className="text-2xl hover:underline font-semibold mb-2"
        >
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
  )
}

export default RepoCard
