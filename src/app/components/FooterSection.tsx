import { Mail, Coffee, Home, Info, Briefcase } from 'lucide-react'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="text-card-foreground p-4">
      <hr className='border-foreground mb-10' />
      <div className="container mx-auto">
        <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
          <div className="flex gap-10">
            <Link href="https://github.com" className="text-card-foreground hover:text-foreground">
              <BsGithub size={24} />
            </Link>
            {/* <Link href="https://mastodon.social" className="text-card-foreground hover:text-foreground">
              <Mastodon size={24} />
            </Link> */}
            <Link href="mailto:example@example.com" className="text-card-foreground hover:text-foreground">
              <Mail size={24} />
            </Link>
            <Link href="/coffee" className="text-card-foreground hover:text-foreground">
              <Coffee size={24} />
            </Link>
          </div>
          <div className="text-md text-card-foreground">
            What's sleep? Asking for a friend.
          </div>
        </div>
      </div>
    </footer>
  )
}
