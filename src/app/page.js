'use client';
import { useState, useEffect } from "react";
import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CoursesSection from "./components/CoursesSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

// Custom hook pentru media query
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);
  return matches;
}

  
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Considerăm md ca 768px, deci mobile = sub 768px
  const isMobile = useMediaQuery('(max-width: 767px)');

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
          <header className="header relative z-10 w-full bg-transparent">
            <div className="navwrap w-full flex flex-col items-center justify-start pt-6 px-4">
              <header className="w-full shadow-lg z-20">
                {isMobile ? (
                  <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                ) : (
                  <DesktopNav />
                )}
              </header>
            </div>
          </header>
          <HeroSection />
          <img src="/image/wave.svg" alt="Wave" className="wave-svg" />
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
