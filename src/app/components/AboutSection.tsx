import { Clock } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="text-foreground p-4 w-full mx-auto">
      <div className="md:flex md:space-x-4 md:items-center">
        {/* Activity Section */}
        <div className="mb-4 text-lg md:mb-0 md:w-1/2">
          <div className="flex items-center gap-6 sm:gap-20 md:gap-8">
            <div className='size-[8rem] bg-red-300'>Kya pta!!!</div>
            <div className='leading-6'>
              <p className="text-xl leading-6 font-semibold text-foreground">@vishalKumar</p>
              <p className="text-foreground flex gap-1 items-center">
                <Clock size={15} className="text-lg" />
                offline
              </p>
              <p className="text-md text-foreground">9/18/2024, 11:43:55 PM</p>
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
    </div>
  );
};

export default AboutSection;
