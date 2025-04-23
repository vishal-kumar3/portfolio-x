"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { IoInformation } from "react-icons/io5";
import { CgWorkAlt } from "react-icons/cg";
import { cn } from "../lib/utils";
import { buttonClickEvent, ButtonEventName } from "@/utils/posthog";
import { PiFlaskFill } from "react-icons/pi";
import Tooltip from "./Tooltip";
import { resumeLink } from "../data/links";
import { Clock } from "lucide-react";

const navigationTabs = [
  {
    href: "/#home",
    topTitle: "/",
    title: "Home",
    icon: <BiHome />,
    onclick: () => { buttonClickEvent(ButtonEventName.HomeNavbar) }
  },
  {
    href: "/#about",
    topTitle: "about",
    title: "About",
    icon: <IoInformation />,
    onclick: () => { buttonClickEvent(ButtonEventName.AboutNavbar) }
  },
  {
    href: "/#skill",
    topTitle: "skill",
    title: "Skill",
    icon: <PiFlaskFill />,
    onclick: () => { buttonClickEvent(ButtonEventName.SkillButton) }
  },
  {
    href: "/#work",
    topTitle: "work",
    title: "Work",
    icon: <CgWorkAlt />,
    onclick: () => { buttonClickEvent(ButtonEventName.WorkNavbar) }
  },
  {
    href: "/#timeline",
    topTitle: "timeline",
    title: "Timeline",
    icon: <Clock />,
    onclick: () => { buttonClickEvent(ButtonEventName.TimelineButton) }
  },

]

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    setScrolled(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="flex items-center justify-center transition-all duration-300">
        <nav
          className={cn(
            "fixed top-2 z-50 text-xl border hidden md:flex md:w-[610px] md:h-[70px] rounded-lg md:px-10 items-center justify-around space-x-6 transition-all duration-300 ease-in-out",
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
                onClick={tab.onclick}
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
                  onClick={tab.onclick}
                  className="text-card-foreground rounded-md flex flex-col items-center gap-2 hover:bg-card-hover hover:text-card-hover-foreground transition-colors px-4 py-2"
                >
                  <div>{tab.icon}</div>
                  <div>{tab.title}</div>
                </Link>
              ))
            }
          </div>
        </nav>
      </header>
      <div className="hidden sm:fixed z-50 top-5 right-5 size-10 sm:flex">
        <Tooltip tip="Resume.pdf" direction="left">
          <Link
            href={resumeLink}
            target="_blank"
            onClick={() => buttonClickEvent(ButtonEventName.ResumeButton)}
            className="hidden sm:fixed z-50 bg-[#94b8ff] text-card-foreground hover:animate-none animate-[spin_3s_linear_infinite] text-md font-bold top-5 right-5 size-10 sm:flex justify-center items-center rounded-full overflow-hidden"
          >
            CV
          </Link>
        </Tooltip>
      </div>
      {/* <SpicyResumeLink buttonClickEvent={() => buttonClickEvent(ButtonEventName.ResumeButton)} /> */}
    </>
  );
}
