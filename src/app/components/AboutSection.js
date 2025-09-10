export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto flex flex-col items-center px-4">
        <h2 className="text-7xl font-black text-pink-400 mb-10 text-center">Despre noi</h2>
        <div className="max-w-2xl w-full border-4 border-pink-200 rounded-3xl bg-white/80 p-10 mb-10 shadow-xl mx-auto flex flex-col items-center">
          <p className="text-3xl text-gray-700 text-center font-bold leading-relaxed">La Mimi Dance Academy inspirăm copiii și adulții să își descopere pasiunea pentru dans într-un mediu prietenos și colorat. Descoperă povestea noastră, viziunea și experiența care ne definesc!</p>
        </div>
        <a href="/despre-noi" className="inline-block bg-pink-400 text-white text-2xl font-bold px-10 py-5 rounded-full shadow-lg hover:bg-pink-500 transition text-center">Află mai multe</a>
      </div>
    </section>
  );
}
