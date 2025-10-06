import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav({ menuOpen, setMenuOpen }) {
  const pathname = usePathname();


  return (
    <>
      <div className="flex justify-between items-center w-full py-4 relative">
        {/* Logo - se ascunde când meniul e deschis */}
         <div
           className={`flex items-center transition-all duration-500 ease-in-out relative z-50 ${
             menuOpen ? "opacity-0 invisible" : "opacity-100 visible translate-x-[5%]"
           }`}
         >
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/image/logofull2.png"
              alt="Logo"
              width={100}
              height={100}
              className="object-contain cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Meniu mobil în dreapta */}
        <div className={`flex items-center right-4 ${ menuOpen ? 'fixed' : '' }`} style={{ zIndex: '1000' }}
        onClick={() => { console.log("clicked"); setMenuOpen((v) => !v)}}
        >
          <button
            className={`p-2 ${pathname === '/despre-noi' || pathname === '/politica-confidentialitate' ? 'bg-pink-200' : ''} ${menuOpen ? 'bg-[#a7d8ff]' : ''} rounded-xl sm:rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl`}
            
            aria-label="Meniu"
          >
            <svg 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
              fill="none" 
              stroke="white" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Meniul care se deschide din dreapta */}
      {/* Overlay pentru fundal */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-md z-40 transition-all duration-300 ease-in-out ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Logo-ul centrat când meniul e deschis */}
      <div className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-[60] transition-all duration-300 ease-in-out ${
        menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image
            src="/image/logofull2.png"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain cursor-pointer"
            priority
          />
        </Link>
      </div>

      {/* Meniul propriu-zis */}
      <div className={`fixed top-0 right-0 w-1/2 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col gap-8 pt-45 px-6">
          <Link
            href={pathname !== "/" ? "/#about" : "#about"}
            onClick={() => setMenuOpen(false)}
            className="inline-block px-4 py-2 bg-white rounded-full text-gray-900 text-base font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-pink-200 hover:text-white hover:border-pink-200 focus:bg-pink-200 focus:text-white focus:border-pink-200 no-underline text-center"
            style={{ fontFamily: 'Courgette, cursive' }}
          >
            Despre noi
          </Link>
          <Link
            href={pathname !== "/" ? "/#classes" : "#classes"}
            onClick={() => setMenuOpen(false)}
            className="inline-block px-4 py-2 bg-white rounded-full text-gray-900 text-base font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-pink-200 hover:text-white hover:border-pink-200 focus:bg-pink-200 focus:text-white focus:border-pink-200 no-underline text-center"
            style={{ fontFamily: 'Courgette, cursive' }}
          >
            Cursuri
          </Link>
          <Link
            href={pathname !== "/" ? "/#gallery" : "#gallery"}
            onClick={() => setMenuOpen(false)}
            className="inline-block px-4 py-2 bg-white rounded-full text-gray-900 text-base font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-pink-200 hover:text-white hover:border-pink-200 focus:bg-pink-200 focus:text-white focus:border-pink-200 no-underline text-center"
            style={{ fontFamily: 'Courgette, cursive' }}
          >
            Galerie
          </Link>
          <Link
            href={pathname !== "/" ? "/#contact" : "#contact"}
            onClick={() => setMenuOpen(false)}
            className="inline-block px-4 py-2 bg-white rounded-full text-gray-900 text-base font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-pink-200 hover:text-white hover:border-pink-200 focus:bg-pink-200 focus:text-white focus:border-pink-200 no-underline text-center"
            style={{ fontFamily: 'Courgette, cursive' }}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
