import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* HERO + NAVBAR cu Tailwind, ajustat după screenshot */}
      <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none blur-[8px] brightness-90 opacity-80 transition-all"
        >
          <source src="/image/intro.mp4" type="video/mp4" />
        </video>
        <header className="relative z-10 w-full bg-transparent">
          <div className="max-w-[1100px] mx-auto flex items-center justify-between py-6 px-8">
            <div className="font-bold text-3xl md:text-4xl flex items-center gap-2 select-none">
              <span className="text-pink font-serif drop-shadow-lg">
                💃
                <span className="ml-2 text-pink">Mimi Dance</span>
              </span>
            </div>
            <button className="flex md:hidden w-14 h-14 rounded-2xl bg-white/80 items-center justify-center cursor-pointer border-2 border-black">
              <span className="block w-8 h-1 bg-blue-300 rounded-full"></span>
              <span className="block w-8 h-1 bg-blue-300 rounded-full mt-1"></span>
              <span className="block w-8 h-1 bg-blue-300 rounded-full mt-1"></span>
            </button>
          </div>
        </header>
        <section className="relative z-10 flex flex-col items-center justify-center text-center w-full flex-1 min-h-[calc(100vh-80px)] text-white">
          <div className="w-full flex flex-col items-center justify-center px-4">
            <h1 className="text-[2.5rem] md:text-[4.5rem] font-extrabold mb-4 drop-shadow-lg text-white font-serif leading-tight">
              Bine ai venit la{" "}
              <span className="text-pink">Mimi Dance Academy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 drop-shadow text-white/90 max-w-2xl mx-auto font-serif">
              Locul unde dansul prinde viață în nuanțe de baby blue și roz pal.
            </p>
            <div className="flex gap-8 flex-wrap justify-center">
              <a
                href="#classes"
                className="bg-pink text-purple-800 text-xl px-10 py-4 rounded-2xl font-bold shadow-custom transition hover:-translate-y-0.5 border-2 border-pink hover:bg-pink/90 focus:outline-none focus:ring-2 focus:ring-pink font-serif"
              >
                Vezi Clasele
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-white text-white text-xl px-10 py-4 rounded-2xl font-bold transition hover:bg-white hover:text-pink focus:outline-none focus:ring-2 focus:ring-white font-serif"
              >
                Contactează-ne
              </a>
            </div>
          </div>
        </section>
      </div>

      <section id="about">
        <div className="container">
          <h2 className="section-title">Despre noi</h2>
          <p className="section-lead">
            La Mimi Dance Academy inspirăm copiii și adulții să își descopere
            pasiunea pentru dans într-un mediu prietenos și colorat.
          </p>
          <div className="features">
            <div className="card">
              <h3>Povestea Mimi Dance</h3>
              <p>
                Sunt Simona, fondatorul Mimi Dance Academy, iar de la vârsta de 4
                ani dansul si gimnastica au fost parte din viata mea si am crescut
                odată cu ele, transformându-se intr-o adevarata pasiune.
              </p>
              <p>
                Am făcut parte din lotul național de gimnastică aerobică pana la
                vârsta de 16 ani, iar mai târziu mi-am continuat drumul in lumea
                spectacolelor alături de trupa de acrobați ‘Xtreme’, cu experiențe
                extraordinare pe scenele din Europa si Emiratele Arabe Unite.
              </p>
              <p>
                Datorită pasiunii pentru gimnastica si dans, am decis sa înființez
                in anul 2022 conceptul Mimi Dance. De 3 ani le transmit celor mici
                dragostea pentru mișcare, dans si armonie, intr-un mod jucăuș,
                prietenos si plin de entuziasm.
              </p>
            </div>
            <div className="card">
              <h3>Viziunea noastra</h3>
              <p>
                Credem că dansul si gimnastica sunt mai mult decât mișcare, sunt un
                limbaj al bucuriei, al disciplinei si al creativității. Prin dans si
                gimnastica cu panglici, ii învățăm pe copii să-și exprime
                emoțiile, să-și descopere corpul și să capete încredere in ei.
              </p>
              <p>
                Fiecare lectie este o combinatie intre joc, arta si educație, unde
                cei mici învăța să-și coordoneze mișcările, să-și dezvolte postura,
                flexibilitatea si gratia. In acelasi timp, invatam sa lucram
                impreuna, sa ne bucuram de reusitele fiecaruia si sa transformam
                sportul intr-o experienta plina de entuziasm.
              </p>
              <p>
                Ce ne face diferiti este modul in care imbinam sportul cu
                frumusetea dansului si cu jocul copilariei. La noi fiecare copil se
                simte vazut, apreciat si incurajat sa straluceasca in felul lui
                unic.
              </p>
            </div>
            <div className="card">
              <h3>Experienta noastra</h3>
              <p>
                Experiența noastra: In momentul de fata activam in peste 14
                gradinite/afteschool-uri private, cat si de stat, acestea avand
                diferite sisteme aducationale precum Waldorf, Montessori sau cele
                clasice. De la educatia bazata pe explorare si creativitate, pana
                la invatarea structurata si orientata pe performanta, diversitatea
                sistemelor educationale reflecta nevoia de a oferii copiilor
                oportunități variate pentru a invata si a se dezvolta intr-un mod
                care le satisface cel mai bine nevoile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="classes">
        <div className="container">
          <h2 className="section-title">Cursuri</h2>
          <p className="section-lead">
            De la balet clasic la dans modern – avem clase pentru fiecare stil
            și nivel.
          </p>
          <div className="menu-grid">
            <div className="product">
              <div className="pic">
                <img
                  src="/image/happy-dance.png.webp"
                  alt="Balet"
                />
              </div>
              <h3>Happy dance</h3>
            </div>
            <div className="product">
              <div className="pic">
                <img
                  src="/image/magic-ribbons.png"
                  alt="Hip Hop"
                />
              </div>
              <h3>Magic Ribbons</h3>
            </div>
            <div className="product">
              <div className="pic">
                <img
                  src="/image/dansul-mirilor.png"
                  alt="Dans Modern"
                />
              </div>
              <h3>Dansul Mirilor</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery">
        <div className="container">
          <h2 className="section-title">Galerie</h2>
          <p className="section-lead">
            Imagini din spectacole și antrenamentele noastre.
          </p>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <p className="section-lead">
            Înscrie-te sau cere mai multe detalii completând formularul de mai
            jos.
          </p>
          <div className="cta">
            <form className="panel">
              <input
                type="text"
                name="nume"
                placeholder="Nume"
                required
              />
              <input
                type="text"
                name="prenume"
                placeholder="Prenume"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                type="tel"
                name="telefon"
                placeholder="Telefon"
                required
              />
              <textarea
                name="mesaj"
                maxLength={500}
                placeholder="Mesajul tău (maxim 500 caractere)"
                required
              ></textarea>
              <label className="check">
                <input type="checkbox" required /> Sunt de acord cu politica de
                confidențialitate
              </label>
              <button type="submit" className="btn">
                Trimite
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <p>
          &copy;{" "}
          <span id="year">{new Date().getFullYear()}</span> Mimi Dance Academy.
          Creat cu{" "}
          <span className="accent">♥</span>.
        </p>
      </footer>
      {/* <script src="/script.js"></script>  // Mută funcționalitățile JS în React la nevoie */}
    </main>
  );
}
