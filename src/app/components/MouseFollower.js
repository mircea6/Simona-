'use client';
import { useEffect } from 'react';

export default function MouseFollower() {
  useEffect(() => {
    const updateGradients = (x, y, section) => {
      section.style.setProperty('--mouse-x', `${x}%`);
      section.style.setProperty('--mouse-y', `${y}%`);
      section.style.setProperty('--mouse-x-2', `${(x + 20) % 100}%`);
      section.style.setProperty('--mouse-y-2', `${(y + 15) % 100}%`);
      section.style.setProperty('--mouse-x-3', `${(x - 10) % 100}%`);
      section.style.setProperty('--mouse-y-3', `${(y - 20) % 100}%`);
      section.style.setProperty('--mouse-x-4', `${(x + 30) % 100}%`);
      section.style.setProperty('--mouse-y-4', `${(y + 25) % 100}%`);
    };

    const handleMouseMove = (e) => {
      const sections = document.querySelectorAll('.animated-bg');
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        updateGradients(x, y, section);
      });
    };

    // Only add mouse events for desktop
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
}