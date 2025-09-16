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
            className="text-[#69657e] text-3xl p-2 hover:bg-[#a7d8ff] hover:text-white rounded-lg transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Meniu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Meniul care se deschide din stânga */}
      {menuOpen && (
        <>
          {/* Overlay pentru fundal */}
           <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out"
              onClick={() => setMenuOpen(false)}
            />

          {/* Logo-ul pe partea stângă când meniul e deschis */}
          <div className="fixed top-4 left-4 z-[60]">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image
                src="/image/logo.png"
                alt="Logo"
                width={60}
                height={60}
                className="object-contain cursor-pointer"
                priority
              />
            </Link>
          </div>

          {/* Meniul propriu-zis */}
          <div className="fixed top-0 left-0 w-1/2 h-full bg-[#b8e0ff] z-50 transform transition-all duration-300 ease-in-out">
            <div className="flex flex-col gap-6 text-white font-semibold text-lg pt-20 px-6">
              <Link
                href={pathname === "/despre-noi" ? "/#about" : "#about"}
                onClick={() => setMenuOpen(false)}
                className="hover:text-pink-300 hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-lg border-b border-white/20"
              >
                Despre noi
              </Link>
              <Link
                href={pathname === "/despre-noi" ? "/#classes" : "#classes"}
                onClick={() => setMenuOpen(false)}
                className="hover:text-pink-300 hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-lg border-b border-white/20"
              >
                Cursuri
              </Link>
              <Link
                href={pathname === "/despre-noi" ? "/#gallery" : "#gallery"}
                onClick={() => setMenuOpen(false)}
                className="hover:text-pink-300 hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-lg border-b border-white/20"
              >
                Galerie
              </Link>
              <Link
                href={pathname === "/despre-noi" ? "/#contact" : "#contact"}
                onClick={() => setMenuOpen(false)}
                className="hover:text-pink-300 hover:bg-white/10 transition-all duration-300 py-3 px-4 rounded-lg border-b border-white/20"
              >
                Contact
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
