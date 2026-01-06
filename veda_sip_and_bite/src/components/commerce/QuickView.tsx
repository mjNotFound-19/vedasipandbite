import { Product } from '../../data/types';
import { useCartStore } from '../../store/cart';
import { formatPrice } from '../../utils/formatPrice';
import { buildSrcSet } from '../../utils/image';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { useToast } from '../ui/Toast';

interface QuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickView = ({ product, isOpen, onClose }: QuickViewProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const { notify } = useToast();

  if (!product) {
    return null;
  }

  const handleAdd = () => {
    addItem(product.id, 1);
    notify('Added to cart', `${product.name} is ready in your cart.`);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={product.name}
      description={product.tagline}
      size="lg"
    >
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={product.images[0]?.src}
              srcSet={product.images[0]?.src ? buildSrcSet(product.images[0].src) : undefined}
              sizes="(min-width: 1024px) 42vw, 85vw"
              alt={product.images[0]?.alt}
              width={product.images[0]?.width}
              height={product.images[0]?.height}
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="muted">{product.category}</Badge>
            {product.caffeineFree ? <Badge variant="default">Caffeine Free</Badge> : null}
            {!product.isAvailable ? <Badge variant="accent">Coming Soon</Badge> : null}
          </div>
          <p className="text-lg font-semibold text-herb">{formatPrice(product.price)}</p>
          <p className="text-sm text-charcoal/70">{product.unitLabel}</p>
          <div>
            <h4 className="text-sm font-semibold text-herb">Key benefits</h4>
            <ul className="mt-2 list-disc space-y-2 pl-4 text-sm text-charcoal/70">
              {product.benefits.slice(0, 4).map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
          <Button onClick={handleAdd} disabled={!product.isAvailable}>
            {product.isAvailable ? 'Add to Cart' : 'Notify Me'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

