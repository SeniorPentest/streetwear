import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: 'Camiseta Oversized Drop Shoulder',
    price: 'R$ 189,90',
    originalPrice: null,
    tag: 'NOVO',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Moletom Cropped Tactical Hood',
    price: 'R$ 329,90',
    originalPrice: 'R$ 399,90',
    tag: 'SALE',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Calça Cargo Utility Black',
    price: 'R$ 289,90',
    originalPrice: null,
    tag: 'NOVO',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Jaqueta Bomber Street Patch',
    price: 'R$ 479,90',
    originalPrice: null,
    tag: null,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Boné Snapback Acid Wash',
    price: 'R$ 119,90',
    originalPrice: null,
    tag: 'EXCLUSIVO',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Camiseta Longsleeve Grunge Logo',
    price: 'R$ 159,90',
    originalPrice: 'R$ 199,90',
    tag: 'SALE',
    image: 'https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?w=600&q=80&auto=format&fit=crop',
  },
];

const tagColors = {
  NOVO: 'bg-white text-black',
  SALE: 'bg-red-600 text-white',
  EXCLUSIVO: 'bg-zinc-800 text-white border border-zinc-600',
};

function ProductCard({ product }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article className="group flex flex-col bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-colors duration-300">
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Tag */}
        {product.tag && (
          <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2 py-1 ${tagColors[product.tag] ?? 'bg-white text-black'}`}>
            {product.tag}
          </span>
        )}
        {/* Hover overlay CTA */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <button
            onClick={handleAdd}
            className="inline-flex items-center gap-2 bg-white text-black font-bold uppercase tracking-widest text-xs px-6 py-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-zinc-200"
          >
            <ShoppingCart size={14} strokeWidth={2} />
            {added ? 'Adicionado!' : 'Adicionar ao Carrinho'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex-1 flex flex-col gap-1">
        <h3 className="text-sm font-semibold text-white leading-snug">{product.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-base font-bold text-white">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-zinc-500 line-through">{product.originalPrice}</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <section id="products" className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-2">
              Produtos
            </p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              Destaques da<br />Temporada
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-200 border-b border-zinc-700 hover:border-white pb-1 self-start sm:self-auto"
          >
            Ver todos →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
