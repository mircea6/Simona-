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
      x: (i) => (i - currentIndex) * 200 + '%',
      y: (i) => Math.abs(i - currentIndex) * 20,
      scale: i => i === currentIndex ? 1 : 0.7,
      opacity: i => i === currentIndex ? 1 : 0.4,
      rotationY: i => i === currentIndex ? 0 : (i < currentIndex ? -30 : 30),
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
      x: (i) => (i - index) * 200 + '%',
      y: (i) => Math.abs(i - index) * 20,
      scale: i => i === index ? 1 : 0.7,
      opacity: i => i === index ? 1 : 0.4,
      rotationY: i => i === index ? 0 : (i < index ? -30 : 30),
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
      className={`py-20 h-full relative overflow-visible transition-all duration-300 z-0 ${
        menuOpen ? 'blur-sm' : 'blur-0'
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

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-pink mb-6 text-center">
            Galerie
          </h2>
          <p className="text-2xl text-gray-700 text-center mb-8 font-semibold">
            Imagini din spectacole și antrenamentele noastre
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink to-blue mx-auto rounded-full"></div>
        </div>

        {/* Image Slider */}
        <div className="relative overflow-visible py-20">
          <div 
            ref={sliderRef}
            className="gallery-slider relative h-96 md:h-[500px] overflow-visible"
            style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="gallery-slide absolute cursor-pointer"
                onClick={() => goToSlide(index)}
                style={{ 
                  transformStyle: 'preserve-3d',
                  width: '300px',
                  height: '400px',
                  left: '50%',
                  top: '50%',
                  marginLeft: '-150px',
                  marginTop: '-200px'
                }}
              >
                <div className="relative w-full h-full group rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">Imagine {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-pink scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Click pe imagini sau folosește săgețile pentru navigare
          </p>
        </div>
      </div>
    </section>
  );
}
