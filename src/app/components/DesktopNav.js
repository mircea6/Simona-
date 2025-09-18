'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Schimbă la 100px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Logo-ul sticky care apare doar când se scrollează */}
      {isScrolled && (
        <Link href="/" className="sticky-logo">
          <Image
            src="/image/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            priority
          />
        </Link>
      )}
      
      {/* Navigația normală cu logo */}
      <div className="w-full relative z-50">
        <div className="max-w-7xl mx-auto flex justify-center px-2 sm:px-4 md:px-6 lg:px-10 py-3 sm:py-4 md:py-6">
          <nav className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center justify-center">
            <a
              href={pathname === '/despre-noi' ? '/#about' : '#about'}
              className="inline-block px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-white rounded-full text-gray-900 text-sm sm:text-base md:text-lg font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-sky-300 hover:text-white hover:border-sky-300 focus:bg-sky-300 focus:text-white focus:border-sky-300 no-underline"
            >
              Despre noi
            </a>
            <a
              href={pathname === '/despre-noi' ? '/#classes' : '#classes'}
              className="inline-block px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-white rounded-full text-gray-900 text-sm sm:text-base md:text-lg font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-sky-300 hover:text-white hover:border-sky-300 focus:bg-sky-300 focus:text-white focus:border-sky-300 no-underline"
            >
              Cursuri
            </a>
            <Link href="/">
              <Image
                src="/image/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="object-contain mx-2 sm:mx-4 md:mx-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36"
                priority
              />
            </Link>
            <a
              href={pathname === '/despre-noi' ? '/#gallery' : '#gallery'}
              className="inline-block px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-white rounded-full text-gray-900 text-sm sm:text-base md:text-lg font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-sky-300 hover:text-white hover:border-sky-300 focus:bg-sky-300 focus:text-white focus:border-sky-300 no-underline"
            >
              Galerie
            </a>
            <a
              href={pathname === '/despre-noi' ? '/#contact' : '#contact'}
              className="inline-block px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-white rounded-full text-gray-900 text-sm sm:text-base md:text-lg font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-sky-300 hover:text-white hover:border-sky-300 focus:bg-sky-300 focus:text-white focus:border-sky-300 no-underline"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
