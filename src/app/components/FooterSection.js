export default function FooterSection() {
  return (
    <footer>
      <p>
        &copy; <span id="year">{new Date().getFullYear()}</span> Mimi Dance Academy. Creat cu <span className="accent">♥</span>.
      </p>
    </footer>
  );
}
