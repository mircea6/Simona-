import Image from "next/image";
import { usePathname } from "next/navigation";

export default function MobileNav({ menuOpen, setMenuOpen }) {
  const pathname = usePathname();
  
  return (
    <>
      <div className="flex justify-between items-center w-full">
        {/* Logo centrat */}
        <div className="flex items-center justify-center py-4">
          <Image
            src="/image/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </div>
        {/* Meniu mobil */}
        <div className="flex justify-center pb-2">
          <button
            className="text-[#69657e] text-3xl p-2"
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
