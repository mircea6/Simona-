import Image from "next/image";

export default function DesktopNav() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto flex justify-center px-10 py-6">
        <nav className="flex gap-6 items-center justify-center">
          <a href="#about" className="inline-block px-10 py-5 bg-white rounded-full text-gray-900 text-4xl font-black transition-colors duration-200 hover:bg-pink-300 hover:text-white shadow-md no-underline">Despre noi</a>
          <a href="#classes" className="inline-block px-10 py-5 bg-white rounded-full text-gray-900 text-4xl font-black transition-colors duration-200 hover:bg-pink-300 hover:text-white shadow-md no-underline">Cursuri</a>
          <Image src="/image/logo3.png" alt="Logo" width={100} height={100} className="object-contain mx-6" priority />
          <a href="#gallery" className="inline-block px-10 py-5 bg-white rounded-full text-gray-900 text-4xl font-black transition-colors duration-200 hover:bg-pink-300 hover:text-white shadow-md no-underline">Galerie</a>
          <a href="#contact" className="inline-block px-10 py-5 bg-white rounded-full text-gray-900 text-4xl font-black transition-colors duration-200 hover:bg-pink-300 hover:text-white shadow-md no-underline">Contact</a>
        </nav>
      </div>
    </div>
  );
}
