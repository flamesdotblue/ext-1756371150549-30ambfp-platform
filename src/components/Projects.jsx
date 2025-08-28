const projects = [
  {
    title: 'Neon Terminal UI',
    desc: 'A retro terminal-inspired component library with accessibility at its core.',
    tech: ['React', 'Tailwind', 'Radix'],
    link: '#',
  },
  {
    title: 'Realtime Pixel Art',
    desc: 'Collaborative canvas with CRDTs and buttery WebSocket sync.',
    tech: ['Vite', 'Zustand', 'WS'],
    link: '#',
  },
  {
    title: '3D Product Configurator',
    desc: 'Customize and preview products in 3D with fast load and mobile-first UX.',
    tech: ['React', 'three.js', 'Spline'],
    link: '#',
  },
];

function Card({ p, i }) {
  return (
    <a
      href={p.link}
      className="group relative block rounded-xl border border-green-500/30 p-6 overflow-hidden bg-black/40 hover:bg-black/20 transition-colors"
    >
      <div className="absolute inset-0 pointer-events-none glitch-mask opacity-0 group-hover:opacity-100" />
      <h3 className="text-lg font-semibold text-green-200">{String(i).padStart(2, '0')} — {p.title}</h3>
      <p className="mt-2 text-sm text-green-300/80">{p.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span key={t} className="text-[10px] px-2 py-1 rounded bg-green-500/10 border border-green-500/30 text-green-300/90">
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <div>
      <h2 className="section-title">Featured Projects</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <Card key={p.title} p={p} i={idx + 1} />
        ))}
      </div>
    </div>
  );
}
