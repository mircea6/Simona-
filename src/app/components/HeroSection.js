export default function HeroSection() {
  return (
    <section className="hero relative flex flex-col items-center justify-center text-center w-full flex-1 min-h-[calc(100vh-80px)] text-white">
      <div className="container w-full flex flex-col items-center justify-center px-2 sm:px-4">
        <h1 className="hero-title text-3xl md:text-4xl xl:text-[4.5rem] font-extrabold mb-2 sm:mb-3 md:mb-4 drop-shadow-lg text-white font-serif leading-tight px-2 mb-20 pb-[80px]" style={{ fontFamily: 'Courgette, cursive' }}>
          Bine ai venit 
          <br />
          la 
          <br />
          <span className="accent text-pink">Mimi Dance Academy</span>
        </h1>
 
        <div className="hero-cta flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-center w-full max-w-xs sm:max-w-md md:max-w-none px-1 sm:px-2 md:px-4">
          <a
            href="#classes"
            className="btn bg-pink text-[#69657e] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-1.5 sm:py-2 md:py-3 lg:py-3.5 xl:py-4 rounded-lg sm:rounded-xl md:rounded-2xl font-bold shadow-custom transition hover:-translate-y-0.5 border-2 border-pink hover:bg-white hover:text-pink focus:outline-none focus:ring-2 focus:ring-pink font-serif text-center"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Vezi Cursurile
          </a>
          <a
            href="#contact"
            className="btn bg-pink text-[#69657e] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-1.5 sm:py-2 md:py-3 lg:py-3.5 xl:py-4 rounded-lg sm:rounded-xl md:rounded-2xl font-bold shadow-custom transition hover:-translate-y-0.5 border-2 border-pink hover:bg-white hover:text-pink focus:outline-none focus:ring-2 focus:ring-pink font-serif text-center"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Contactează-ne
          </a>
        </div>
      </div>
    </section>
  );
}
