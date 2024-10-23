"use client"
import Link from 'next/link'
import { dataLinks } from '../data/links'
import Tooltip from './Tooltip'

export default function Footer() {
  return (
    <footer className="dark:text-card text-foreground p-4">
      <hr className='border-foreground mb-10' />
      <div className="container mx-auto">
        <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
          <div className="flex gap-5">
            {
              dataLinks.map((link) => (
                <Tooltip key={link.id} tip={link.tip}>
                  <Link
                    key={link.id}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={link.onclick}
                    className="text-text text-foreground transition-colors"
                  >
                    {link.icon({ size: 24, className: "w-[40px] h-[40px] p-2 rounded-md hover:bg-card-hover hover:text-card-hover-foreground" })}
                  </Link>
                </Tooltip>
              ))
            }
          </div>
          <div className="text-md text-foreground">
            What's sleep? Asking for a friend.
          </div>
        </div>
      </div>
    </footer>
  )
}
