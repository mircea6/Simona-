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
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </Link>
      )}
      
      {/* Navigația normală cu logo */}
      <div className="w-full relative z-50">
        <div className="max-w-7xl mx-auto flex justify-center px-10 py-6">
          <nav className="flex gap-8 items-center justify-center">
            <a
              href={pathname === '/despre-noi' ? '/#about' : '#about'}
              className="inline-block px-6 py-2 bg-white rounded-full text-gray-900 text-lg font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-pink-400 hover:text-white hover:border-pink-400 focus:bg-pink-400 focus:text-white focus:border-pink-400 no-underline"
            >
              Despre noi
            </a>
            <a
              href={pathname === '/despre-noi' ? '/#classes' : '#classes'}
              className="inline-block px-6 py-2 bg-white rounded-full text-gray-900 text-lg font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-pink-400 hover:text-white hover:border-pink-400 focus:bg-pink-400 focus:text-white focus:border-pink-400 no-underline"
            >
              Cursuri
            </a>
            <Link href="/">
              <Image
                src="/image/logo.png"
                alt="Logo"
                width={140}
                height={140}
                className="object-contain mx-6"
                priority
              />
            </Link>
            <a
              href={pathname === '/despre-noi' ? '/#gallery' : '#gallery'}
              className="inline-block px-6 py-2 bg-white rounded-full text-gray-900 text-lg font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-pink-400 hover:text-white hover:border-pink-400 focus:bg-pink-400 focus:text-white focus:border-pink-400 no-underline"
            >
              Galerie
            </a>
            <a
              href={pathname === '/despre-noi' ? '/#contact' : '#contact'}
              className="inline-block px-6 py-2 bg-white rounded-full text-gray-900 text-lg font-extrabold tracking-wide shadow-lg border-2 border-pink-200 transition-all duration-200 hover:bg-pink-400 hover:text-white hover:border-pink-400 focus:bg-pink-400 focus:text-white focus:border-pink-400 no-underline"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
