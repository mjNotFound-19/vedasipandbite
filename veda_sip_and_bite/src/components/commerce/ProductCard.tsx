import { Link } from 'react-router-dom';
import { Product } from '../../data/types';
import { useCartStore } from '../../store/cart';
import { useOverlay } from '../../context/OverlayContext';
import { useToast } from '../ui/Toast';
import { formatPrice } from '../../utils/formatPrice';
import { buildSrcSet } from '../../utils/image';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  compact?: boolean;
}

export const ProductCard = ({ product, onQuickView, compact }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const { openCart } = useOverlay();
  const { notify } = useToast();

  const handleAdd = () => {
    addItem(product.id, 1);
    notify('Added to cart', `${product.name} is now in your cart.`);
    openCart();
  };

  const image = product.images[0];

  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-2xl border border-herb/10 bg-parchment shadow-soft transition duration-250 ease-luxe hover:-translate-y-1 hover:shadow-lift',
        compact ? 'p-4' : 'p-6'
      )}
    >
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden rounded-xl">
        <img
          src={image?.src}
          srcSet={image?.src ? buildSrcSet(image.src) : undefined}
          sizes="(min-width: 1280px) 280px, (min-width: 768px) 40vw, 90vw"
          alt={image?.alt}
          width={image?.width}
          height={image?.height}
          loading="lazy"
          className="aspect-[4/5] w-full rounded-xl object-cover transition duration-400 ease-luxe group-hover:scale-[1.02]"
        />
        {!product.isAvailable ? (
          <span className="absolute left-4 top-4">
            <Badge variant="accent">Coming Soon</Badge>
          </span>
        ) : null}
      </Link>
      <div className="mt-5 flex flex-1 flex-col gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-sage-dark">{product.category}</p>
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="mt-2 text-2xl font-semibold text-charcoal">{product.name}</h3>
          </Link>
          <p className="mt-2 text-sm text-charcoal/70">{product.tagline}</p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-herb">{formatPrice(product.price)}</p>
            <p className="text-xs text-charcoal/60">{product.unitLabel}</p>
          </div>
          {product.caffeineFree ? <Badge variant="muted">Caffeine Free</Badge> : null}
        </div>
        <div className="mt-auto flex flex-wrap gap-3">
          {onQuickView ? (
            <Button variant="secondary" size="sm" onClick={() => onQuickView(product)}>
              Quick View
            </Button>
          ) : null}
          <Button
            size="sm"
            onClick={handleAdd}
            disabled={!product.isAvailable}
            className={cn(!product.isAvailable && 'cursor-not-allowed opacity-60')}
          >
            {product.isAvailable ? 'Add to Cart' : 'Notify Me'}
          </Button>
        </div>
      </div>
    </article>
  );
};

