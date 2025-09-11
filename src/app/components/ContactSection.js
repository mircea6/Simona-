'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nume: '',
    prenume: '',
    email: '',
    telefon: '',
    locatie: [],
    mesaj: '',
    gdpr: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

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

    // Validare locație
    if (formData.locatie.length === 0) {
      newErrors.locatie = 'Selectați cel puțin o locație';
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
    
    if (type === 'checkbox' && name === 'locatie') {
      const newLocatie = checked 
        ? [...formData.locatie, value]
        : formData.locatie.filter(loc => loc !== value);
      setFormData({ ...formData, locatie: newLocatie });
    } else {
      setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    }

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
      // Formatare mesaj pentru email
      const locatiiText = formData.locatie.map(loc => 
        loc === 'victoriei' ? 'Sala Victoriei' : 'Sala Universitate'
      ).join(', ');

      const emailSubject = `Mesaj nou de la ${formData.nume} ${formData.prenume} - Mimi Dance Academy`;
      
      const emailBody = `Mesaj nou de la formularul de contact:

Nume: ${formData.nume}
Prenume: ${formData.prenume}
Email: ${formData.email}
Telefon: ${formData.telefon}
Locație preferată: ${locatiiText}

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
          locatie: [],
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
    <section id="contact" className="py-20 bg-white">
      <div className="container max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pink-900 font-serif text-center">Formular contact</h2>
        
        {submitStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            ✅ Mesajul a fost pregătit cu succes! Clientul de email se va deschide automat.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            ❌ Vă rugăm să corectați erorile din formular.
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label htmlFor="nume" className="mb-1 text-base font-semibold text-gray-800">Nume *</label>
              <input 
                type="text" 
                name="nume" 
                id="nume" 
                value={formData.nume}
                onChange={handleInputChange}
                className={`px-4 py-2 border-2 rounded-xl text-lg focus:outline-none transition ${
                  errors.nume ? 'border-red-500' : 'border-pink-800 focus:border-pink-400'
                }`}
                placeholder="Introduceți numele"
              />
              {errors.nume && <span className="text-red-500 text-sm mt-1">{errors.nume}</span>}
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="prenume" className="mb-1 text-base font-semibold text-gray-800">Prenume *</label>
              <input 
                type="text" 
                name="prenume" 
                id="prenume" 
                value={formData.prenume}
                onChange={handleInputChange}
                className={`px-4 py-2 border-2 rounded-xl text-lg focus:outline-none transition ${
                  errors.prenume ? 'border-red-500' : 'border-pink-800 focus:border-pink-400'
                }`}
                placeholder="Introduceți prenumele"
              />
              {errors.prenume && <span className="text-red-500 text-sm mt-1">{errors.prenume}</span>}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label htmlFor="email" className="mb-1 text-base font-semibold text-gray-800">Email *</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={formData.email}
                onChange={handleInputChange}
                className={`px-4 py-2 border-2 rounded-xl text-lg focus:outline-none transition ${
                  errors.email ? 'border-red-500' : 'border-pink-800 focus:border-pink-400'
                }`}
                placeholder="exemplu@email.com"
              />
              {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="telefon" className="mb-1 text-base font-semibold text-gray-800">Telefon *</label>
              <input 
                type="tel" 
                name="telefon" 
                id="telefon" 
                value={formData.telefon}
                onChange={handleInputChange}
                className={`px-4 py-2 border-2 rounded-xl text-lg focus:outline-none transition ${
                  errors.telefon ? 'border-red-500' : 'border-pink-800 focus:border-pink-400'
                }`}
                placeholder="07xxxxxxxx"
              />
              {errors.telefon && <span className="text-red-500 text-sm mt-1">{errors.telefon}</span>}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-base font-semibold text-gray-800">Alegeți locația preferată: *</span>
            <div className="flex gap-6 items-center">
              <label className="flex items-center gap-2 text-base text-gray-700">
                <input 
                  type="checkbox" 
                  name="locatie" 
                  value="victoriei" 
                  checked={formData.locatie.includes('victoriei')}
                  onChange={handleInputChange}
                  className="accent-pink-600 w-5 h-5" 
                />
                Sala Victoriei
              </label>
              <label className="flex items-center gap-2 text-base text-gray-700">
                <input 
                  type="checkbox" 
                  name="locatie" 
                  value="universitate" 
                  checked={formData.locatie.includes('universitate')}
                  onChange={handleInputChange}
                  className="accent-pink-600 w-5 h-5" 
                />
                Sala Universitate
              </label>
            </div>
            {errors.locatie && <span className="text-red-500 text-sm mt-1">{errors.locatie}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="mesaj" className="mb-1 text-base font-semibold text-gray-800">Mesaj *</label>
            <textarea 
              name="mesaj" 
              id="mesaj" 
              value={formData.mesaj}
              onChange={handleInputChange}
              maxLength={500} 
              className={`px-4 py-2 border-2 rounded-xl text-lg min-h-[100px] focus:outline-none transition resize-none ${
                errors.mesaj ? 'border-red-500' : 'border-pink-800 focus:border-pink-400'
              }`}
              placeholder="Scrieți mesajul dumneavoastră aici..."
            />
            <div className="flex justify-between items-center mt-1">
              {errors.mesaj && <span className="text-red-500 text-sm">{errors.mesaj}</span>}
              <span className="text-gray-500 text-sm ml-auto">{formData.mesaj.length}/500</span>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-base text-gray-700">
              <input 
                type="checkbox" 
                name="gdpr"
                checked={formData.gdpr}
                onChange={handleInputChange}
                className={`accent-pink-600 w-5 h-5 ${errors.gdpr ? 'border-red-500' : ''}`}
              />
              Sunt de acord cu politica de confidențialitate. *
            </label>
            {errors.gdpr && <span className="text-red-500 text-sm mt-1">{errors.gdpr}</span>}
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full border-2 text-lg font-semibold py-3 rounded-xl transition mt-2 ${
              isSubmitting 
                ? 'border-gray-400 text-gray-400 cursor-not-allowed' 
                : 'border-pink-800 text-pink-900 hover:bg-pink-800 hover:text-white'
            }`}
          >
            {isSubmitting ? 'Se pregătește...' : 'Trimite pe Email'}
          </button>
        </form>
      </div>
    </section>
  );
}
