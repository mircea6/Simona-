export default function HeroSection() {
  return (
    <section className="hero relative flex flex-col items-center justify-center text-center w-full flex-1 min-h-[calc(100vh-80px)] text-white">
      <div className="container w-full flex flex-col items-center justify-center px-2 sm:px-4">
        <h1 className="hero-title text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[4.5rem] font-extrabold mb-2 sm:mb-3 md:mb-4 drop-shadow-lg text-white font-serif leading-tight px-2">
          Bine ai venit la{" "}
          <span className="accent text-pink">Mimi Dance Academy</span>
        </h1>
        <p className="lead text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 drop-shadow text-white/90 max-w-2xl mx-auto font-serif px-2 sm:px-4">
          Locul unde dansul prinde viață în nuanțe de baby blue și roz pal.
        </p>
        <div className="hero-cta flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-center w-full max-w-xs sm:max-w-md md:max-w-none px-1 sm:px-2 md:px-4">
          <a
            href="#classes"
            className="btn bg-pink text-[#69657e] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-1.5 sm:py-2 md:py-3 lg:py-3.5 xl:py-4 rounded-lg sm:rounded-xl md:rounded-2xl font-bold shadow-custom transition hover:-translate-y-0.5 border-2 border-pink hover:bg-pink/90 focus:outline-none focus:ring-2 focus:ring-pink font-serif text-center"
          >
            Vezi Cursurile
          </a>
          <a
            href="#contact"
            className="btn bg-pink text-[#69657e] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-1.5 sm:py-2 md:py-3 lg:py-3.5 xl:py-4 rounded-lg sm:rounded-xl md:rounded-2xl font-bold shadow-custom transition hover:-translate-y-0.5 border-2 border-pink hover:bg-pink/90 focus:outline-none focus:ring-2 focus:ring-pink font-serif text-center"
          >
            Contactează-ne
          </a>
        </div>
      </div>
    </section>
  );
}
