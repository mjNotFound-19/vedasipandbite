import { Link } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { products } from '../data/products';
import { Product } from '../data/types';
import { useCartStore } from '../store/cart';
import { formatPrice } from '../utils/formatPrice';
import { buildSrcSet } from '../utils/image';
import { buttonStyles } from '../components/ui/Button';

export const Cart = () => {
  const { items, removeItem, updateQuantity } = useCartStore();

  const lines = items
    .map((item) => ({
      product: products.find((product) => product.id === item.productId),
      quantity: item.quantity
    }))
    .filter((line): line is { product: Product; quantity: number } => Boolean(line.product));

  const subtotal = lines.reduce(
    (total, line) => total + line.product.price * line.quantity,
    0
  );

  return (
    <Section>
      <Container>
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-sage-dark">Cart</p>
            <h1 className="text-4xl font-semibold">Your cart</h1>
          </div>
          {lines.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-herb/30 bg-cream p-8 text-center">
              <p className="text-sm text-charcoal/70">Your cart is empty.</p>
              <Link to="/shop" className={buttonStyles('primary', 'md') + ' mt-4'}>
                Start shopping
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4">
                {lines.map((line) => (
                  <div
                    key={line.product.id}
                    className="flex flex-col gap-4 rounded-2xl border border-herb/10 bg-parchment p-5 md:flex-row"
                  >
                    <img
                      src={line.product.images[0]?.src}
                      srcSet={
                        line.product.images[0]?.src
                          ? buildSrcSet(line.product.images[0].src, [200, 400])
                          : undefined
                      }
                      sizes="96px"
                      alt={line.product.images[0]?.alt}
                      width={line.product.images[0]?.width}
                      height={line.product.images[0]?.height}
                      className="h-28 w-24 rounded-xl object-cover"
                      loading="lazy"
                    />
                    <div className="flex flex-1 flex-col gap-3">
                      <div>
                        <p className="text-sm font-semibold text-charcoal">{line.product.name}</p>
                        <p className="text-xs text-charcoal/60">{line.product.unitLabel}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => updateQuantity(line.product.id, line.quantity - 1)}
                          className="h-8 w-8 rounded-full border border-herb/20 text-sm"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="text-sm font-semibold text-herb">{line.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(line.product.id, line.quantity + 1)}
                          className="h-8 w-8 rounded-full border border-herb/20 text-sm"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          onClick={() => removeItem(line.product.id)}
                          className="ml-auto text-xs font-semibold uppercase tracking-wide text-herb"
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
              </div>
              <div className="rounded-2xl border border-herb/10 bg-cream p-6">
                <h2 className="text-lg font-semibold text-charcoal">Order summary</h2>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-charcoal/70">Subtotal</span>
                  <span className="font-semibold text-herb">{formatPrice(subtotal)}</span>
                </div>
                <p className="mt-3 text-xs text-charcoal/60">
                  Final totals are calculated at hosted checkout.
                </p>
                <Link to="/checkout" className={buttonStyles('primary', 'md') + ' mt-6 w-full'}>
                  Proceed to checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};
