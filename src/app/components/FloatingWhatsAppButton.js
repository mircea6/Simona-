'use client';
import { useState, useEffect } from 'react';

export default function FloatingWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '40766694224';
    const message = 'Bună! Am o întrebare despre cursurile de dans de la Mimi Dance Academy.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      className={`floating-whatsapp-button ${
        isVisible ? 'visible' : 'hidden'
      }`}
    >
      <button
        onClick={handleWhatsAppClick}
        className="group relative focus:outline-none"
        aria-label="Contactează-ne pe WhatsApp"
        style={{ 
          background: 'transparent !important',
          border: 'none !important',
          outline: 'none !important',
          padding: '0',
          margin: '0',
          width: 'fit-content',
          height: 'fit-content',
          boxShadow: 'none !important',
          borderRadius: '0 !important'
        }}
      >
        <img
          src="/image/Mesaj pe WhatsApp pentru dans.png"
          alt="Contactează-ne pe WhatsApp"
          className="whatsapp-banner-image"
          style={{ 
            maxWidth: '100%', 
            height: 'auto',
            display: 'block',
            background: 'transparent !important',
            border: 'none',
            outline: 'none',
            boxShadow: 'none !important',
            borderRadius: '0 !important'
          }}
          onError={(e) => {
            console.error('Error loading WhatsApp banner image:', e);
            e.target.style.display = 'none';
          }}
        />
        
        {/* Pulse animation */}
        <div className="pulse-animation"></div>
      </button>
    </div>
  );
}
