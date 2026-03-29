import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1920&q=80&auto=format&fit=crop)',
        }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Eyebrow label */}
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-zinc-400 mb-6">
          Coleção Exclusiva · 2025
        </p>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tighter text-white mb-6">
          NOVA COLEÇÃO<br />
          <span className="text-zinc-300">OUTONO / INVERNO</span>
        </h1>

        {/* Subline */}
        <p className="text-base sm:text-lg text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
          Peças únicas para quem vive o estilo urbano. Design premium, atitude sem limites.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="group inline-flex items-center gap-3 bg-white text-black font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-zinc-200 transition-colors duration-200"
          >
            Comprar Agora
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#products"
            className="group inline-flex items-center gap-3 border border-white/50 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            Ver Lançamentos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-zinc-500">Scroll</span>
        <div className="w-px h-8 bg-zinc-600" />
      </div>
    </section>
  );
}
