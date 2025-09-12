import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CoursesSection from "./components/CoursesSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import VideoBackground from "./components/VideoBackground";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        {/* HERO + NAVBAR cu Tailwind și meniu responsive corect */}
        {/* HERO + NAVBAR cu video background */}
        <div className="hero-bg relative w-full min-h-screen flex flex-col overflow-hidden">
          <VideoBackground />
          <Navigation />
          <HeroSection />

          <div className="wave-svg"></div>
        </div>

        <AboutSection />
        <CoursesSection />
        <GallerySection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
