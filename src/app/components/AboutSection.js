'use client';
import useFormAnimation from '../hooks/useFormAnimation';
import { useEffect, useState } from 'react';

export default function AboutSection({ menuOpen = false }) {
  const [ref, isVisible] = useFormAnimation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="about"
      className={`py-16 sm:py-20 md:py-20 relative bg-cover bg-no-repeat min-h-screen transition-all duration-300 mb-8 sm:mb-12 md:mb-0 ${
        menuOpen ? 'blur-md' : 'blur-10'
      }`}
      style={{
        backgroundImage: "url('/image/bg-about.png')",
        backgroundPosition: "center center",
        backgroundSize: "cover"
      }}
    >
      {/* Overlay pentru a îmbunătăți lizibilitatea */}
      <div className="absolute inset-0 bg-white/30"></div>

      <div
        ref={ref}
        className={`w-full max-w-3xl mx-auto flex flex-col items-center justify-center px-2 md:px-4 relative z-10 h-full min-h-[80vh] sm:min-h-[90vh] md:h-full ${isMobile
            ? 'opacity-100 translate-x-0'
            : `transition-all duration-700 ease-out ${isVisible
              ? 'translate-x-0'
              : '-translate-x-full'
            }`
          }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-black text-pink mb-3 sm:mb-4 md:mb-6 lg:mb-10 text-center px-2" style={{ fontFamily: 'Courgette, cursive' }}>Despre noi</h2>
        <p className="w-full md:w-120 text-md sm:text-base md:text-lg lg:text-xl xl:text-3xl text-gray-700 text-center font-bold leading-relaxed mb-8 sm:mb-10 md:mb-12 px-2" style={{ fontFamily: 'Courgette, cursive' }}>La Mimi Dance Academy inspirăm copiii și adulții să își descopere pasiunea pentru dans într-un mediu prietenos și colorat. Descoperă povestea noastră, viziunea și experiența care ne definesc!</p>
        <a href="/despre-noi" className="inline-block bg-[#a7d8ff] text-white text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl font-bold px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5 md:py-3 lg:py-4 xl:py-3 rounded-full shadow-lg hover:bg-[#8bc5ff] transition text-center w-full md:w-max max-w-xs sm:max-w-none" style={{ fontFamily: 'Courgette, cursive' }}>Află mai multe</a>
      </div>
    </section>
  );
}
