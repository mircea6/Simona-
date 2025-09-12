"use client";
import Navigation from "../components/Navigation";

export default function PoliticaConfidentialitate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black text-pink mb-8 text-center">
            Politica de Confidențialitate
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink to-blue-400 mx-auto mb-12"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-100">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              <strong>Mimi Dance Academy</strong> respectă confidențialitatea și
              protecția datelor personale ale tuturor vizitatorilor, clienților
              și colaboratorilor noștri. Prezenta politică descrie modul în care
              colectăm, utilizăm, stocăm și protejăm datele tale în conformitate
              cu legislația în vigoare, inclusiv Regulamentul (UE) 2016/679 –
              GDPR.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-pink mb-4">
                  1. Cine suntem
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Website-ul{" "}
                  <a
                    href="https://www.mimidanceacademy.ro"
                    className="text-pink hover:text-pink-600 underline"
                  >
                    www.mimidanceacademy.ro
                  </a>{" "}
                  este administrat de <strong>SC Mimi Dance Academy SRL</strong>
                  , cu sediul social în București, România, înregistrată la
                  Registrul Comerțului sub nr. J40/XXXX/2025, având CUI
                  XXXXXXXX.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Pentru orice întrebări legate de protecția datelor, ne poți
                  contacta la adresa{" "}
                  <a
                    href="mailto:contact@mimidanceacademy.ro"
                    className="text-pink hover:text-pink-600 underline"
                  >
                    contact@mimidanceacademy.ro
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-pink mb-4">
                  2. Ce sunt datele cu caracter personal?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Datele cu caracter personal sunt orice informații prin care o
                  persoană poate fi identificată direct sau indirect: nume,
                  adresă, e-mail, telefon, adresă IP, preferințe sau date de
                  locație.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-pink mb-4">
                  3. Datele pe care le colectăm
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Colectăm doar datele strict necesare pentru desfășurarea
                  activității noastre:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Nume și prenume</li>
                  <li>Număr de telefon</li>
                  <li>Adresă de e-mail</li>
                  <li>Adresă poștală (dacă este cazul)</li>
                  <li>
                    Date de facturare și date bancare (dacă se solicită servicii
                    contra cost)
                  </li>
                  <li>
                    Informații furnizate prin formulare online, chat sau rețele
                    sociale
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-pink mb-4">
                  4. Cum colectăm datele
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>
                    Prin completarea formularelor de contact sau înscriere de pe
                    site
                  </li>
                  <li>Prin corespondență pe e-mail sau telefon</li>
                  <li>
                    Prin participarea la evenimente sau înscriere la cursuri
                  </li>
                  <li>
                    Prin cookie-uri și tehnologii similare pentru îmbunătățirea
                    experienței online
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-pink mb-4">
                  5. Scopurile prelucrării datelor
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Datele tale sunt utilizate pentru:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>
                    Comunicarea cu tine (confirmări, programări, informații
                    despre cursuri)
                  </li>
                  <li>
                    Crearea de oferte personalizate, promoții și newslettere
                  </li>
                  <li>
                    Îmbunătățirea experienței pe site și a serviciilor noastre
                  </li>
                  <li>Prevenirea și detectarea fraudelor sau abuzurilor</li>
                  <li>Respectarea obligațiilor legale și contabile</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-pink mb-4">
                  6. Temeiul legal al prelucrării
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Prelucrarea datelor se face în baza:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>
                    Consimțământului tău explicit (ex. abonare newsletter)
                  </li>
                  <li>Executării unui contract (ex. înscriere la cursuri)</li>
                  <li>Obligațiilor legale (ex. facturare)</li>
                  <li>
                    Interesului legitim al academiei (ex. securitate IT,
                    optimizarea serviciilor)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-pink mb-4">
                  7. Stocarea și securitatea datelor
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>
                    Toate datele sunt stocate în siguranță pe servere protejate
                    și accesibile doar personalului autorizat.
                  </li>
                  <li>
                    Datele sunt păstrate pe durata necesară desfășurării
                    activităților pentru care au fost colectate și ulterior
                    transformate în date anonime pentru statistici interne.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-pink mb-4">
                  8. Drepturile tale
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Conform GDPR, ai următoarele drepturi:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Dreptul la informare și acces la date</li>
                  <li>Dreptul la rectificare</li>
                  <li>Dreptul la ștergere (&ldquo;dreptul de a fi uitat&rdquo;)</li>
                  <li>Dreptul la restricționarea prelucrării</li>
                  <li>Dreptul la portabilitatea datelor</li>
                  <li>Dreptul la opoziție</li>
                  <li>Dreptul de a nu fi supus unei decizii automate</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Pentru exercitarea acestor drepturi, ne poți contacta la{" "}
                  <a
                    href="mailto:contact@mimidanceacademy.ro"
                    className="text-pink hover:text-pink-600 underline"
                  >
                    contact@mimidanceacademy.ro
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-pink mb-4">
                  9. Divulgarea datelor
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nu vindem, nu închiriem și nu transferăm datele tale către
                  terți, cu excepția:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>
                    partenerilor de servicii strict necesari (ex. procesatori de
                    plăți, furnizori IT), care respectă aceleași standarde de
                    securitate
                  </li>
                  <li>autorităților, atunci când legea o impune</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-pink mb-4">
                  10. Cookie-uri și tehnologii similare
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Site-ul utilizează cookie-uri pentru a îmbunătăți
                  funcționalitatea și a personaliza experiența. Poți controla
                  utilizarea acestora din setările browserului tău.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-pink mb-4">
                  11. Modificarea politicii
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Ne rezervăm dreptul de a actualiza această politică oricând,
                  pentru a reflecta modificările legislative sau schimbările
                  interne. Versiunea actualizată va fi disponibilă permanent pe
                  site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-pink mb-4">
                  12. Contact
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dacă ai întrebări, nelămuriri sau dorești să îți exerciți
                  drepturile, ne poți scrie la:
                </p>
                <div className="bg-pink-50 rounded-2xl p-6 border border-pink-200">
                  <p className="text-gray-700 mb-2">
                    📩{" "}
                    <a
                      href="mailto:academy.mimidance@gmail.com"
                      className="text-pink hover:text-pink-600 underline font-semibold"
                    >
                      academy.mimidance@gmail.com
                    </a>
                  </p>
                  <p className="text-gray-700">📍 București, România</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
