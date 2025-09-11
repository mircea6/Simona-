export default function ContactSection() {
  return (
    <section id="contact">
      <div className="container max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pink-900 font-serif">Formular contact</h2>
        <form className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label htmlFor="nume" className="mb-1 text-base font-semibold text-gray-800">Nume</label>
              <input type="text" name="nume" id="nume" required className="px-4 py-2 border-2 border-pink-800 rounded-xl text-lg focus:outline-none focus:border-pink-400 transition" />
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="prenume" className="mb-1 text-base font-semibold text-gray-800">Prenume</label>
              <input type="text" name="prenume" id="prenume" required className="px-4 py-2 border-2 border-pink-800 rounded-xl text-lg focus:outline-none focus:border-pink-400 transition" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label htmlFor="email" className="mb-1 text-base font-semibold text-gray-800">Email</label>
              <input type="email" name="email" id="email" required className="px-4 py-2 border-2 border-pink-800 rounded-xl text-lg focus:outline-none focus:border-pink-400 transition" />
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="telefon" className="mb-1 text-base font-semibold text-gray-800">Telefon</label>
              <input type="tel" name="telefon" id="telefon" required className="px-4 py-2 border-2 border-pink-800 rounded-xl text-lg focus:outline-none focus:border-pink-400 transition" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-base font-semibold text-gray-800">Alegeți locația preferată:</span>
            <div className="flex gap-6 items-center">
              <label className="flex items-center gap-2 text-base text-gray-700">
                <input type="checkbox" name="locatie" value="victoriei" className="accent-pink-600 w-5 h-5" />
                Sala Victoriei
              </label>
              <label className="flex items-center gap-2 text-base text-gray-700">
                <input type="checkbox" name="locatie" value="universitate" className="accent-pink-600 w-5 h-5" />
                Sala Universitate
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="mesaj" className="mb-1 text-base font-semibold text-gray-800">Mesaj</label>
            <textarea name="mesaj" id="mesaj" maxLength={500} required className="px-4 py-2 border-2 border-pink-800 rounded-xl text-lg min-h-[100px] focus:outline-none focus:border-pink-400 transition resize-none"></textarea>
          </div>
          <label className="flex items-center gap-2 text-base text-gray-700">
            <input type="checkbox" required className="accent-pink-600 w-5 h-5" />
            Sunt de acord cu politica deconfidențialitate.
          </label>
          {/* Aici poți integra reCAPTCHA dacă vrei, sau alt element */}
          <button type="submit" className="w-full border-2 border-pink-800 text-pink-900 text-lg font-semibold py-3 rounded-xl hover:bg-pink-800 hover:text-white transition mt-2">Trimite</button>
        </form>
      </div>
    </section>
  );
}
