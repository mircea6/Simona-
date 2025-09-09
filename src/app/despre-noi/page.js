import Link from "next/link";

export default function DespreNoi() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-pink-400 mb-12 text-center">Despre noi</h1>
      <section className="max-w-4xl w-full bg-pink-50 rounded-3xl shadow-lg p-10 mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Povestea Mimi Dance</h2>
        <p className="text-lg text-gray-700 mb-2">Sunt Simona, fondatorul Mimi Dance Academy, iar de la vârsta de 4 ani dansul și gimnastica au fost parte din viața mea și am crescut odată cu ele, transformându-se într-o adevărată pasiune...</p>
      </section>
      <section className="max-w-4xl w-full bg-pink-50 rounded-3xl shadow-lg p-10 mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Viziunea noastră</h2>
        <p className="text-lg text-gray-700 mb-2">La Mimi Dance Academy inspirăm copiii și adulții să își descopere pasiunea pentru dans într-un mediu prietenos și colorat...</p>
      </section>
      <section className="max-w-4xl w-full bg-pink-50 rounded-3xl shadow-lg p-10 mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Experiența noastră</h2>
        <p className="text-lg text-gray-700 mb-2">Avem peste 10 ani de experiență în predarea dansului și organizarea de spectacole pentru toate vârstele...</p>
      </section>
    </main>
  );
}
