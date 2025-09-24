'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navigation from '../components/Navigation';
import FooterSection from '../components/FooterSection';

export default function MagicRibbonsPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Schimbă la 100px scroll
    };

    const handleResize = () => {
      setBackgroundImage(window.innerWidth <= 1020 ? "url('/image/mobile-border.png')" : "url('/image/Frame1.png')");
    };

    // Set initial background image
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="min-h-screen relative">
      {/* Background Image - întreaga pagină */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/image/dans-cu-panglici.png')",
          opacity: 0.2,
          filter: 'brightness(0.8)'
        }}
      />
      {/* Overlay subtil pentru contrast */}
      <div className="fixed inset-0 z-0 bg-black/20"></div>

      {/* Logo-ul sticky care apare doar când se scrollează */}
      {isScrolled && !menuOpen && (
        <Link href="/" className="sticky-logo">
          <img
            src="/image/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </Link>
      )}


      {/* Navigation */}
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Main Content - întreaga pagină cu video background */}
      <div className={`relative z-0 minpt-20 transition-all duration-300 ${menuOpen ? 'blur-md' : 'blur-0'}`}>
        {/* Prima secțiune - Hero cu video background */}
        <div className="flex items-center justify-center px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Gradient Frame */}
            <div 
              className="px-20 sm:p-8 md:p-16 rounded-2xl mx-auto min-w-md lg:min-w-4xl"
              style={{
                backgroundImage: backgroundImage,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '700px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-pink mb-3 sm:mb-4 md:mb-5 text-center" style={{ fontFamily: 'Courgette, cursive' }}>
                Magic Ribbons
              </h1>
              
              {/* Content */}
              <div className="px-2 sm:px-4 md:px-6 mb-2 sm:mb-3 md:mb-4">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed font-medium text-center max-w-xs lg:max-w-2xl" style={{ fontFamily: 'Courgette, cursive' }}>
                  Un opțional spectaculos și plin de culoare, unde mișcarea se împlețește cu magia panglicilor. 
                  Copiii învață elemente de gimnastică ușoare și elegante, care îi ajută să-și dezvolte mobilitatea, 
                  grația și expresivitatea. Panglicile transformă fiecare exercițiu într-un joc creativ și fascinant, 
                  unde cei mici devin mici artiști în mișcare.
                </p>
              </div>

              {/* Back Button */}
              <div className="mt-1 sm:mt-2 md:mt-3">
                <Link
                  href="/#classes"
                  className="inline-block bg-pink text-white text-xs sm:text-sm md:text-base font-bold px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full shadow-lg hover:bg-[#87CEEB] transition-all duration-300 hover:scale-105"
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
                <h2 className="text-4xl font-bold text-pink mb-6" style={{ fontFamily: 'Courgette, cursive' }}>Beneficiile Magic Ribbons</h2>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-center" style={{ fontFamily: 'Courgette, cursive' }}>
                    <span className="w-3 h-3 bg-pink rounded-full mr-3"></span>
                    Dezvoltă mobilitatea și grația
                  </li>
                  <li className="flex items-center" style={{ fontFamily: 'Courgette, cursive' }}>
                    <span className="w-3 h-3 bg-pink rounded-full mr-3"></span>
                    Îmbunătățește expresivitatea artistică
                  </li>
                  <li className="flex items-center" style={{ fontFamily: 'Courgette, cursive' }}>
                    <span className="w-3 h-3 bg-pink rounded-full mr-3"></span>
                    Stimulează creativitatea prin joc
                  </li>
                  <li className="flex items-center" style={{ fontFamily: 'Courgette, cursive' }}>
                    <span className="w-3 h-3 bg-pink rounded-full mr-3"></span>
                    Creează experiențe spectaculoase
                  </li>
                </ul>
              </div>

              {/* Secțiunea dreapta */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                <h2 className="text-4xl font-bold text-pink mb-6" style={{ fontFamily: 'Courgette, cursive' }}>Ce înveți la Magic Ribbons</h2>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-center" style={{ fontFamily: 'Courgette, cursive' }}>
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                    Elemente de gimnastică ușoare și elegante
                  </li>
                  <li className="flex items-center" style={{ fontFamily: 'Courgette, cursive' }}>
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                    Manipularea panglicilor cu grație
                  </li>
                  <li className="flex items-center" style={{ fontFamily: 'Courgette, cursive' }}>
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                    Coregrafii creative și fascinante
                  </li>
                  <li className="flex items-center" style={{ fontFamily: 'Courgette, cursive' }}>
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                    Exprimare artistică prin mișcare
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
