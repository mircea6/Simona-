'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [rotationCount, setRotationCount] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Simulate loading time with logo rotations
    const rotationSequence = () => {
      // First rotation
      setTimeout(() => setRotationCount(1), 0);
      
      // Second rotation (after 0.5s pause)
      setTimeout(() => setRotationCount(2), 1000);
      
      // Third rotation (after 0.5s pause)
      setTimeout(() => setRotationCount(3), 2000);
      
      // Start transition after 3rd rotation + 0.5s pause
      setTimeout(() => {
        setIsTransitioning(true);
        // Hide loading screen after transition
        setTimeout(() => {
          setIsLoading(false);
        }, 800); // Match transition duration
      }, 3000); // 3 rotations * 0.5s rotation + 0.5s pause = 3s total
    };

    rotationSequence();
  }, []);

  // Calculate total rotation based on rotation count
  const totalRotation = rotationCount * 360;

  if (!isLoading) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-800 ease-in-out ${
        isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'linear-gradient(to right, #f8c6d4, #a7d8ff)'
      }}
    >
      {/* Logo with rotation animation - same style as navigation */}
      <div className="flex flex-col items-center justify-center">
        <div 
          className="loading-logo-container relative w-48 h-48 rounded-full transition-all duration-300 ease backdrop-filter blur-10px shadow-lg mx-auto"
          style={{
            transform: `rotate(${totalRotation}deg)`,
            transition: 'transform 0.5s ease-in-out',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            backdropFilter: 'blur(10px)',
            padding: '20px'
          }}
        >
          <Image
            src="/image/logo.png"
            alt="Mimi Dance Academy Logo"
            width={200}
            height={200}
            className="object-contain w-full h-full logo-glow"
            priority
          />
        </div>

        {/* Text under the rotating logo */}
        <div className="text-center mt-8 w-full">
          <h1 className="text-white text-3xl md:text-4xl font-black tracking-wider animate-pulse drop-shadow-2xl mb-2" 
              style={{ 
                fontFamily: 'Oswald, Montserrat, Poppins, sans-serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.5)',
                letterSpacing: '0.1em',
                fontWeight: '900'
              }}>
            MIMI DANCE ACADEMY
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl font-medium mb-1" 
             style={{ 
               fontFamily: 'Montserrat, Poppins, sans-serif',
               textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
             }}>
            by
          </p>
          
          <p className="text-white text-xl md:text-2xl font-bold" 
             style={{ 
               fontFamily: 'Montserrat, Poppins, sans-serif',
               textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
             }}>
            Simona Moise
          </p>
        </div>
      </div>

      {/* Loading dots at bottom */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <div className="loading-dots flex justify-center space-x-2">
          <div className="w-3 h-3 bg-white/70 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-white/70 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-white/70 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
