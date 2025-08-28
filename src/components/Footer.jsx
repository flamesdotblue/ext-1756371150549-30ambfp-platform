export default function Footer() {
  return (
    <footer className="border-t border-green-500/20 py-8 text-center text-xs text-green-400/70 font-mono">
      <p>© {new Date().getFullYear()} Your Name — Built with React + Vite + Tailwind</p>
    </footer>
  );
}
