'use client';
import { useState } from 'react';
import Navigation from "../components/Navigation";
import FooterSection from "../components/FooterSection";

export default function DespreNoi() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <main 
      className={`min-h-screen py-16 px-4 flex flex-col items-center relative transition-all duration-300 ${menuOpen ? 'blur-md' : 'blur-0'}`}
      style={{
        backgroundImage: "url('/image/note-muzicale-panglici.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay pentru a îmbunătăți lizibilitatea */}
      <div className="absolute inset-0 bg-white/80"></div>
      
      <div className="relative z-10 w-full flex flex-col items-center pt-28 lg:pt-50">
        <h1 className="text-5xl font-extrabold text-pink mb-12 text-center animate-fade-in-left" style={{ fontFamily: 'Courgette, cursive' }}>
          Despre noi
        </h1>
        
        {/* Container pentru carduri - flex pe desktop, coloane pe mobile */}
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8">
        <section className="flex-1 bg-pink-50 rounded-3xl shadow-lg p-10 animate-fade-in-left-delay-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Courgette, cursive' }}>
            Povestea Mimi Dance
          </h2>
          <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'Courgette, cursive' }}>
            Sunt Simona, fondatorul Mimi Dance Academy, iar de la vârsta de 4 ani
            dansul si gimnastica au fost parte din viata mea si am crescut odată
            cu ele, transformându-se intr-o adevarata pasiune.
            </p>
          <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'Courgette, cursive' }}>
            Am făcut parte din lotul național de gimnastică aerobică pana la 
            vârsta de 16 ani, iar mai târziu mi-am continuat drumul in lumea
            spectacolelor alături de trupa de acrobați &ldquo;Xtreme&rdquo;, cu experiențe
            extraordinare pe scenele din Europa si Emiratele Arabe Unite.
          </p>
          <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'Courgette, cursive' }}>
            Datorită pasiunii pentru gimnastica si dans, am decis sa înființez in
            anul 2022 conceptul Mimi Dance. De 3 ani le transmit celor mici
            dragostea pentru mișcare, dans si armonie, intr-un mod jucăuș,
            prietenos si plin de entuziasm.
          </p>
        </section>
        
        <section className="flex-1 bg-pink-50 rounded-3xl shadow-lg p-10 animate-fade-in-left-delay-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Courgette, cursive' }}>
            Viziunea noastră
          </h2>
          <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'Courgette, cursive' }}>
            Credem că dansul si gimnastica sunt mai mult decât mișcare, sunt un
            limbaj al bucuriei, al disciplinei si al creativității. Prin dans si
            gimnastica cu panglici, ii învățăm pe copii să-și exprime emoțiile,
            să-și descopere corpul și să capete încredere in ei.
          </p>
          <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'Courgette, cursive' }}>
            Fiecare lectie este o combinatie intre joc, arta si educație, unde cei
            mici învăța să-și coordoneze mișcările, să-și dezvolte postura,
            flexibilitatea si gratia. In acelasi timp, invatam sa lucram impreuna,
            sa ne bucuram de reusitele fiecaruia si sa transformam sportul intr-o
            experienta plina de entuziasm.
          </p>
          <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'Courgette, cursive' }}>
            Ce ne face diferiti este modul in care imbinam sportul cu frumusetea
            dansului si cu jocul copilariei. La noi fiecare copil se simte vazut,
            apreciat si incurajat sa straluceasca in felul lui unic.
          </p>
        </section>
        
        <section className="flex-1 bg-pink-50 rounded-3xl shadow-lg p-10 animate-fade-in-left-delay-3">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Courgette, cursive' }}>
            Experiența noastră
          </h2>
          <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'Courgette, cursive' }}>
            In momentul de fata activam in peste 14 gradinite/afteschool-uri
            private, cat si de stat, acestea avand diferite sisteme aducationale
            precum Waldorf, Montessori sau cele clasice.
          </p>
        
          <div className="text-sm text-gray-700 mb-6">
            <ul className="list-disc list-inside space-y-2">
              <li>Montessori Land 1</li>
              <li>Montessori Land 2</li>
              <li>Ana Lugojana</li> 
              <li>Ana Lugojana 2</li>
              <li>Ana Lugojana 3</li>
              <li>Ana Lugojana 4</li>
              <li>ABCDINO</li>
              <li>Clubul Diandra</li>
              <li>Exploria</li>
              <li>Liebe kinder 1</li>
              <li>Liebe kinder 2</li>
              <li>Liebe kinder 3</li>
              <li>Odyssey Kindergarten</li>
              <li>Kid2Kids</li>
            </ul>
          </div>
          
          <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'Courgette, cursive' }}>
            De la educatia bazata pe explorare si creativitate, pana la invatarea
            structurata si orientata pe performanta, diversitatea sistemelor
            educationale reflecta nevoia de a oferii copiilor oportunități variate
            pentru a invata si a se dezvolta intr-un mod care le satisface cel mai
            bine nevoile.
          </p>
        </section>
        </div>
      </div>
    </main>

    <FooterSection/>
    </div>
  );
}
