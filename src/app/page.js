'use client';
import { useState, useEffect } from "react";
import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";

// Custom hook pentru media query
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);
  return matches;
}

  
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Considerăm md ca 768px, deci mobile = sub 768px
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      <main>
        {/* HERO + NAVBAR cu Tailwind și meniu responsive corect */}
        <div className="hero-bg relative w-full min-h-screen flex flex-col overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="hero-video absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none blur-[8px] brightness-90 opacity-80 transition-all"
          >
            <source src="/image/intro.mp4" type="video/mp4" />
          </video>
          <header className="header relative z-10 w-full bg-transparent">
            <div className="navwrap w-full flex flex-col items-center justify-start pt-6 px-4">
              {/* Logo centrat, mai mare, deasupra nav-ului */}
                <header className="w-full shadow-lg z-20">
                  {isMobile ? (
                    <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                  ) : (
                    <DesktopNav />
                  )}
                </header>
            </div>
          </header>
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
        </div>


        {/* secțiunea Despre noi modernă */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto flex flex-col items-center px-4">
            <h2 className="text-7xl font-black text-pink-400 mb-10 text-center">Despre noi</h2>
            <div className="max-w-2xl w-full border-4 border-pink-200 rounded-3xl bg-white/80 p-10 mb-10 shadow-xl mx-auto flex flex-col items-center">
              <p className="text-3xl text-gray-700 text-center font-bold leading-relaxed">La Mimi Dance Academy inspirăm copiii și adulții să își descopere pasiunea pentru dans într-un mediu prietenos și colorat. Descoperă povestea noastră, viziunea și experiența care ne definesc!</p>
            </div>
            <a href="/despre-noi" className="inline-block bg-pink-400 text-white text-2xl font-bold px-10 py-5 rounded-full shadow-lg hover:bg-pink-500 transition text-center">Află mai multe</a>
          </div>
        </section>
        {/* secțiunea Cursuri originală */}
        <section id="classes" className="py-20 bg-white">
          <div className="container">
            <h2 className="section-title">Cursuri</h2>
            <p className="section-lead">
              De la balet clasic la dans modern – avem clase pentru fiecare stil
              și nivel.
            </p>
            <div className="menu-grid">
              <div className="product">
                <div className="pic">
                  <img
                    src="/image/happy-dance.png.webp"
                    alt="Balet"
                  />
                </div>
                <h3>Happy dance</h3>
              </div>
              <div className="product">
                <div className="pic">
                  <img
                    src="/image/magic-ribbons.png"
                    alt="Hip Hop"
                  />
                </div>
                <h3>Magic Ribbons</h3>
              </div>
              <div className="product">
                <div className="pic">
                  <img
                    src="/image/dansul-mirilor.png"
                    alt="Dans Modern"
                  />
                </div>
                <h3>Dansul Mirilor</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery">
          <div className="container">
            <h2 className="section-title">Galerie</h2>
            <p className="section-lead">
              Imagini din spectacole și antrenamentele noastre.
            </p>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <p className="section-lead">
              Înscrie-te sau cere mai multe detalii completând formularul de mai
              jos.
            </p>
            <div className="cta">
              <form className="panel">
                <input
                  type="text"
                  name="nume"
                  placeholder="Nume"
                  required
                />
                <input
                  type="text"
                  name="prenume"
                  placeholder="Prenume"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <input
                  type="tel"
                  name="telefon"
                  placeholder="Telefon"
                  required
                />
                <textarea
                  name="mesaj"
                  maxLength={500}
                  placeholder="Mesajul tău (maxim 500 caractere)"
                  required
                ></textarea>
                <label className="check">
                  <input type="checkbox" required /> Sunt de acord cu politica de
                  confidențialitate
                </label>
                <button type="submit" className="btn">
                  Trimite
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer>
          <p>
            &copy;{" "}
            <span id="year">{new Date().getFullYear()}</span> Mimi Dance Academy.
            Creat cu{" "}
            <span className="accent">♥</span>.
          </p>
        </footer>
        {/* <script src="/script.js"></script>  // Mută funcționalitățile JS în React la nevoie */}
      </main>
    </>
  );
}
