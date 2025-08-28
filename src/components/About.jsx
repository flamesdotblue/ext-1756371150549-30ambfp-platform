export default function About() {
  return (
    <div>
      <h2 className="section-title">About</h2>
      <p className="mt-4 max-w-3xl text-green-300/80 leading-relaxed">
        I’m a full‑stack developer focused on crafting fluid, responsive interfaces and reliable backends. My toolkit spans
        TypeScript, React, Node, and cloud—sprinkled with experimentation in 3D and real‑time systems. Outside of work, I enjoy
        retro games, synthwave, and building tiny tools that spark joy.
      </p>
      <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm font-mono">
        {['TypeScript', 'React', 'Node', 'Postgres', 'Tailwind', 'Three.js'].map((s) => (
          <li key={s} className="px-3 py-2 rounded border border-green-500/20 bg-green-500/5 text-green-300/90">{s}</li>
        ))}
      </ul>
    </div>
  );
}
