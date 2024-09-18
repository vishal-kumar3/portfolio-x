"use client";

import { useState, useEffect } from "react";
// import Image from 'next/image'
import Link from "next/link";
import Image from "next/image";
import { BiHome } from "react-icons/bi";
import { ImInfo } from "react-icons/im";
import { IoInformation } from "react-icons/io5";
import { FcWorkflow } from "react-icons/fc";
import { CgWorkAlt } from "react-icons/cg";

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
          className={`fixed top-2 z-50 text-xl hidden md:flex md:w-[550px] md:h-[70px] rounded-lg md:px-10 items-center justify-around space-x-6 transition-all duration-300 ease-in-out ${scrolled && "shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-filter backdrop-blur-sm rounded-[10px]"}`}
          style={{ backgroundColor: scrolled ? 'hsl(var(--background)/0.8)' : '' }}
        >
          <Link
            href="/"
            className="text-foreground px-6 py-2 rounded-full hover:bg-background hover:bg-opacity-50 transition-colors duration-300 "
          >
            /
          </Link>
          <Link
            href="/about"
            className="text-foreground px-6 py-2 rounded-full hover:bg-background hover:bg-opacity-50 transition-colors duration-300 "
          >
            about
          </Link>
          <Link
            href="/work"
            className="text-foreground px-6 py-2 rounded-full hover:bg-background hover:bg-opacity-50 transition-colors duration-300 "
          >
            work
          </Link>
        </nav>
        <nav className="md:hidden rounded-t-xl text-xl fixed z-50 bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
          <div className="flex justify-around py-2">
            <Link
              href="/"
              className="text-foreground flex flex-col items-center gap-2 hover:text-saffron-500 transition-colors px-4 py-2"
            >
              <div>
                <BiHome />
              </div>
              <div>
                /
              </div>
            </Link>
            <Link
              href="/about"
              className="text-foreground flex flex-col items-center gap-2 hover:text-saffron-500 transition-colors px-4 py-2"
            >
              <div><IoInformation /></div>
              <div>about</div>
            </Link>
            <Link
              href="/work"
              className="text-foreground flex flex-col items-center gap-2 hover:text-saffron-500 transition-colors px-4 py-2"
            >
              <div><CgWorkAlt /></div>
              <div>work</div>
            </Link>
          </div>
        </nav>
      </header>
      <button className="fixed text-md font-bold top-3 right-5 size-10 flex justify-center items-center rounded-full border border-border overflow-hidden">
        VK
      </button>
    </>
  );
}
