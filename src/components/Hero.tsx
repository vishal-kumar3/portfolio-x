"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { dataLinks } from '../data/links';
import ThemeToggle from './Theme/ThemeToggle';
import Tooltip from './Tooltip';
import dynamic from 'next/dynamic'
import VishalFallback from './VishalFallback';
import { buttonClickEvent, ButtonEventName } from '@/utils/posthog';

const ColorThemeToggle = dynamic(() => import('@/components/Theme/ColorThemeToggle'), {
  ssr: false,
})

const HeroSection = () => {
  const [tiltStyle, setTiltStyle] = useState({});
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    setTiltStyle({
      transform: `perspective(1000px) rotateY(${(x - 0.5) * 10}deg) rotateX(${(y - 0.5) * -10}deg)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
      transition: 'transform 0.5s ease-out',
    });
  };

  return (
    <section id='#home' className="relative flex flex-col md:gap-8 md:flex-row justify-between items-center py-10 md:py-20 overflow-hidden md:px-8">
      {/* Left part */}
      <div className="relative flex-1 z-10 max-w-xl mb-10 md:mb-0">
        {
          !isMounted ?
            <VishalFallback />
            :
            <Tooltip tip='Change Color Theme'>
              <h1 className="text-7xl md:text-8xl tracking-tighter font-bold mb-4 text-primary">
                <ColorThemeToggle>
                  Visha
                </ColorThemeToggle>
                <span className="relative inline-flex items-center justify-center">
                  <ColorThemeToggle>
                    <span className="relative z-10 pr-[0.4rem]">l</span>
                  </ColorThemeToggle>
                  <ThemeToggle size={20} className="absolute z-50 animate-[bounce_1s_ease-in-out_infinite] -top-3 mx-auto" />
                </span>
              </h1>
            </Tooltip>
        }
        <p className="~text-[22px]/[26px] mb-6 opacity-80">
          Innovative Full Stack Wizard.
          <br />
          Bridging the gap between innovation and functionality.
        </p>
        <div className="flex space-x-5 mb-8 px-2">
          {
            dataLinks.map((link) => (
              <Tooltip key={link.id} tip={link.tip}>
                <Link
                  key={link.id}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={link.onclick}
                  className="text-text transition-colors"
                >
                  {link.icon({ size: 24, className: "w-[40px] h-[40px] p-2 rounded-md hover:bg-elavation-opp_one" })}
                </Link>
              </Tooltip>
            ))
          }
        </div>
        <div className="flex flex-col gap-2">
          <div className="sm:hidden">
            <Link
              href='/resume.pdf'
              target="_blank"
              onClick={() => buttonClickEvent(ButtonEventName.ResumeButton)}
              className="sm:block bg-card text-card-foreground flex items-center justify-center sm:w-fit text-xl md:text-2xl px-6 py-3 rounded-xl border border-card-foreground hover:bg-opacity-80 transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10">Resume 📝</span>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </Link>
          </div>
          <Link
            href='/#work'
            onClick={() => buttonClickEvent(ButtonEventName.DiscoverMyWorkButton)}
            className="bg-card text-card-foreground flex items-center justify-center sm:block sm:w-fit text-xl md:text-2xl px-6 py-3 rounded-xl border border-card-foreground hover:bg-opacity-80 transition-colors relative overflow-hidden group"
          >
            <span className="relative z-10">Discover my work 💼 ↓</span>
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </Link>
        </div>
      </div>

      {/* Right part */}
      <div
        className="relative z-10"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="rounded-[42px] ~w-[300px]/[400px] overflow-hidden shadow-2xl"
          style={tiltStyle}
        >
          <Image
            src='/vishalkumar.jpg'
            width={400}
            height={400}
            alt='Vishal Kumar'
            className='hidden md:block w-full h-full object-cover object-right scale-125 transition-transform hover:scale-110 aspect-square'
          />
          {/* <div className='transition-transform hover:scale-105 aspect-square bg-blue-300 hidden md:block ~size-[250px]/[400px]'></div> */}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-500 opacity-20 blur-2xl -z-10"></div>
      </div>
    </section>
  );
};

export default HeroSection;
