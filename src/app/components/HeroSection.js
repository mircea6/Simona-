export default function HeroSection() {
  return (
    <section className="hero relative flex flex-col items-center justify-center text-center w-full flex-1 min-h-[calc(100vh-80px)] text-white">
      <div className="container w-full flex flex-col items-center justify-center px-4">
        <h1 className="hero-title text-2xl sm:text-3xl md:text-[4.5rem] font-extrabold mb-3 md:mb-4 drop-shadow-lg text-white font-serif leading-tight px-2">
          Bine ai venit la{" "}
          <span className="accent text-pink">Mimi Dance Academy</span>
        </h1>
        <p className="lead text-base sm:text-lg md:text-2xl mb-6 md:mb-10 drop-shadow text-white/90 max-w-2xl mx-auto font-serif px-4">
          Locul unde dansul prinde viață în nuanțe de baby blue și roz pal.
        </p>
        <div className="hero-cta flex flex-col sm:flex-row gap-2 sm:gap-6 md:gap-8 justify-center w-full max-w-md sm:max-w-none px-1 sm:px-4">
          <a
            href="#classes"
            className="btn bg-pink text-[#69657e] text-base sm:text-lg md:text-xl px-3 sm:px-8 md:px-10 py-2 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl font-bold shadow-custom transition hover:-translate-y-0.5 border-2 border-pink hover:bg-pink/90 focus:outline-none focus:ring-2 focus:ring-pink font-serif text-center"
          >
            Vezi Cursurile
          </a>
          <a
            href="#contact"
            className="btn bg-pink text-[#69657e] text-base sm:text-lg md:text-xl px-3 sm:px-8 md:px-10 py-2 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl font-bold shadow-custom transition hover:-translate-y-0.5 border-2 border-pink hover:bg-pink/90 focus:outline-none focus:ring-2 focus:ring-pink font-serif text-center"
          >
            Contactează-ne
          </a>
        </div>
      </div>
    </section>
  );
}
