'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MagicRibbonsPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleCanPlay = () => {
        video.play().catch(console.error);
      };
      
      if (video.readyState >= 3) {
        // Video is already loaded enough to play
        video.play().catch(console.error);
      } else {
        // Wait for video to be ready
        video.addEventListener('canplay', handleCanPlay);
      }
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Video Background - întreaga pagină */}
      <div className="fixed inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{ 
            opacity: 0.4,
            filter: 'brightness(0.8)'
          }}
        >
          <source src="/video-magicribbons.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay subtil pentru contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Navigation */}
      <div className="w-full fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-center px-10 py-6">
            <nav className="flex gap-8 items-center justify-center">
              <Link
                href="/#about"
                className="inline-block px-6 py-2 bg-white rounded-full text-[#69657e] text-lg font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-[#a7d8ff] hover:text-white hover:border-[#a7d8ff] focus:bg-[#a7d8ff] focus:text-white focus:border-[#a7d8ff] no-underline"
              >
                Despre noi
              </Link>
              <Link
                href="/#classes"
                className="inline-block px-6 py-2 bg-white rounded-full text-[#69657e] text-lg font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-[#a7d8ff] hover:text-white hover:border-[#a7d8ff] focus:bg-[#a7d8ff] focus:text-white focus:border-[#a7d8ff] no-underline"
              >
                Cursuri
              </Link>
              <Link href="/">
                <img
                  src="/image/logo.png"
                  alt="Logo"
                  width={140}
                  height={140}
                  className="object-contain mx-6"
                />
              </Link>
              <Link
                href="/#gallery"
                className="inline-block px-6 py-2 bg-white rounded-full text-[#69657e] text-lg font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-[#a7d8ff] hover:text-white hover:border-[#a7d8ff] focus:bg-[#a7d8ff] focus:text-white focus:border-[#a7d8ff] no-underline"
              >
                Galerie
              </Link>
              <Link
                href="/#contact"
                className="inline-block px-6 py-2 bg-white rounded-full text-[#69657e] text-lg font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-[#a7d8ff] hover:text-white hover:border-[#a7d8ff] focus:bg-[#a7d8ff] focus:text-white focus:border-[#a7d8ff] no-underline"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex justify-between items-center w-full py-4 px-4 relative">
            {/* Logo - se mișcă în dreapta când meniul e deschis */}
            <div className={`flex items-center transition-all duration-[5000ms] ease-in-out relative z-[60] ${menuOpen ? 'translate-x-[70vw]' : 'translate-x-[5vw]'}`}>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <img
                  src="/image/logo.png"
                  alt="Logo"
                  width={80}
                  height={80}
                  className="object-contain cursor-pointer"
                />
              </Link>
            </div>
            {/* Meniu mobil în dreapta */}
            <div className="flex items-center">
              <button
                className="text-[#69657e] text-3xl p-2 hover:bg-[#a7d8ff] hover:text-white rounded-lg transition-colors"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Meniu"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Meniul care se deschide din stânga - în afara containerului principal */}
      {menuOpen && (
        <>
           {/* Overlay cu blur pentru fundal */}
           <div 
             className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-all duration-[5000ms] ease-in-out"
             onClick={() => setMenuOpen(false)}
           />
           
           {/* Meniul propriu-zis */}
           <div className="fixed top-0 left-0 w-1/2 h-full bg-[#b8e0ff] z-50 transform transition-all duration-[5000ms] ease-in-out">
            <div className="flex flex-col gap-6 text-white font-semibold text-lg pt-20 px-6">
              <a 
                href="/#about" 
                onClick={() => setMenuOpen(false)} 
                className="hover:text-pink-300 hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-lg border-b border-white/20"
              >
                Despre noi
              </a>
              <a 
                href="/#classes" 
                onClick={() => setMenuOpen(false)} 
                className="hover:text-pink-300 hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-lg border-b border-white/20"
              >
                Cursuri
              </a>
              <a 
                href="/#gallery" 
                onClick={() => setMenuOpen(false)} 
                className="hover:text-pink-300 hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-lg border-b border-white/20"
              >
                Galerie
              </a>
              <a 
                href="/#contact" 
                onClick={() => setMenuOpen(false)} 
                className="hover:text-pink-300 hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-lg border-b border-white/20"
              >
                Contact
              </a>
            </div>
          </div>
        </>
      )}

      {/* Main Content - întreaga pagină cu video background */}
      <div className="relative z-10 min-h-screen pt-20">
        {/* Prima secțiune - Hero cu video background */}
        <div className="flex items-center justify-center min-h-screen px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Gradient Frame */}
            <div className="bg-gradient-to-r from-pink-200 to-blue-200 p-2 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl backdrop-blur-sm">
              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-pink mb-4 sm:mb-6 md:mb-8">
                Magic Ribbons
              </h1>
              
              {/* Content */}
              <div className="bg-white/90 rounded-xl sm:rounded-2xl p-2 sm:p-6 md:p-8 shadow-lg">
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                  Un opțional spectaculos și plin de culoare, unde mișcarea se împlețește cu magia panglicilor. 
                  Copiii învață elemente de gimnastică ușoare și elegante, care îi ajută să-și dezvolte mobilitatea, 
                  grația și expresivitatea. Panglicile transformă fiecare exercițiu într-un joc creativ și fascinant, 
                  unde cei mici devin mici artiști în mișcare.
                </p>
              </div>

              {/* Back Button */}
              <div className="mt-4 sm:mt-6 md:mt-8">
                <Link
                  href="/#classes"
                  className="inline-block bg-pink text-white text-sm sm:text-base md:text-xl font-bold px-2 sm:px-6 md:px-8 py-1.5 sm:py-3 md:py-4 rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300 hover:scale-105 w-full max-w-xs sm:max-w-none"
                >
                  ← Înapoi la Cursuri
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Secțiuni suplimentare cu video background */}
        <div className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Secțiunea stânga */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                <h2 className="text-4xl font-bold text-pink mb-6">Beneficiile Magic Ribbons</h2>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-pink rounded-full mr-3"></span>
                    Dezvoltă mobilitatea și grația
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-pink rounded-full mr-3"></span>
                    Îmbunătățește expresivitatea artistică
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-pink rounded-full mr-3"></span>
                    Stimulează creativitatea prin joc
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-pink rounded-full mr-3"></span>
                    Creează experiențe spectaculoase
                  </li>
                </ul>
              </div>

              {/* Secțiunea dreapta */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                <h2 className="text-4xl font-bold text-pink mb-6">Ce înveți la Magic Ribbons</h2>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                    Elemente de gimnastică ușoare și elegante
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                    Manipularea panglicilor cu grație
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                    Coregrafii creative și fascinante
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                    Exprimare artistică prin mișcare
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
