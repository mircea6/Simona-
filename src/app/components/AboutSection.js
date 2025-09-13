'use client';
import useFormAnimation from '../hooks/useFormAnimation';
import { useEffect, useState } from 'react';

export default function AboutSection() {
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
    <section id="about" className="py-20 bg-white animated-bg">
      <div 
        ref={ref}
        className={`max-w-3xl mx-auto flex flex-col items-center px-4 relative ${
          isMobile 
            ? 'opacity-100 translate-x-0' 
            : `transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-full'
              }`
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-pink mb-4 sm:mb-6 md:mb-10 text-center px-2">Despre noi</h2>
        <div className="max-w-2xl w-full border-4 border-pink-200 rounded-2xl sm:rounded-3xl bg-white/80 p-2 sm:p-6 md:p-10 mb-4 sm:mb-6 md:mb-10 shadow-xl mx-auto flex flex-col items-center">
          <p className="text-sm sm:text-base md:text-2xl lg:text-3xl text-gray-700 text-center font-bold leading-relaxed">La Mimi Dance Academy inspirăm copiii și adulții să își descopere pasiunea pentru dans într-un mediu prietenos și colorat. Descoperă povestea noastră, viziunea și experiența care ne definesc!</p>
        </div>
        <a href="/despre-noi" className="inline-block bg-[#a7d8ff] text-white text-sm sm:text-base md:text-xl lg:text-2xl font-bold px-2 sm:px-6 md:px-8 lg:px-10 py-1.5 sm:py-3 md:py-4 lg:py-5 rounded-full shadow-lg hover:bg-[#8bc5ff] transition text-center w-full max-w-xs sm:max-w-none">Află mai multe</a>
      </div>
    </section>
  );
}
