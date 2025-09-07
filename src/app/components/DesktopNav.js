import Image from "next/image";

export default function DesktopNav() {
  return (
    <div className="w-full bg-[#FADADD]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo stânga */}
        <div className="flex items-center gap-2">
          <Image src="/image/logo3.png" alt="Logo" width={40} height={40} className="object-contain" priority />
          <span className="text-gray-900 text-2xl font-bold">Coffee</span>
        </div>
        {/* Meniu desktop centrat */}
        <nav className="flex gap-10 mx-auto">
          <a href="#home" className="text-gray-900 font-medium hover:text-pink-500 transition">Home</a>
          <a href="#about" className="text-gray-900 font-medium hover:text-pink-500 transition">About</a>
          <a href="#menu" className="text-gray-900 font-medium hover:text-pink-500 transition">Menu</a>
          <a href="#testimonials" className="text-gray-900 font-medium hover:text-pink-500 transition">Testimonials</a>
          <a href="#gallery" className="text-gray-900 font-medium hover:text-pink-500 transition">Gallery</a>
          <a href="#contact" className="text-gray-900 font-medium hover:text-pink-500 transition">Contact</a>
        </nav>
      </div>
    </div>
  );
}
