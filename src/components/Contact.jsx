export default function Contact() {
  return (
    <div>
      <h2 className="section-title">Contact</h2>
      <form className="mt-6 grid gap-4 max-w-xl">
        <label className="grid gap-2">
          <span className="text-xs font-mono text-green-400">Your Name</span>
          <input className="input" placeholder="Neo" />
        </label>
        <label className="grid gap-2">
          <span className="text-xs font-mono text-green-400">Email</span>
          <input type="email" className="input" placeholder="neo@matrix.dev" />
        </label>
        <label className="grid gap-2">
          <span className="text-xs font-mono text-green-400">Message</span>
          <textarea rows={5} className="input resize-y" placeholder="Leave a note in the console..." />
        </label>
        <button type="button" className="btn-neon w-fit">Send Ping</button>
        <p className="text-xs text-green-400/70 font-mono">Form is a demo. Wire it to your API or email service.</p>
      </form>
    </div>
  );
}
