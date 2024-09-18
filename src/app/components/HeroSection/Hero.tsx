"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaDiscord, FaEnvelope, FaCoffee } from 'react-icons/fa';
import Link from 'next/link';

const HeroSection = () => {
  const [tiltStyle, setTiltStyle] = useState({});

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
    <section className="relative flex flex-col md:gap-8 md:flex-row justify-between items-center py-10 md:py-20 overflow-hidden md:px-8">
      {/* Left part */}
      <div className="relative flex-1 z-10 max-w-xl mb-10 md:mb-0">
        <h1 className="text-7xl md:text-8xl tracking-tighter font-bold mb-4 text-primary">
          Vishal
        </h1>
        <p className="~text-[22px]/[26px] mb-6 opacity-80">
          Innovative Full Stack Wizard.
          <br />
          Bridging the gap between innovation and functionality.
        </p>
        <div className="flex space-x-10 mb-8">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://discord.gg/yourserver" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition-colors">
            <FaDiscord size={24} />
          </a>
          <a href="mailto:your.email@example.com" className="text-text hover:text-primary transition-colors">
            <FaEnvelope size={24} />
          </a>
          <a href="https://www.buymeacoffee.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition-colors">
            <FaCoffee size={24} />
          </a>
        </div>
        <Link href='/#work' className="bg-card text-card-foreground flex items-center justify-center sm:block sm:w-fit text-xl md:text-2xl px-6 py-3 rounded-xl border border-card-foreground hover:bg-opacity-80 transition-colors relative overflow-hidden group">
          <span className="relative z-10">Discover my work ↓</span>
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
        </Link>
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
          {/* //TODO: Image Here */}
          <Image
            src='/vishalkumar.jpg'
            width={400}
            height={400}
            alt='Vishal Kumar'
            className='hidden md:block w-full h-full object-cover object-center transition-transform hover:scale-105 aspect-square'
          />
          {/* <div className='transition-transform hover:scale-105 aspect-square bg-blue-300 hidden md:block ~size-[250px]/[400px]'></div> */}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-500 opacity-20 blur-2xl -z-10"></div>
      </div>
    </section>
  );
};

export default HeroSection;
