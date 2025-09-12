'use client';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function CoursesSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="classes" className="bg-white animated-bg">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto px-4 py-16 relative scroll-animation transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-full'
        }`}
      >
        <h2 className="text-5xl font-extrabold text-pink mb-8 text-center">
          Cursuri
        </h2>
        <p className="text-2xl text-gray-700 text-center mb-12 font-semibold">
          De la balet clasic la dans modern – avem clase pentru fiecare stil și
          nivel.
        </p>


        
        <div className="flex flex-col md:flex-row gap-16 w-full max-w-5xl mx-auto justify-center items-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-extrabold text-pink mb-6 text-center">
              Happy dance
            </h3>
            <div 
              className="flex flex-col items-center bg-white rounded-3xl shadow-lg min-h-[300px] max-w-xs w-full mx-auto justify-center aspect-[3/4] bg-cover bg-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              style={{ backgroundImage: "url('/image/happy-dance.png.webp')" }}
            >
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-extrabold text-pink mb-6 text-center">
              Magic Ribbons
            </h3>
            <div 
              className="flex flex-col items-center bg-white rounded-3xl shadow-lg min-h-[300px] max-w-xs w-full mx-auto justify-center aspect-[3/4] bg-cover bg-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              style={{ backgroundImage: "url('/image/magic-ribbons.png')" }}
            >
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-extrabold text-pink mb-6 text-center">
              Dansul Mirilor
            </h3>
            <div 
              className="flex flex-col items-center bg-white rounded-3xl shadow-lg min-h-[300px] max-w-xs w-full mx-auto justify-center aspect-[3/4] bg-cover bg-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              style={{ backgroundImage: "url('/image/dansul-mirilor.png')" }}
            >
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
