import Image from "next/image";
import { usePathname } from "next/navigation";

export default function MobileNav({ menuOpen, setMenuOpen }) {
  const pathname = usePathname();
  
  return (
    <>
      <div className="flex justify-between items-center w-full py-4">
        {/* Logo în stânga */}
        <div className="flex items-center">
          <Image
            src="/image/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="object-contain"
            priority
          />
        </div>
        {/* Meniu mobil în dreapta */}
        <div className="flex items-center">
          <button
            className="text-[#69657e] text-3xl p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Meniu"
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="bg-white/95 px-6 pb-4 pt-2 flex flex-col gap-4 text-[#69657e] font-semibold text-lg">
          <a href={pathname === '/despre-noi' ? '/#about' : '#about'} onClick={() => setMenuOpen(false)}>
            Despre noi
          </a>
          <a href={pathname === '/despre-noi' ? '/#classes' : '#classes'} onClick={() => setMenuOpen(false)}>
            Cursuri
          </a>
          <a href={pathname === '/despre-noi' ? '/#gallery' : '#gallery'} onClick={() => setMenuOpen(false)}>
            Galerie
          </a>
          <a href={pathname === '/despre-noi' ? '/#contact' : '#contact'} onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </>
  );
}
