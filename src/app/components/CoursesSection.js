export default function CoursesSection() {
  return (
    <section id="classes" className="py-20 bg-white animated-bg">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-extrabold text-pink mb-8 text-center">
          Cursuri
        </h2>
        <p className="text-2xl text-gray-700 text-center mb-12 font-semibold">
          De la balet clasic la dans modern – avem clase pentru fiecare stil și
          nivel.
        </p>


        
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mx-auto justify-center items-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-pink mb-4 text-center">
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
            <h3 className="text-xl font-bold text-pink mb-4 text-center">
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
            <h3 className="text-xl font-bold text-pink mb-4 text-center">
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
