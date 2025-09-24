'use client';
import { useState, useEffect } from 'react';

export default function FloatingWhatsAppButton({ menuOpen = false }) {
  const [isVisible, setIsVisible] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px, but only if menu is not open
      if (window.pageYOffset > 300 && !menuOpen) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const updateScreenSize = () => {
      if (window.innerWidth <= 480) {
        setScreenSize('mobile');
      } else if (window.innerWidth <= 768) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    // Initial screen size check
    updateScreenSize();

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', updateScreenSize);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', updateScreenSize);
    };
  }, [menuOpen]);

  // Hide button when menu is open
  useEffect(() => {
    if (menuOpen) {
      setIsVisible(false);
    }
  }, [menuOpen]);

  const handleWhatsAppClick = () => {
    const phoneNumber = '40766694224';
    const message = 'Bună! Am o întrebare despre cursurile de dans de la Mimi Dance Academy.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        right: '1rem',
        bottom: '1rem',
        zIndex: 50,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(1rem)',
        transition: 'all 0.3s ease-in-out',
        pointerEvents: isVisible ? 'auto' : 'none',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
        borderRadius: '0'
      }}
    >
      <button
        onClick={handleWhatsAppClick}
        aria-label="Contactează-ne pe WhatsApp"
        style={{ 
          background: 'transparent',
          border: 'none',
          outline: 'none',
          padding: '0',
          margin: '0',
          width: 'fit-content',
          height: 'fit-content',
          boxShadow: 'none',
          borderRadius: '0',
          cursor: 'pointer',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
      >
        <img
          src="/image/Mesaj pe WhatsApp pentru dans.png"
          alt="Contactează-ne pe WhatsApp"
          style={{ 
            width: screenSize === 'mobile' ? '180px' : screenSize === 'tablet' ? '200px' : '250px',
            height: 'auto',
            maxWidth: screenSize === 'mobile' ? '180px' : screenSize === 'tablet' ? '200px' : '250px',
            display: 'block',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            borderRadius: '0',
            padding: '0',
            margin: '0'
          }}
          onError={(e) => {
            console.error('Error loading WhatsApp banner image:', e);
            e.target.style.display = 'none';
          }}
        />
      </button>
    </div>
  );
}
