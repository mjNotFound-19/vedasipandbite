import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { Product } from '../../data/types';
import { useCartStore } from '../../store/cart';
import { formatPrice } from '../../utils/formatPrice';
import { buildSrcSet } from '../../utils/image';
import { buttonStyles } from '../ui/Button';
import { Drawer } from '../ui/Drawer';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const getProductById = (id: string) => products.find((product) => product.id === id);

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { items, removeItem, updateQuantity } = useCartStore();

  const lines = items
    .map((item) => ({
      product: getProductById(item.productId),
      quantity: item.quantity
    }))
    .filter((line): line is { product: Product; quantity: number } => Boolean(line.product));

  const subtotal = lines.reduce(
    (total, line) => total + line.product.price * line.quantity,
    0
  );

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Your Cart">
      {lines.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-herb/30 bg-cream p-6 text-center">
          <p className="text-sm text-charcoal/70">Your cart is currently empty.</p>
          <Link to="/shop" className="mt-4 inline-block text-sm font-semibold text-herb">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-5">
          {lines.map((line) => (
            <div
              key={line.product.id}
              className="flex gap-4 rounded-2xl border border-herb/10 bg-cream p-4"
            >
              <img
                src={line.product.images[0]?.src}
                srcSet={
                  line.product.images[0]?.src
                    ? buildSrcSet(line.product.images[0].src, [200, 400])
                    : undefined
                }
                sizes="80px"
                alt={line.product.images[0]?.alt}
                width={line.product.images[0]?.width}
                height={line.product.images[0]?.height}
                className="h-24 w-20 rounded-xl object-cover"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col gap-2">
                <div>
                  <p className="text-sm font-semibold text-charcoal">{line.product.name}</p>
                  <p className="text-xs text-charcoal/60">{line.product.unitLabel}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateQuantity(line.product.id, line.quantity - 1)}
                      className="h-7 w-7 rounded-full border border-herb/20 text-sm"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold text-herb">{line.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(line.product.id, line.quantity + 1)}
                      className="h-7 w-7 rounded-full border border-herb/20 text-sm"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(line.product.id)}
                    className="text-xs font-semibold uppercase tracking-wide text-herb"
                  >
                    Remove
                  </button>
                </div>
                <p className="text-sm font-semibold text-herb">
                  {formatPrice(line.product.price * line.quantity)}
                </p>
              </div>
            </div>
          ))}
          <div className="rounded-2xl border border-herb/10 bg-cream p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-charcoal/70">Subtotal</span>
              <span className="font-semibold text-herb">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-2 text-xs text-charcoal/60">
              Taxes and delivery calculated at hosted checkout.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <Link to="/cart" onClick={onClose} className={buttonStyles('secondary', 'md')}>
                View cart
              </Link>
              <Link to="/checkout" onClick={onClose} className={buttonStyles('primary', 'md')}>
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </Drawer>
  );
};
