import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
      <div className="py-10 md:py-24">
        <h1 className="text-4xl md:text-6xl font-semibold text-green-200 drop-shadow-[0_0_8px_rgba(34,197,94,0.35)]">
          Retro Matrix Developer
        </h1>
        <p className="mt-4 text-green-300/80 leading-relaxed font-mono">
          Building delightful UIs, performant systems, and playful interactions. I love weaving code, design, and 3D into immersive web experiences.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#projects" className="btn-neon">View Projects</a>
          <a href="#contact" className="btn-ghost">Contact Me</a>
        </div>
        <div className="mt-6 text-xs font-mono text-green-400/70 animate-pulse">
          $ npm i creativity threejs react-performance
        </div>
      </div>
      <div className="h-[360px] md:h-[520px] rounded-xl overflow-hidden border border-green-500/30 bg-gradient-to-b from-green-500/5 to-transparent relative">
        <Spline scene="https://prod.spline.design/NkcnsJpx2b5y-eA7/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    </div>
  );
}
