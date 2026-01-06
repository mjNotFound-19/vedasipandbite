import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCartStore } from '../store/cart';
import { formatPrice } from '../utils/formatPrice';
import { buildSrcSet } from '../utils/image';
import { Badge } from '../components/ui/Badge';
import { Button, buttonStyles } from '../components/ui/Button';
import { Accordion } from '../components/ui/Accordion';
import { Tabs } from '../components/ui/Tabs';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { TrustBadges } from '../components/commerce/TrustBadges';
import { useToast } from '../components/ui/Toast';

export const ProductDetail = () => {
  const { productId } = useParams();
  const product = useMemo(() => products.find((item) => item.id === productId), [productId]);
  const addItem = useCartStore((state) => state.addItem);
  const { notify } = useToast();

  if (!product) {
    return (
      <Section>
        <Container>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold">Product not found</h1>
            <Link to="/shop" className={buttonStyles('primary', 'md')}>
              Return to shop
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  const handleAdd = () => {
    addItem(product.id, 1);
    notify('Added to cart', `${product.name} is ready in your cart.`);
  };

  return (
    <div>
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                {product.images.map((image, index) => (
                  <div
                    key={image.src}
                    className="group overflow-hidden rounded-2xl border border-herb/10 bg-parchment"
                  >
                    <img
                      src={image.src}
                      srcSet={buildSrcSet(image.src)}
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="aspect-[4/5] w-full object-cover transition duration-400 ease-luxe group-hover:scale-[1.03]"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="muted">{product.category}</Badge>
                  {product.caffeineFree ? <Badge variant="default">Caffeine Free</Badge> : null}
                  {!product.isAvailable ? <Badge variant="accent">Coming Soon</Badge> : null}
                </div>
                <h1 className="text-4xl font-semibold">{product.name}</h1>
                <p className="text-sm text-charcoal/70">{product.tagline}</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-semibold text-herb">{formatPrice(product.price)}</p>
                <p className="text-xs text-charcoal/60">{product.unitLabel}</p>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-herb">Key benefits</h2>
                <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-charcoal/70">
                  {product.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button onClick={handleAdd} disabled={!product.isAvailable}>
                  {product.isAvailable ? 'Add to Cart' : 'Notify Me'}
                </Button>
                <Link to="/checkout" className={buttonStyles('secondary', 'md')}>
                  Checkout details
                </Link>
              </div>
              <Accordion
                items={[
                  {
                    title: 'Ingredients',
                    content: (
                      <ul className="list-disc space-y-2 pl-4">
                        {product.ingredients.map((ingredient) => (
                          <li key={ingredient}>{ingredient}</li>
                        ))}
                      </ul>
                    )
                  },
                  {
                    title: 'Brewing instructions',
                    content: (
                      <ul className="list-disc space-y-2 pl-4">
                        {product.brewingInstructions.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ul>
                    )
                  }
                ]}
              />
              <Tabs
                tabs={[
                  {
                    label: 'Sourcing',
                    content: product.sourcingNote
                  },
                  {
                    label: 'Ritual',
                    content: 'Pair this ritual with slow breathing and a quiet morning moment.'
                  },
                  {
                    label: 'Care',
                    content: 'Store in a cool, dry place away from sunlight.'
                  }
                ]}
              />
              <TrustBadges />
            </div>
          </div>
        </Container>
      </Section>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-cream-dark bg-cream p-4 md:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-2">
          <div>
            <p className="text-xs text-charcoal/60">{product.name}</p>
            <p className="text-sm font-semibold text-herb">{formatPrice(product.price)}</p>
          </div>
          <Button onClick={handleAdd} disabled={!product.isAvailable}>
            {product.isAvailable ? 'Add to Cart' : 'Notify Me'}
          </Button>
        </div>
      </div>
    </div>
  );
};

