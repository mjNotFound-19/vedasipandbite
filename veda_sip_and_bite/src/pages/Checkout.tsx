import { useMemo, useState } from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Input } from '../components/ui/Input';
import { buttonStyles } from '../components/ui/Button';
import { products } from '../data/products';
import { useCartStore } from '../store/cart';
import { formatPrice } from '../utils/formatPrice';
import { safeExternalLink } from '../utils/safeExternalLink';
import { cn } from '../utils/cn';
import { Link } from 'react-router-dom';

const checkoutFallbackUrl = 'https://checkout.example.com/veda-sip-bite';

const shippingOptions = [
  { id: 'standard', label: 'Standard', detail: '3-5 working days', price: 0 },
  { id: 'express', label: 'Express', detail: '1-2 working days', price: 120 }
];

const paymentMethods = [
  {
    id: 'card',
    label: 'Cards',
    detail: 'Credit & debit cards (Visa, Mastercard, RuPay)',
    fee: 0
  },
  {
    id: 'netbanking',
    label: 'Online Banking',
    detail: 'UPI & netbanking across major banks',
    fee: 0
  },
  {
    id: 'cod',
    label: 'Cash on Delivery',
    detail: 'Pay at your door. COD handling fee applies.',
    fee: 50
  }
];

export const Checkout = () => {
  const items = useCartStore((state) => state.items);
  const [shippingId, setShippingId] = useState<string>('standard');
  const [paymentId, setPaymentId] = useState<string>('card');

  const subtotal = useMemo(() => {
    return items.reduce((total, item) => {
      const product = products.find((entry) => entry.id === item.productId);
      return total + (product?.price ?? 0) * item.quantity;
    }, 0);
  }, [items]);

  const shippingCost = shippingOptions.find((option) => option.id === shippingId)?.price ?? 0;
  const paymentFee = paymentMethods.find((method) => method.id === paymentId)?.fee ?? 0;
  const total = subtotal + shippingCost + paymentFee;

  const checkoutUrl = useMemo(() => {
    const firstAvailable = items.find((item) => {
      const product = products.find((entry) => entry.id === item.productId);
      return product?.isAvailable;
    });
    if (!firstAvailable) {
      return checkoutFallbackUrl;
    }
    const product = products.find((entry) => entry.id === firstAvailable.productId);
    return product?.checkoutUrl ?? checkoutFallbackUrl;
  }, [items]);

  if (items.length === 0) {
    return (
      <Section>
        <Container>
          <div className="max-w-2xl space-y-4 rounded-2xl border border-herb/10 bg-parchment p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wide text-sage-dark">Checkout</p>
            <h1 className="text-3xl font-semibold">Your cart is empty</h1>
            <p className="text-sm text-charcoal/70">
              Add a ritual to your cart to begin checkout. Cash on Delivery is supported for select pincodes.
            </p>
            <Link to="/shop" className={buttonStyles('primary', 'md')}>
              Explore the shop
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <div className="mb-8 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-sage-dark">Checkout</p>
          <h1 className="text-4xl font-semibold">Complete your ritual</h1>
          <p className="text-sm text-charcoal/70">
            Secure checkout with cards, online banking, or cash on delivery. No payment is processed on this site; you
            will be redirected to our provider to finish payment.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-herb/10 bg-parchment p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-herb">Contact</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <Input label="Full name" placeholder="Aditi Rao" autoComplete="name" />
                <Input label="Email" type="email" placeholder="you@example.com" autoComplete="email" />
              </div>
              <div className="mt-4">
                <Input label="Phone" type="tel" placeholder="+91" autoComplete="tel" />
              </div>
            </div>

            <div className="rounded-2xl border border-herb/10 bg-parchment p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-herb">Shipping address</h2>
              <div className="mt-4 grid gap-4">
                <Input label="Address line" placeholder="House / Street / Locality" autoComplete="address-line1" />
                <div className="grid gap-4 md:grid-cols-3">
                  <Input label="City" placeholder="Pune" autoComplete="address-level2" />
                  <Input label="State" placeholder="Maharashtra" autoComplete="address-level1" />
                  <Input label="Pincode" placeholder="411001" autoComplete="postal-code" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-herb/10 bg-parchment p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-herb">Shipping</h2>
                <p className="text-xs uppercase tracking-wide text-sage-dark">Secure delivery</p>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {shippingOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setShippingId(option.id)}
                    className={cn(
                      'flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition duration-200 ease-luxe',
                      shippingId === option.id
                        ? 'border-herb/40 bg-cream shadow-soft'
                        : 'border-herb/15 bg-cream-dark hover:border-herb/30'
                    )}
                  >
                    <div>
                      <p className="text-sm font-semibold text-charcoal">{option.label}</p>
                      <p className="text-xs text-charcoal/70">{option.detail}</p>
                    </div>
                    <p className="text-sm font-semibold text-herb">
                      {option.price === 0 ? 'Free' : formatPrice(option.price)}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-herb/10 bg-parchment p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-herb">Payment method</h2>
                <p className="text-xs uppercase tracking-wide text-sage-dark">No charges here</p>
              </div>
              <div className="mt-4 grid gap-3">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={cn(
                      'flex items-start justify-between gap-4 rounded-xl border px-4 py-3 transition duration-200 ease-luxe',
                      paymentId === method.id
                        ? 'border-herb/40 bg-cream shadow-soft'
                        : 'border-herb/15 bg-cream-dark hover:border-herb/30'
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="payment-method"
                        className="mt-1 h-4 w-4 text-herb focus-visible:ring-gold"
                        checked={paymentId === method.id}
                        onChange={() => setPaymentId(method.id)}
                      />
                      <div>
                        <p className="text-sm font-semibold text-charcoal">{method.label}</p>
                        <p className="text-xs text-charcoal/70">{method.detail}</p>
                        {method.fee > 0 ? (
                          <p className="text-xs font-semibold text-gold">+ {formatPrice(method.fee)} COD fee</p>
                        ) : null}
                      </div>
                    </div>
                    <span className="rounded-pill bg-parchment px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-herb">
                      Secure
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-herb/10 bg-parchment p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-herb">Order summary</h2>
                <p className="text-xs uppercase tracking-wide text-sage-dark">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </p>
              </div>
              <div className="mt-4 space-y-3">
                {items.map((item) => {
                  const product = products.find((entry) => entry.id === item.productId);
                  if (!product) return null;
                  return (
                    <div key={item.productId} className="flex items-start justify-between gap-3 rounded-xl bg-cream-dark p-3">
                      <div>
                        <p className="text-sm font-semibold text-charcoal">{product.name}</p>
                        <p className="text-xs text-charcoal/60">
                          Qty {item.quantity} · {product.unitLabel}
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-herb">
                        {formatPrice(product.price * item.quantity)}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between text-charcoal/70">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-charcoal/70">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}</span>
                </div>
                <div className="flex justify-between text-charcoal/70">
                  <span>Payment</span>
                  <span>{paymentFee === 0 ? 'No fee' : formatPrice(paymentFee)}</span>
                </div>
                <div className="flex items-center justify-between border-t border-herb/10 pt-3 text-base font-semibold text-charcoal">
                  <span>Total</span>
                  <span className="text-herb">{formatPrice(total)}</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-charcoal/60">
                This is a UI-only preview. Payment and delivery are completed on our secure checkout partner.
              </p>
              <a
                href={checkoutUrl}
                {...safeExternalLink(checkoutUrl)}
                className={cn(buttonStyles('primary', 'md'), 'mt-4 inline-flex w-full justify-center')}
              >
                Proceed to payment
              </a>
              <p className="mt-2 text-center text-[11px] uppercase tracking-wide text-herb">
                Cards · Online Banking · Cash on Delivery
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

