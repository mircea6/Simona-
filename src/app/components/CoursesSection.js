export default function CoursesSection() {
  return (
    <section id="classes" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-pink-400 mb-8 text-center">
          Cursuri
        </h2>
        <p className="text-2xl text-gray-700 text-center mb-12 font-semibold">
          De la balet clasic la dans modern – avem clase pentru fiecare stil și
          nivel.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
          {/* Card 1 */}
          <h3 className="text-xl font-bold text-pink-400 mt-2 text-center">
            Happy dance
          </h3>

          <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg p-8 min-h-[300px] max-w-xs w-full mx-auto justify-center aspect-[3/4]">
            <div className="flex items-center justify-center mb-4 w-20 h-20">
              <img
                src="/image/happy-dance.png.webp"
                alt="Happy dance"
                className="w-14 h-14 object-contain mx-auto"
              />
            </div>
          </div>
          {/* Card 2 */}
          <h3 className="text-xl font-bold text-pink-400 mt-2 text-center">
            Magic Ribbons
          </h3>
          <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg p-8 min-h-[300px] max-w-xs w-full mx-auto justify-center aspect-[3/4]">
            <div className="flex items-center justify-center mb-4 w-20 h-20">
              <img
                src="/image/magic-ribbons.png"
                alt="Magic Ribbons"
                className="w-14 h-14 object-contain mx-auto"
              />
            </div>
          </div>
          {/* Card 3 */}
          <h3 className="text-xl font-bold text-pink-400 mt-2 text-center">
            Dansul Mirilor
          </h3>
          <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg p-8 min-h-[300px] max-w-xs w-full mx-auto justify-center aspect-[3/4]">
            <div className="flex items-center justify-center mb-4 w-20 h-20">
              <img
                src="/image/dansul-mirilor.png"
                alt="Dansul Mirilor"
                className="w-14 h-14 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
