'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function FooterSection() {
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setEmailStatus('success');
      setEmail('');
      setTimeout(() => setEmailStatus(''), 3000);
    } else {
      setEmailStatus('error');
      setTimeout(() => setEmailStatus(''), 3000);
    }
  };

  return (
    <footer className="bg-pink-50 relative">
      {/* Wave SVG at top */}
      <div className="wave-svg-footer"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Slogan Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex flex-col items-center lg:items-start mb-4">
              <Image
                src="/image/logo.png"
                alt="Mimi Dance Academy Logo"
                width={120}
                height={120}
                className="mb-2"
              />
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-gray-800 font-serif">Mimi Dance</h3>
                <p className="text-lg text-gray-700 font-serif">ACADEMY</p>
              </div>
            </div>
            <p className="text-gray-700 text-center lg:text-left">
              Dezvoltare prin artă!
            </p>
          </div>

          {/* Useful Links Section */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 font-serif mb-4">Link-uri utile</h4>
            <ul className="space-y-2">
              <li>
                <a href="/politica-confidentialitate" className="text-gray-700 hover:text-pink-600 transition-colors">
                  Politica de confidențialitate
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">
                  ANPC
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 font-serif mb-4">Contact</h4>
            <div className="space-y-2 mb-4">
              <p className="text-gray-700">Tel. Contact: 0766694224</p>
              <p className="text-gray-700">E-mail: academy.mimidance@gmail.com</p>
            </div>
            
            <div>
              <h5 className="font-bold text-gray-800 mb-2">Program de funcționare:</h5>
              <div className="space-y-1">
                <p className="text-gray-700">L-V: 8:00-18:00</p>
                <p className="text-gray-700">S-D: Liber</p>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 font-serif mb-4">Newsletter</h4>
            <p className="text-gray-700 mb-4">
              Abonează-te la newsletter pentru a avea acces la ultimele noutăți.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-pink-50 focus:outline-none focus:border-pink-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-pink-200 border border-pink-400 rounded-lg text-gray-800 hover:bg-pink-300 transition-colors"
              >
                Trimite
              </button>
            </form>

            {emailStatus === 'success' && (
              <p className="text-green-600 text-sm">✅ Te-ai abonat cu succes!</p>
            )}
            {emailStatus === 'error' && (
              <p className="text-red-600 text-sm">❌ Te rugăm să introduci un email valid.</p>
            )}

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Mimi Dance Academy - Made With ❤️
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="flex flex-col items-center p-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-sm text-gray-700">SOLUȚIONAREA ONLINE</span>
                </div>
                <span className="text-xs text-gray-600">A LITIGIILOR</span>
                <span className="text-xs text-gray-500">DETALII</span>
              </a>
              
              <a href="#" className="flex flex-col items-center p-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                  <span className="text-sm text-gray-700">ANPC SOLUȚIONAREA</span>
                </div>
                <span className="text-xs text-gray-600">ALTERNATIVA A LITIGIILOR</span>
                <span className="text-xs text-gray-500">DETALII</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
