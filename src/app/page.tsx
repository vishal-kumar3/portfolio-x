// import posthog from "posthog-js";
import AboutSection from "../components/AboutSection";
import Footer from "../components/FooterSection";
import Header from "../components/Header";
import HeroSection from "../components/Hero";
import WorkSection from "../components/WorkSection";

export default function Home() {

  return (
    <main className="min-h-screen overflow-x-hidden mb-[60px] md:mb-0 max-w-[1100px] text-foreground p-8">
      <div>
        <Header />
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <Footer />
      </div>
    </main>
  )
}
