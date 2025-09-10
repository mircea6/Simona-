export default function ContactSection() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-lead">
          Înscrie-te sau cere mai multe detalii completând formularul de mai jos.
        </p>
        <div className="cta">
          <form className="panel">
            <input type="text" name="nume" placeholder="Nume" required />
            <input type="text" name="prenume" placeholder="Prenume" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="telefon" placeholder="Telefon" required />
            <textarea name="mesaj" maxLength={500} placeholder="Mesajul tău (maxim 500 caractere)" required></textarea>
            <label className="check">
              <input type="checkbox" required /> Sunt de acord cu politica de confidențialitate
            </label>
            <button type="submit" className="btn">Trimite</button>
          </form>
        </div>
      </div>
    </section>
  );
}
