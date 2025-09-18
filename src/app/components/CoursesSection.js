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
    <section id="classes" className="py-16 sm:py-20 md:py-20 min-h-[80vh] sm:min-h-[90vh] md:h-screen bg-white mb-8 sm:mb-12 md:mb-0 flex items-center justify-center">
      <div 
        ref={ref}
        className={`w-full max-w-6xl mx-auto px-2 md:px-4 relative flex flex-col justify-center items-center min-h-[80vh] sm:min-h-[90vh] md:h-full ${
          isMobile 
            ? 'opacity-100 translate-x-0' 
            : `transition-all duration-700 ease-out ${
                isVisible 
                  ? 'translate-x-0' 
                  : 'translate-x-full'
              }`
        }`}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-pink mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-center px-2">
          Cursuri
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl text-gray-700 text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 font-semibold px-2 sm:px-4">
          De la balet clasic la dans modern – avem clase pentru fiecare stil și
          nivel.
        </p>

        <div className="flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16 w-full max-w-5xl mx-auto justify-center items-center px-1 sm:px-2 md:px-4">
          {/* Card 1 */}
          <div className="flex flex-col items-center w-full max-w-xs sm:max-w-sm">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-extrabold text-pink mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-center">
              Happy dance
            </h3>
            <a href="/happy-dance" className="w-full">
              <div 
                className="flex flex-col items-center bg-white rounded-lg sm:rounded-2xl lg:rounded-3xl shadow-lg min-h-[60px] sm:min-h-[120px] md:min-h-[200px] lg:min-h-[250px] xl:min-h-[300px] w-full mx-auto justify-center aspect-[3/4] bg-cover bg-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                style={{ backgroundImage: "url('/image/dans-cu-copii-fericiti.png')" }}
              >
              </div>
            </a>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center w-full max-w-xs sm:max-w-sm">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-extrabold text-pink mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-center">
              Magic Ribbons
            </h3>
            <a href="/magic-ribbons" className="w-full">
              <div 
                className="flex flex-col items-center bg-white rounded-lg sm:rounded-2xl lg:rounded-3xl shadow-lg min-h-[60px] sm:min-h-[120px] md:min-h-[200px] lg:min-h-[250px] xl:min-h-[300px] w-full mx-auto justify-center aspect-[3/4] bg-cover bg-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                style={{ backgroundImage: "url('/image/dans-cu-panglici.png')" }}
              >
              </div>
            </a>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center w-full max-w-xs sm:max-w-sm">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-extrabold text-pink mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-center">
              Dansul Mirilor
            </h3>
            <a href="/dansul-mirilor" className="w-full">
              <div 
                className="flex flex-col items-center bg-white rounded-lg sm:rounded-2xl lg:rounded-3xl shadow-lg min-h-[60px] sm:min-h-[120px] md:min-h-[200px] lg:min-h-[250px] xl:min-h-[300px] w-full mx-auto justify-center aspect-[3/4] bg-cover bg-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                style={{ backgroundImage: "url('/image/vals-pe-dansul-mirilor.png')" }}
              >
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
