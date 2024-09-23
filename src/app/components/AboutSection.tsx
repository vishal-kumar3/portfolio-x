"use client"
import { Clock } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDiscord } from '../hooks/lanyard';

const AboutSection = ({initialTime}: {initialTime?: string}) => {
  const [username, setUsername] = useState("vishal_kumar3");
  const [discordOnline, setDiscordOnline] = useState("offline");
  const [currTime, setCurrTime] = useState("Time");
  const {status: data} = useDiscord();
  const [activityImage, setActivityImage] = useState("/question.jpg");

  const localTime = () => setCurrTime(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

  useEffect(() => {
    const interval = setInterval(() => localTime(), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if(!data) return setActivityImage("/question.jpg");

    setUsername(data?.discord_user.username)
    setDiscordOnline(data?.discord_status)
    setActivityImage(`https://cdn.discordapp.com/avatars/${process.env.NEXT_PUBLIC_DISCORD_ID}/${data?.discord_user.avatar}.png?size=512`)
  }, [data])

  return (
    <section id='about' className="text-foreground p-4 w-full mx-auto">
      <div className="md:flex md:space-x-4 md:items-center">
        {/* Activity Section */}
        <div className="mb-4 text-lg md:mb-0 md:w-1/2">
          <div className="flex items-center gap-6 sm:gap-20 md:gap-8">
            <Image src={activityImage} width={128} height={128} alt='Kya pta' className='size-[8rem] rounded-[18px] bg-[#422006]' />
            <div className='leading-6'>
              <p className="text-xl leading-6 font-semibold text-foreground">@{username}</p>
              <p className="text-foreground flex gap-1 items-center">
                <Clock size={15} className="text-lg" />
                {discordOnline}
              </p>
              <p className="text-md text-foreground">
                {currTime}
              </p>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="md:w-1/2">
          <p className="text-lg">
            Hey there, I'm Vishal! :] I'm a full stack developer with a focus on building scalable, efficient web applications.
            {/* With a keen eye for detail, I optimize code for functionality, type safety, and user experience.  */}
            I thrive on solving complex problems and delivering solutions that are both technically sound and user-friendly. Just casually losing my mind over blockchain and Rust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
