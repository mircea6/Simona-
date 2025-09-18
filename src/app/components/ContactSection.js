'use client';
import { useState, useEffect } from 'react';
import useFormAnimation from '../hooks/useFormAnimation';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nume: '',
    prenume: '',
    email: '',
    telefon: '',
    mesaj: '',
    gdpr: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Hook-uri pentru animațiile individuale ale fiecărui câmp
  const [numeRef, numeVisible] = useFormAnimation();
  const [prenumeRef, prenumeVisible] = useFormAnimation();
  const [emailRef, emailVisible] = useFormAnimation();
  const [telefonRef, telefonVisible] = useFormAnimation();
  const [mesajRef, mesajVisible] = useFormAnimation();
  const [gdprRef, gdprVisible] = useFormAnimation();
  const [buttonRef, buttonVisible] = useFormAnimation();

  const validateForm = () => {
    const newErrors = {};

    // Validare nume
    if (!formData.nume.trim()) {
      newErrors.nume = 'Numele este obligatoriu';
    } else if (formData.nume.trim().length < 2) {
      newErrors.nume = 'Numele trebuie să aibă cel puțin 2 caractere';
    }

    // Validare prenume
    if (!formData.prenume.trim()) {
      newErrors.prenume = 'Prenumele este obligatoriu';
    } else if (formData.prenume.trim().length < 2) {
      newErrors.prenume = 'Prenumele trebuie să aibă cel puțin 2 caractere';
    }

    // Validare email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email-ul este obligatoriu';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email-ul nu este valid';
    }

    // Validare telefon
    const phoneRegex = /^(\+40|0)[0-9]{9}$/;
    if (!formData.telefon.trim()) {
      newErrors.telefon = 'Telefonul este obligatoriu';
    } else if (!phoneRegex.test(formData.telefon.replace(/\s/g, ''))) {
      newErrors.telefon = 'Telefonul nu este valid (format: 07xxxxxxxx sau +407xxxxxxxx)';
    }


    // Validare mesaj
    if (!formData.mesaj.trim()) {
      newErrors.mesaj = 'Mesajul este obligatoriu';
    } else if (formData.mesaj.trim().length < 10) {
      newErrors.mesaj = 'Mesajul trebuie să aibă cel puțin 10 caractere';
    }

    // Validare GDPR
    if (!formData.gdpr) {
      newErrors.gdpr = 'Trebuie să fiți de acord cu politica de confidențialitate';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const emailSubject = `Mesaj nou de la ${formData.nume} ${formData.prenume} - Mimi Dance Academy`;
      
      const emailBody = `Mesaj nou de la formularul de contact:

Nume: ${formData.nume}
Prenume: ${formData.prenume}
Email: ${formData.email}
Telefon: ${formData.telefon}

Mesaj:
${formData.mesaj}

---
Trimis prin formularul de contact Mimi Dance Academy
Data: ${new Date().toLocaleString('ro-RO')}`;

      // Encodare pentru mailto
      const encodedSubject = encodeURIComponent(emailSubject);
      const encodedBody = encodeURIComponent(emailBody);
      
      // Adresa de email
      const emailAddress = 'academy.mimidance@gmail.com';
      
      // URL mailto
      const mailtoUrl = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;
      
      // Deschidere client email
      window.location.href = mailtoUrl;
      
      setSubmitStatus('success');
      
      // Reset form după 2 secunde
      setTimeout(() => {
        setFormData({
          nume: '',
          prenume: '',
          email: '',
          telefon: '',
          mesaj: '',
          gdpr: false
        });
        setSubmitStatus('');
      }, 2000);

    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-20 min-h-[80vh] sm:min-h-[90vh] md:h-screen bg-white flex items-center justify-center">
      <div className="container w-full max-w-2xl mx-auto px-2 md:px-4 relative flex flex-col justify-center min-h-[80vh] sm:min-h-[90vh] md:h-full">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-pink font-serif text-center px-2" style={{ fontFamily: 'Courgette, cursive' }}>Formular contact</h2>
        
        {submitStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-3 sm:px-4 py-2 sm:py-3 rounded mb-4 sm:mb-6 text-sm sm:text-base">
            ✅ Mesajul a fost pregătit cu succes! Clientul de email se va deschide automat.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded mb-4 sm:mb-6 text-sm sm:text-base">
            ❌ Vă rugăm să corectați erorile din formular.
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-2 sm:p-6 md:p-10 flex flex-col gap-2 sm:gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div 
              ref={numeRef}
              className={`flex-1 flex flex-col transition-all duration-700 ease-out ${
                isMobile || numeVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-full'
              }`}
            >
              <label htmlFor="nume" className="mb-1 text-sm sm:text-base font-semibold text-gray-800" style={{ fontFamily: 'Dancing Script, cursive' }}>Nume *</label>
              <input 
                type="text" 
                name="nume" 
                id="nume" 
                value={formData.nume}
                onChange={handleInputChange}
                className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border-2 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base lg:text-lg focus:outline-none transition ${
                  errors.nume ? 'border-red-500' : 'border-[#a7d8ff] focus:border-[#8bc5ff]'
                }`}
                placeholder="Introduceți numele"
              />
              {errors.nume && <span className="text-red-500 text-sm mt-1">{errors.nume}</span>}
            </div>
            <div 
              ref={prenumeRef}
              className={`flex-1 flex flex-col transition-all duration-700 ease-out ${
                isMobile || prenumeVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <label htmlFor="prenume" className="mb-1 text-sm sm:text-base font-semibold text-gray-800" style={{ fontFamily: 'Dancing Script, cursive' }}>Prenume *</label>
              <input 
                type="text" 
                name="prenume" 
                id="prenume" 
                value={formData.prenume}
                onChange={handleInputChange}
                className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border-2 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base lg:text-lg focus:outline-none transition ${
                  errors.prenume ? 'border-red-500' : 'border-[#a7d8ff] focus:border-[#8bc5ff]'
                }`}
                placeholder="Introduceți prenumele"
              />
              {errors.prenume && <span className="text-red-500 text-sm mt-1">{errors.prenume}</span>}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div 
              ref={emailRef}
              className={`flex-1 flex flex-col transition-all duration-700 ease-out ${
                isMobile || emailVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-full'
              }`}
            >
              <label htmlFor="email" className="mb-1 text-sm sm:text-base font-semibold text-gray-800" style={{ fontFamily: 'Dancing Script, cursive' }}>Email *</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={formData.email}
                onChange={handleInputChange}
                className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border-2 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base lg:text-lg focus:outline-none transition ${
                  errors.email ? 'border-red-500' : 'border-[#a7d8ff] focus:border-[#8bc5ff]'
                }`}
                placeholder="exemplu@email.com"
              />
              {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
            </div>
            <div 
              ref={telefonRef}
              className={`flex-1 flex flex-col transition-all duration-700 ease-out ${
                isMobile || telefonVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <label htmlFor="telefon" className="mb-1 text-sm sm:text-base font-semibold text-gray-800" style={{ fontFamily: 'Dancing Script, cursive' }}>Telefon *</label>
              <input 
                type="tel" 
                name="telefon" 
                id="telefon" 
                value={formData.telefon}
                onChange={handleInputChange}
                className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border-2 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base lg:text-lg focus:outline-none transition ${
                  errors.telefon ? 'border-red-500' : 'border-[#a7d8ff] focus:border-[#8bc5ff]'
                }`}
                placeholder="07xxxxxxxx"
              />
              {errors.telefon && <span className="text-red-500 text-sm mt-1">{errors.telefon}</span>}
            </div>
          </div>


          <div 
            ref={mesajRef}
            className={`flex flex-col transition-all duration-700 ease-out ${
              isMobile || mesajVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-full'
            }`}
          >
            <label htmlFor="mesaj" className="mb-1 text-sm sm:text-base font-semibold text-gray-800" style={{ fontFamily: 'Dancing Script, cursive' }}>Mesaj *</label>
            <textarea 
              name="mesaj" 
              id="mesaj" 
              value={formData.mesaj}
              onChange={handleInputChange}
              maxLength={500} 
              className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 border-2 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base lg:text-lg min-h-[50px] sm:min-h-[80px] md:min-h-[100px] focus:outline-none transition resize-none ${
                errors.mesaj ? 'border-red-500' : 'border-[#a7d8ff] focus:border-[#8bc5ff]'
              }`}
              placeholder="Scrieți mesajul dumneavoastră aici..."
            />
            <div className="flex justify-between items-center mt-1">
              {errors.mesaj && <span className="text-red-500 text-sm">{errors.mesaj}</span>}
              <span className="text-gray-500 text-sm ml-auto">{formData.mesaj.length}/500</span>
            </div>
          </div>

          <div 
            ref={gdprRef}
            className={`flex flex-col transition-all duration-700 ease-out ${
              isMobile || gdprVisible 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-75'
            }`}
          >
            <label className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
              <input 
                type="checkbox" 
                name="gdpr"
                checked={formData.gdpr}
                onChange={handleInputChange}
                className={`w-4 h-4 sm:w-5 sm:h-5 ${errors.gdpr ? 'border-red-500' : ''}`}
                style={{ accentColor: '#a7d8ff' }}
              />
              Sunt de acord cu politica de confidențialitate. *
            </label>
            {errors.gdpr && <span className="text-red-500 text-sm mt-1">{errors.gdpr}</span>}
          </div>

          <button 
            ref={buttonRef}
            type="submit" 
            disabled={isSubmitting}
            className={`w-full text-xs sm:text-sm md:text-base lg:text-lg font-semibold py-2 sm:py-2.5 md:py-3 rounded-full transition-all duration-700 ease-out mt-2 ${
              isSubmitting 
                ? 'bg-gray-400 text-white cursor-not-allowed' 
                : 'bg-[#a7d8ff] text-white hover:bg-[#8bc5ff] shadow-lg'
            } ${
              isMobile || buttonVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-full'
            }`}
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            {isSubmitting ? 'Se pregătește...' : 'Trimite pe Email'}
          </button>
        </form>
      </div>
    </section>
  );
}
