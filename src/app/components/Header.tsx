"use client";

import { useState, useEffect } from "react";
// import Image from 'next/image'
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { IoInformation } from "react-icons/io5";
import { CgWorkAlt } from "react-icons/cg";
import { cn } from "../lib/utils";

const navigationTabs = [
  {
    href: "/#home",
    topTitle: "/",
    title: "Home",
    icon: <BiHome />,
  },
  {
    href: "/#about",
    topTitle: "about",
    title: "About",
    icon: <IoInformation />,
  },
  {
    href: "/#work",
    topTitle: "work",
    title: "Work",
    icon: <CgWorkAlt />,
  }
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="flex items-center justify-center transition-all duration-300">
        <nav
          className={cn(
            "fixed top-2 z-50 text-xl border hidden md:flex md:w-[550px] md:h-[70px] rounded-lg md:px-10 items-center justify-around space-x-6 transition-all duration-300 ease-in-out",
            scrolled ? "shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border-elavation-opp_one backdrop-filter backdrop-blur-sm webkit_backdrop_filter_15px rounded-[10px]" : "border-transparent"
          )}
          style={{
            backgroundColor: scrolled ? 'var(--elavation-two)' : '',
            // opacity: scrolled ? 0.5 : 1,
          }}
        >
          {
            navigationTabs.map((tab) => (
            <Link
              key={tab.title}
              href={tab.href}
              className="text-foreground opacity-1 px-6 py-2 rounded-full hover:bg-elavation-opp_one transition-colors duration-300 "
            >
              {tab.topTitle}
            </Link>
          ))
        }
        </nav>
        <nav className="md:hidden rounded-t-xl text-xl fixed z-50 bottom-0 left-0 right-0 bg-card backdrop-blur-sm">
          <div className="flex justify-around py-2">
            {
              navigationTabs.map((tab) => (
                <Link
                  key={tab.title}
                  href={tab.href}
                  className="text-card-foreground flex flex-col items-center gap-2 hover:text-saffron-500 transition-colors px-4 py-2"
                >
                  <div>{tab.icon}</div>
                  <div>{tab.title}</div>
                </Link>
            ))
            }
          </div>
        </nav>
      </header>
      <Link href='/resume.pdf' target="_blank" className="fixed hover:animate-none animate-[spin_3s_linear_infinite] text-md font-bold top-3 right-5 size-10 flex justify-center items-center rounded-full border border-border overflow-hidden">
        VK
      </Link>
    </>
  );
}
