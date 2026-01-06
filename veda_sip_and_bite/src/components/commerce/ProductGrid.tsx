import { Product } from '../../data/types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
  onQuickView?: (product: Product) => void;
}

const SkeletonCard = () => (
  <div className="animate-pulse rounded-2xl border border-herb/10 bg-parchment p-6">
    <div className="aspect-[4/5] w-full rounded-xl bg-cream-dark" />
    <div className="mt-5 space-y-3">
      <div className="h-3 w-1/3 rounded bg-cream-dark" />
      <div className="h-6 w-3/4 rounded bg-cream-dark" />
      <div className="h-4 w-full rounded bg-cream-dark" />
    </div>
  </div>
);

export const ProductGrid = ({ products, isLoading, onQuickView }: ProductGridProps) => {
  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={`skeleton-${index}`} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
      ))}
    </div>
  );
};

