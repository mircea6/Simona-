export default function HeroSection() {
  return (
    <section className="hero relative z-10 flex flex-col items-center justify-center text-center w-full flex-1 min-h-[calc(100vh-80px)] text-white">
      <div className="container w-full flex flex-col items-center justify-center px-4">
        <h1 className="hero-title text-[2.5rem] md:text-[4.5rem] font-extrabold mb-4 drop-shadow-lg text-white font-serif leading-tight">
          Bine ai venit la{" "}
          <span className="accent text-pink">Mimi Dance Academy</span>
        </h1>
        <p className="lead text-xl md:text-2xl mb-10 drop-shadow text-white/90 max-w-2xl mx-auto font-serif">
          Locul unde dansul prinde viață în nuanțe de baby blue și roz pal.
        </p>
        <div className="hero-cta flex gap-8 flex-wrap justify-center">
          <a
            href="#classes"
            className="btn bg-pink text-purple-800 text-xl px-10 py-4 rounded-2xl font-bold shadow-custom transition hover:-translate-y-0.5 border-2 border-pink hover:bg-pink/90 focus:outline-none focus:ring-2 focus:ring-pink font-serif"
          >
            Vezi Clasele
          </a>
          <a
            href="#contact"
            className="btn ghost bg-transparent border-2 border-white text-white text-xl px-10 py-4 rounded-2xl font-bold transition hover:bg-white hover:text-pink focus:outline-none focus:ring-2 focus:ring-white font-serif"
          >
            Contactează-ne
          </a>
        </div>
      </div>
    </section>
  );
}
