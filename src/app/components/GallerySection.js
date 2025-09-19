'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GallerySection({ menuOpen = false }) {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      // Consider mobile for devices up to 768px, tablet for 768-1024px, desktop for 1024px+
      setIsMobile(width < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sample gallery images - replace with your actual images
  const galleryImages = [
    '/image/dans-cu-copii-fericiti.png',
    '/image/dans-cu-panglici.png',
    '/image/vals-pe-dansul-mirilor.png',
    '/image/dansul-mirilor.png',
    '/image/magic-ribbons.png',
    '/image/happy-dance.png.webp'
  ];

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const slides = slider.querySelectorAll('.gallery-slide');
    
    // Initial setup - arrange slides in arc formation
    gsap.set(slides, {
      x: (i) => (i - currentIndex) * (isMobile ? 70 : 130) + '%',
      y: (i) => Math.abs(i - currentIndex) * (isMobile ? 10 : 18),
      scale: i => i === currentIndex ? 1 : (isMobile ? 0.8 : 0.65),
      opacity: i => i === currentIndex ? 1 : 0.4,
      rotationY: i => i === currentIndex ? 0 : (i < currentIndex ? -35 : 35),
      z: i => i === currentIndex ? 50 : -200
    });

    // ScrollTrigger animation
    ScrollTrigger.create({
      trigger: slider,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to(slides, {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out"
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [currentIndex]);

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    const slides = sliderRef.current?.querySelectorAll('.gallery-slide');
    if (!slides) return;

    // Animate all slides to new positions with arc effect
    gsap.to(slides, {
      x: (i) => (i - index) * (isMobile ? 70 : 130) + '%',
      y: (i) => Math.abs(i - index) * (isMobile ? 10 : 18),
      scale: i => i === index ? 1 : (isMobile ? 0.8 : 0.65),
      opacity: i => i === index ? 1 : 0.4,
      rotationY: i => i === index ? 0 : (i < index ? -35 : 35),
      z: i => i === index ? 50 : -200,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }
    });
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    goToSlide(prevIndex);
  };

  return (
    <section 
      id="gallery" 
      className={`py-16 sm:py-20 md:py-20 min-h-[80vh] sm:min-h-[90vh] md:h-screen relative overflow-visible transition-all duration-300 z-0 mb-8 sm:mb-12 md:mb-0 flex items-center justify-center ${
        menuOpen ? 'blur-md' : 'blur-0'
      }`}
      style={{
        backgroundImage: "url('/image/note-muzicale-panglici.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay pentru opacitate */}
      <div className="absolute inset-0 bg-white/60"></div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full px-2 md:max-w-7xl md:mx-auto md:px-4 relative z-10 flex flex-col justify-center min-h-[80vh] sm:min-h-[90vh] md:h-full">
        <div className="text-center mb-6 sm:mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-pink mb-3 sm:mb-4 md:mb-6 text-center" style={{ fontFamily: 'Courgette, cursive' }}>
            Galerie
          </h2>
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-pink to-blue mx-auto rounded-full"></div>
        </div>

        {/* Image Slider */}
        <div className="relative overflow-visible py-8 sm:py-12 md:py-20">
          <div 
            ref={sliderRef}
            className="gallery-slider relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] overflow-visible"
            style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="gallery-slide absolute cursor-pointer"
                onClick={() => goToSlide(index)}
                style={{ 
                  transformStyle: 'preserve-3d',
                  width: isMobile ? '160px' : '280px',
                  height: isMobile ? '240px' : '420px',
                  left: '50%',
                  top: '50%',
                  marginLeft: isMobile ? '-80px' : '-140px',
                  marginTop: isMobile ? '-120px' : '-210px'
                }}
              >
                <div className="relative w-full h-full group rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-4 sm:space-x-5 md:space-x-6">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-pink scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows - positioned relative to gallery section */}
      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-2 sm:right-4 md:right-6 lg:right-8 xl:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 z-50"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-2 sm:left-4 md:left-6 lg:left-8 xl:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 z-50"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </section>
  );
}
