import { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount = 0 }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = ['Lançamentos', 'Camisetas', 'Moletons', 'Acessórios'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Nav Links - Left (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Logo - Center */}
          <div className="flex-1 flex justify-center md:flex-none md:absolute md:left-1/2 md:-translate-x-1/2">
            <a href="#" className="text-2xl font-black uppercase tracking-[0.2em] text-white">
              STRTWEAR
            </a>
          </div>

          {/* Icons - Right */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex text-zinc-400 hover:text-white transition-colors duration-200">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="hidden md:flex text-zinc-400 hover:text-white transition-colors duration-200">
              <User size={20} strokeWidth={1.5} />
            </button>
            <button className="relative text-zinc-400 hover:text-white transition-colors duration-200">
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-zinc-400 hover:text-white transition-colors duration-200"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-200 py-2 border-b border-zinc-800 last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="flex items-center gap-6 pt-2">
              <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200">
                <Search size={18} strokeWidth={1.5} />
                <span className="uppercase tracking-widest font-semibold">Busca</span>
              </button>
              <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200">
                <User size={18} strokeWidth={1.5} />
                <span className="uppercase tracking-widest font-semibold">Conta</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
