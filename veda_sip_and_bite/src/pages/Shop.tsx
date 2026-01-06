import { useEffect, useMemo, useState } from 'react';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Filters } from '../components/commerce/Filters';
import { ProductGrid } from '../components/commerce/ProductGrid';
import { QuickView } from '../components/commerce/QuickView';
import { benefitTags, categories, products } from '../data/products';
import { Product } from '../data/types';

export const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBenefit, setSelectedBenefit] = useState('');
  const [caffeineFreeOnly, setCaffeineFreeOnly] = useState(false);
  const [sort, setSort] = useState('featured');
  const [isLoading, setIsLoading] = useState(true);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((product) => product.category === selectedCategory);
    }

    if (selectedBenefit) {
      result = result.filter((product) => product.benefits.includes(selectedBenefit));
    }

    if (caffeineFreeOnly) {
      result = result.filter((product) => product.caffeineFree);
    }

    if (sort === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedBenefit, selectedCategory, caffeineFreeOnly, sort]);

  return (
    <div>
      <Section>
        <Container>
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-sage-dark">Shop</p>
            <h1 className="text-4xl font-semibold">The ritual collection</h1>
            <p className="text-sm text-charcoal/70">
              Discover curated wellness essentials crafted for calm mornings, mindful pauses, and restorative nights.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-cream-dark">
        <Container>
          <Filters
            categories={categories}
            benefits={benefitTags}
            selectedCategory={selectedCategory}
            selectedBenefit={selectedBenefit}
            caffeineFreeOnly={caffeineFreeOnly}
            sort={sort}
            onCategoryChange={setSelectedCategory}
            onBenefitChange={setSelectedBenefit}
            onCaffeineChange={setCaffeineFreeOnly}
            onSortChange={setSort}
            onClear={() => {
              setSelectedCategory('');
              setSelectedBenefit('');
              setCaffeineFreeOnly(false);
              setSort('featured');
            }}
          />
          <div className="mt-8">
            <ProductGrid
              products={filtered}
              isLoading={isLoading}
              onQuickView={(product) => setQuickViewProduct(product)}
            />
          </div>
        </Container>
      </Section>

      <QuickView
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};

