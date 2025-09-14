'use client';
import useFormAnimation from '../hooks/useFormAnimation';
import { useEffect, useState } from 'react';

export default function CoursesSection() {
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
    <section id="classes" className="py-20 bg-white">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto px-4 relative ${
          isMobile 
            ? 'opacity-100 translate-x-0' 
            : `transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-full'
              }`
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-pink mb-4 sm:mb-6 md:mb-8 text-center px-2">
          Cursuri
        </h2>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-700 text-center mb-6 sm:mb-8 md:mb-12 font-semibold px-4">
          De la balet clasic la dans modern – avem clase pentru fiecare stil și
          nivel.
        </p>

        <div className="flex flex-col md:flex-row gap-3 sm:gap-8 md:gap-12 lg:gap-16 w-full max-w-5xl mx-auto justify-center items-center px-1 sm:px-4">
          {/* Card 1 */}
          <div className="flex flex-col items-center w-full max-w-sm">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-pink mb-3 sm:mb-4 md:mb-6 text-center">
              Happy dance
            </h3>
            <a href="/happy-dance" className="w-full">
              <div 
                className="flex flex-col items-center bg-white rounded-lg sm:rounded-3xl shadow-lg min-h-[80px] sm:min-h-[300px] w-full mx-auto justify-center aspect-[3/4] bg-cover bg-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                style={{ backgroundImage: "url('/image/happy-dance.png.webp')" }}
              >
              </div>
            </a>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center w-full max-w-sm">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-pink mb-3 sm:mb-4 md:mb-6 text-center">
              Magic Ribbons
            </h3>
            <a href="/magic-ribbons" className="w-full">
              <div 
                className="flex flex-col items-center bg-white rounded-lg sm:rounded-3xl shadow-lg min-h-[80px] sm:min-h-[300px] w-full mx-auto justify-center aspect-[3/4] bg-cover bg-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                style={{ backgroundImage: "url('/image/magic-ribbons.png')" }}
              >
              </div>
            </a>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center w-full max-w-sm">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-pink mb-3 sm:mb-4 md:mb-6 text-center">
              Dansul Mirilor
            </h3>
            <a href="/dansul-mirilor" className="w-full">
              <div 
                className="flex flex-col items-center bg-white rounded-lg sm:rounded-3xl shadow-lg min-h-[80px] sm:min-h-[300px] w-full mx-auto justify-center aspect-[3/4] bg-cover bg-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                style={{ backgroundImage: "url('/image/dansul-mirilor.png')" }}
              >
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
