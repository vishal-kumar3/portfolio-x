
import SkillsShowcase from "@/components/SkillSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/FooterSection";
import Header from "../components/Header";
import HeroSection from "../components/Hero";
import WorkSection from "../components/WorkSection";
import Timeline from "../components/Timeline";

// export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden mb-[60px] md:mb-0 max-w-[1100px] text-foreground p-8">
      <div className="">
        <Header />
        <HeroSection />
        <AboutSection />
        <SkillsShowcase />
        <WorkSection />
        <Timeline />
        <Footer />
      </div>
    </main>
  )
}
