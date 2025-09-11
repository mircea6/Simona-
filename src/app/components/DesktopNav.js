import Image from "next/image";

export default function DesktopNav() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto flex justify-center px-10 py-6">
        <nav className="flex gap-16 items-center justify-center">
          <a
            href="#about"
            className="inline-block px-6 py-2 bg-white rounded-full text-gray-900 text-lg font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-pink-400 hover:text-white hover:border-pink-400 focus:bg-pink-400 focus:text-white focus:border-pink-400 no-underline"
          >
            Despre noi
          </a>
          <a
            href="#classes"
            className="inline-block px-6 py-2 bg-white rounded-full text-gray-900 text-lg font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-pink-400 hover:text-white hover:border-pink-400 focus:bg-pink-400 focus:text-white focus:border-pink-400 no-underline"
          >
            Cursuri
          </a>
          <Image src="/image/logo3.png" alt="Logo" width={110} height={110} className="object-contain mx-14" priority />
          <a
            href="#gallery"
            className="inline-block px-6 py-2 bg-white rounded-full text-gray-900 text-lg font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-pink-400 hover:text-white hover:border-pink-400 focus:bg-pink-400 focus:text-white focus:border-pink-400 no-underline"
          >
            Galerie
          </a>
          <a
            href="#contact"
            className="inline-block px-6 py-2 bg-white rounded-full text-gray-900 text-lg font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-pink-400 hover:text-white hover:border-pink-400 focus:bg-pink-400 focus:text-white focus:border-pink-400 no-underline"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}
