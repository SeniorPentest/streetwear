import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />

        {/* Marquee announcement strip */}
        <div className="bg-zinc-950 border-y border-zinc-900 py-3 overflow-hidden">
          <div
            className="flex whitespace-nowrap gap-16"
            style={{ animation: 'marquee 25s linear infinite' }}
          >
            {Array(6).fill(null).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-16">
                {[
                  'Free Shipping acima de R$300',
                  'Nova Coleção Inverno 2025',
                  'Troca & Devolução em 30 dias',
                  'Drop Exclusivo Online',
                ].map((text) => (
                  <span
                    key={text}
                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-4"
                  >
                    <span className="text-zinc-700">✦</span>
                    {text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Products />
      </main>
      <Footer />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
