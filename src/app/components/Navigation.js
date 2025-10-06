'use client';
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

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

export default function Navigation({ menuOpen, setMenuOpen }) {
  // Considerăm md ca 768px, deci mobile = sub 768px
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <header className="header absolute z-10 w-full bg-transparent">
      <div className="navwrap w-full flex flex-col items-center justify-start pt-6 px-4">
        <header className="w-full z-20" style={{ zIndex: '1000' }}>
          {isMobile ? (
            <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          ) : (
            <DesktopNav />
          )}
        </header>
      </div>
    </header>
  );
}
