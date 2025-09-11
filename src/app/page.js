import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CoursesSection from "./components/CoursesSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        {/* HERO + NAVBAR cu Tailwind și meniu responsive corect */}
        {/* HERO + NAVBAR cu video background */}
        <div className="hero-bg relative w-full min-h-screen flex flex-col overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="hero-video absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none blur-[8px] brightness-90 opacity-80 transition-all"
          >
            <source src="/image/intro.mp4" type="video/mp4" />
          </video>
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
