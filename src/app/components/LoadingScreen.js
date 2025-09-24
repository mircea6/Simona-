'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Simple rotation sequence
    const rotationSequence = () => {
      // First rotation
      setTimeout(() => {
        console.log('First rotation');
        setRotation(360);
      }, 500);
      
      // Second rotation
      setTimeout(() => {
        console.log('Second rotation');
        setRotation(720);
      }, 1500);
      
      // Third rotation
      setTimeout(() => {
        console.log('Third rotation');
        setRotation(1080);
      }, 2500);
      
      // Start transition after 3rd rotation
      setTimeout(() => {
        console.log('Starting transition');
        setIsTransitioning(true);
        // Hide loading screen after transition
        setTimeout(() => {
          console.log('Hiding loading screen');
          setIsLoading(false);
        }, 1200);
      }, 3500);
    };

    rotationSequence();
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-1200 ease-out ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background: 'linear-gradient(to right, #f8c6d4, #a7d8ff)'
      }}
    >
      {/* Logo with rotation animation */}
      <div className="flex flex-col items-center justify-center">
        <div 
          className="loading-logo-container relative w-48 h-48 rounded-full shadow-lg mx-auto"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: 'transform 0.6s ease-in-out',
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
            className="object-contain w-full h-full"
            priority
          />
        </div>

        {/* Text under the rotating logo */}
        <div className="text-center mt-8 w-full">
          <h1 className="text-white text-3xl md:text-4xl font-black tracking-wider drop-shadow-2xl mb-2" 
              style={{ 
                fontFamily: 'Courgette, cursive',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                letterSpacing: '0.1em',
                fontWeight: '900'
              }}>
            MIMI DANCE ACADEMY
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl font-medium mb-1" 
             style={{ 
               fontFamily: 'Courgette, cursive',
               textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
             }}>
            by
          </p>
          
          <p className="text-white text-xl md:text-2xl font-bold" 
             style={{ 
               fontFamily: 'Courgette, cursive',
               textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
             }}>
            Simona Moise
          </p>
        </div>
      </div>

    </div>
  );
}
