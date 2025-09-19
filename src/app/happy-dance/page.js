'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FooterSection from '../components/FooterSection';

export default function HappyDancePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="min-h-screen relative">
      {/* Background Image - întreaga pagină */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/image/dans-cu-copii-fericiti.png')",
          opacity: 0.2,
          filter: 'brightness(0.8)'
        }}
      />
      {/* Overlay subtil pentru contrast */}
      <div className="fixed inset-0 z-0 bg-black/20"></div>

      {/* Logo-ul sticky care apare doar când se scrollează */}
      {isScrolled && (
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
      <div className={`w-full fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
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
             <div className={`flex items-center transition-all duration-500 ease-in-out relative z-50 ${menuOpen ? 'translate-x-[70%]' : 'translate-x-[5%]'}`}>
               <Link href="/" onClick={() => setMenuOpen(false)}>
                 <img
                   src="/image/logo.png"
                   alt="Logo"
                   width={100}
                   height={100}
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
             className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out"
             onClick={() => setMenuOpen(false)}
           />
           
           {/* Logo-ul pe partea stângă când meniul e deschis */}
           <div className="fixed top-4 left-4 z-[60]">
             <Link href="/" onClick={() => setMenuOpen(false)}>
               <img
                 src="/image/logo.png"
                 alt="Logo"
                 width={60}
                 height={60}
                 className="object-contain cursor-pointer"
               />
             </Link>
           </div>
           
           {/* Meniul propriu-zis */}
           <div className="fixed top-0 left-0 w-1/2 h-full bg-[#b8e0ff] z-50 transform transition-all duration-300 ease-in-out">
            <div className="flex flex-col gap-6 text-white font-semibold text-lg pt-20 px-6">
              <Link 
                href="/#about" 
                onClick={() => setMenuOpen(false)} 
                className="hover:text-pink-300 hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-lg border-b border-white/20"
              >
                Despre noi
              </Link>
              <Link 
                href="/#classes" 
                onClick={() => setMenuOpen(false)} 
                className="hover:text-pink-300 hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-lg border-b border-white/20"
              >
                Cursuri
              </Link>
              <Link 
                href="/#gallery" 
                onClick={() => setMenuOpen(false)} 
                className="hover:text-pink-300 hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-lg border-b border-white/20"
              >
                Galerie
              </Link>
              <Link 
                href="/#contact" 
                onClick={() => setMenuOpen(false)} 
                className="hover:text-pink-300 hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-lg border-b border-white/20"
              >
                Contact
              </Link>
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
            <div 
              className="p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl max-w-2xl mx-auto"
              style={{
                backgroundImage: "url('/image/Frame1.png')",
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: '500px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-pink mb-3 sm:mb-4 md:mb-5 text-center" style={{ fontFamily: 'Courgette, cursive' }}>
                Happy Dance
              </h1>
              
              {/* Content */}
              <div className="px-2 sm:px-4 md:px-6 mb-2 sm:mb-3 md:mb-4">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed font-medium text-center" style={{ fontFamily: 'Dancing Script, cursive' }}>
                  Conceptul nostru are la baza pasi de dans sportiv (latino și de societate) combinați cu dans modern. 
                  Prin joc și ritm, copiii învață pași simpli, își dezvoltă coordonarea și simțul muzical, dar mai ales 
                  descoperă cât de frumos este să-ți exprimi emoțiile prin dans. Atmosfera este veselă, prietenoasă și 
                  plină de energie, astfel încât fiecare copil să se simtă încrezător și fericit pe ritmurile muzicii.
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
        <div className="py-12 sm:py-16 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              {/* Secțiunea stânga */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-2 sm:p-6 md:p-8 shadow-xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink mb-4 sm:mb-6" style={{ fontFamily: 'Courgette, cursive' }}>Beneficiile Happy Dance</h2>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
                  <li className="flex items-center" style={{ fontFamily: 'Dancing Script, cursive' }}>
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-pink rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Dezvoltă coordonarea și simțul muzical
                  </li>
                  <li className="flex items-center" style={{ fontFamily: 'Dancing Script, cursive' }}>
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-pink rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Îmbunătățește încrederea în sine
                  </li>
                  <li className="flex items-center" style={{ fontFamily: 'Dancing Script, cursive' }}>
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-pink rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Creează atmosferă veselă și prietenoasă
                  </li>
                  <li className="flex items-center" style={{ fontFamily: 'Dancing Script, cursive' }}>
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-pink rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Exprimă emoțiile prin dans
                  </li>
                </ul>
              </div>

              {/* Secțiunea dreapta */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-2 sm:p-6 md:p-8 shadow-xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink mb-4 sm:mb-6" style={{ fontFamily: 'Courgette, cursive' }}>Ce înveți la Happy Dance</h2>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
                  <li className="flex items-center" style={{ fontFamily: 'Dancing Script, cursive' }}>
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Pași de dans sportiv (latino și de societate)
                  </li>
                  <li className="flex items-center" style={{ fontFamily: 'Dancing Script, cursive' }}>
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Elemente de dans modern
                  </li>
                  <li className="flex items-center" style={{ fontFamily: 'Dancing Script, cursive' }}>
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                    Ritm și sincronizare
                  </li>
                  <li className="flex items-center" style={{ fontFamily: 'Dancing Script, cursive' }}>
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
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
