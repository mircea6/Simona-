import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav({ menuOpen, setMenuOpen }) {
  const pathname = usePathname();

  return (
    <>
      <div className="flex justify-between items-center w-full py-4 relative">
        {/* Logo - se mișcă în dreapta când meniul e deschis */}
         <div
           className={`flex items-center transition-all duration-500 ease-in-out relative z-50 ${
             menuOpen ? "translate-x-[70%]" : "translate-x-[5%]"
           }`}
         >
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/image/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="object-contain cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Meniu mobil în dreapta */}
        <div className="flex items-center">
          <button
            className="p-2 hover:bg-[#a7d8ff] rounded-xl sm:rounded-2xl shadow-lg "
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Meniu"
          >
            <img 
              src="/image/menu-svgrepo-com.svg" 
              alt="Menu" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </button>
        </div>
      </div>

      {/* Meniul care se deschide din stânga */}
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
            src="/image/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain cursor-pointer"
            priority
          />
        </Link>
      </div>

      {/* Meniul propriu-zis */}
      <div className={`fixed top-0 left-0 w-1/2 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        menuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col gap-8 pt-45 px-6">
          <Link
            href={pathname !== "/" ? "/#about" : "#about"}
            onClick={() => setMenuOpen(false)}
            className="inline-block px-4 py-2 bg-white rounded-full text-gray-900 text-base font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-pink-200 hover:text-white hover:border-pink-200 focus:bg-pink-200 focus:text-white focus:border-pink-200 no-underline text-center"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Despre noi
          </Link>
          <Link
            href={pathname !== "/" ? "/#classes" : "#classes"}
            onClick={() => setMenuOpen(false)}
            className="inline-block px-4 py-2 bg-white rounded-full text-gray-900 text-base font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-pink-200 hover:text-white hover:border-pink-200 focus:bg-pink-200 focus:text-white focus:border-pink-200 no-underline text-center"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Cursuri
          </Link>
          <Link
            href={pathname !== "/" ? "/#gallery" : "#gallery"}
            onClick={() => setMenuOpen(false)}
            className="inline-block px-4 py-2 bg-white rounded-full text-gray-900 text-base font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-pink-200 hover:text-white hover:border-pink-200 focus:bg-pink-200 focus:text-white focus:border-pink-200 no-underline text-center"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Galerie
          </Link>
          <Link
            href={pathname !== "/" ? "/#contact" : "#contact"}
            onClick={() => setMenuOpen(false)}
            className="inline-block px-4 py-2 bg-white rounded-full text-gray-900 text-base font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-pink-200 hover:text-white hover:border-pink-200 focus:bg-pink-200 focus:text-white focus:border-pink-200 no-underline text-center"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
