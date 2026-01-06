import { featuredProducts } from '../../data/products';
import { ProductCard } from './ProductCard';

export const FeaturedCarousel = () => {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-parchment to-transparent sm:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-parchment to-transparent sm:block" />
      <div className="edge-fade no-scrollbar flex gap-6 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory">
        {featuredProducts.map((product) => (
          <div key={product.id} className="min-w-[260px] max-w-[260px] snap-start">
            <ProductCard product={product} compact />
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between text-xs text-charcoal/60">
        <p>Swipe or scroll to explore our featured rituals.</p>
        <div className="hidden items-center gap-1 sm:flex">
          <span className="h-1.5 w-16 rounded-full bg-gradient-to-r from-herb/40 via-gold/50 to-herb/30" />
          <span>Flowing now</span>
        </div>
      </div>
    </div>
  );
};
