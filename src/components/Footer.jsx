import { useState } from 'react';
import { Send, ArrowRight } from 'lucide-react';

const footerLinks = {
  Empresa: ['Sobre Nós', 'Careers', 'Press', 'Lojas Físicas'],
  Ajuda: ['FAQ', 'Trocas & Devoluções', 'Rastreio de Pedido', 'Contato'],
  Legal: ['Termos de Uso', 'Privacidade', 'Cookies', 'Acessibilidade'],
};

// Simple inline SVG icons for social platforms (no brand dependency)
function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function YoutubeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  );
}

function XIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

const socialLinks = [
  { label: 'Instagram', Icon: InstagramIcon, href: '#' },
  { label: 'YouTube', Icon: YoutubeIcon, href: '#' },
  { label: 'Twitter / X', Icon: XIcon, href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Top row: Newsletter + Social */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-16 pb-16 border-b border-zinc-900">

          {/* Newsletter */}
          <div className="max-w-md">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-2">
              Newsletter
            </p>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">
              Fique por dentro<br />dos lançamentos
            </h3>
            <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
              Seja o primeiro a saber sobre novas coleções, drops exclusivos e promoções especiais.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-3 text-white border border-zinc-700 px-4 py-3">
                <ArrowRight size={16} className="text-zinc-400" />
                <span className="text-sm font-semibold uppercase tracking-widest">
                  Inscrição confirmada!
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="flex-1 bg-zinc-900 border border-zinc-700 border-r-0 text-white text-sm px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-white transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="bg-white text-black font-bold uppercase tracking-widest text-xs px-5 py-3 hover:bg-zinc-200 transition-colors duration-200 flex items-center gap-2"
                >
                  <Send size={14} strokeWidth={2} />
                </button>
              </form>
            )}
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6">
              Redes Sociais
            </p>
            <div className="flex flex-col gap-4">
              {socialLinks.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group"
                >
                  <span className="w-10 h-10 border border-zinc-800 group-hover:border-white flex items-center justify-center transition-colors duration-200">
                    <span className="text-zinc-500 group-hover:text-white transition-colors duration-200">
                      <Icon size={18} />
                    </span>
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors duration-200">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Middle: Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-16 pb-16 border-b border-zinc-900">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-5">
                {category}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-2xl font-black uppercase tracking-[0.2em] text-zinc-800">
            STRTWEAR
          </span>
          <p className="text-xs text-zinc-600 uppercase tracking-widest">
            © 2025 STRTWEAR · Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
