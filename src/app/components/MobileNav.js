import Image from "next/image";

export default function MobileNav({ menuOpen, setMenuOpen }) {
  return (
    <div className="w-full bg-white/90">
      {/* Logo centrat */}
      <div className="flex items-center justify-center py-4">
        <Image src="/image/logo3.png" alt="Logo" width={40} height={40} className="object-contain" priority />
        <span className="text-gray-900 text-2xl font-bold ml-2">Coffee</span>
      </div>
      {/* Meniu mobil */}
      <div className="flex justify-center pb-2">
        <button className="text-gray-900 text-3xl p-2" onClick={() => setMenuOpen(v => !v)} aria-label="Meniu">
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="bg-white/95 px-6 pb-4 pt-2 flex flex-col gap-4 text-gray-900 font-semibold text-lg">
          <a href="#home" onClick={()=>setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={()=>setMenuOpen(false)}>About</a>
          <a href="#menu" onClick={()=>setMenuOpen(false)}>Menu</a>
          <a href="#testimonials" onClick={()=>setMenuOpen(false)}>Testimonials</a>
          <a href="#gallery" onClick={()=>setMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </div>
  );
}
