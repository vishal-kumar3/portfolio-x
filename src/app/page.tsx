"use client"
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/Hero";
import ThemeToggle from "./components/Theme/ThemeToggle";

export default function Home(){


  return (
    <main className="min-h-screen w-[1200px] text-foreground p-8">
      <Header />
      <div>
        <HeroSection />
      </div>
      <ThemeToggle />
    </main>
  )
}
