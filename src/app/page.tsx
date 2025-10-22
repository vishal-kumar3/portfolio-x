import AboutSection from "../components/AboutSection";
import Footer from "../components/FooterSection";
import Header from "../components/Header";
import HeroSection from "../components/Hero";
import WorkSection from "../components/WorkSection";
import { ExperienceSection } from "@/components/Experience/ExperienceSection";
import { AchievementSection } from "@/components/AchievementSection";
import Chat from "@/components/Chat/chat";
import { WarmupBackend } from "@/components/WarmupBackend";

export default async function Home() {

  return (
    <main className="min-h-screen overflow-x-hidden mb-[60px] md:mb-0 max-w-[1100px] text-foreground p-8">
      <div>
        <WarmupBackend />
        <Chat />
        <Header />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <AchievementSection />
        {/* <SkillsShowcase /> */}
        <WorkSection />
        {/* <Timeline /> */}
        <Footer />
      </div>
    </main>
  );
}
