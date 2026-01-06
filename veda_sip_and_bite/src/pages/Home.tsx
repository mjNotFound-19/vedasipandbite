import { Link } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Stack } from '../components/layout/Stack';
import { Reveal } from '../components/common/Reveal';
import { buttonStyles } from '../components/ui/Button';
import { FeaturedCarousel } from '../components/commerce/FeaturedCarousel';
import { Testimonials } from '../components/commerce/Testimonials';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { buildSrcSet } from '../utils/image';

const flowItems = [
  {
    title: 'Mindful Sourcing',
    text: 'Every ingredient is traceable, ethically sourced, and honored for its natural potency.',
    tag: 'Origin'
  },
  {
    title: 'Ritual-Ready',
    text: 'Designed for slow mornings, reflective evenings, and everyday pauses that restore clarity.',
    tag: 'Daily practice'
  },
  {
    title: 'Luxury Simplicity',
    text: 'Minimal processing and thoughtful packaging for an elevated wellness experience.',
    tag: 'Experience'
  }
];

export const Home = () => {
  return (
    <div>
      <Section className="relative overflow-hidden hero-gradient">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-sage-light/30 blur-3xl" />
          <div className="absolute bottom-[-140px] right-[-80px] h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
        </div>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <Stack gap="lg" className="relative max-w-xl">
                <Badge variant="muted">Seasonal ritual drop</Badge>
                <h1 className="text-4xl font-semibold leading-display md:text-5xl">
                  Sip. Bite. <span className="bg-gradient-to-r from-herb to-gold bg-clip-text text-transparent">Belong</span> to Nature.
                </h1>
                <p className="text-base text-charcoal/70 text-balance">
                  Experience pure wellness with every product. Our nature-inspired collection enhances your health
                  journey and promotes a balanced lifestyle.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/product/nettle-leaves" className={buttonStyles('primary', 'lg')}>
                    Shop Nettle Leaves
                  </Link>
                  <Link to="/shop" className={buttonStyles('secondary', 'lg')}>
                    Explore the Shop
                  </Link>
                </div>
                <div className="grid gap-3 rounded-2xl border border-herb/10 bg-parchment/90 p-4 shadow-soft sm:grid-cols-3">
                  {[
                    { label: 'Traceable origin', value: 'Himalayan foothills' },
                    { label: 'Caffeine profile', value: 'Mostly caffeine free' },
                    { label: 'Dispatch', value: 'Ships in 48 hours' }
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-cream-dark/70 p-3 shadow-inner">
                      <p className="text-[11px] uppercase tracking-wide text-sage-dark">{item.label}</p>
                      <p className="mt-1 text-sm font-semibold text-herb">{item.value}</p>
                    </div>
                  ))}
                </div>
              </Stack>
            </Reveal>
            <Reveal>
              <div className="relative">
                <div className="absolute -left-10 top-6 h-24 w-24 rounded-full bg-herb/10 blur-3xl" />
                <div className="grain-overlay relative overflow-hidden rounded-[28px] border border-herb/15 bg-parchment shadow-lift">
                  <img
                    src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
                    srcSet={buildSrcSet(
                      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80'
                    )}
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    alt="Herbal leaves and wellness ritual"
                    width={1200}
                    height={1500}
                    className="aspect-[4/5] w-full rounded-[28px] object-cover"
                  />
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-charcoal/15 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-charcoal/50 via-charcoal/10 to-transparent" />
                  <div className="absolute left-5 top-5 flex flex-wrap gap-3">
                    <Badge variant="accent">Bestseller</Badge>
                    <Badge variant="muted">Caffeine free</Badge>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-cream/30 bg-charcoal/30 p-4 text-cream backdrop-blur">
                    <div className="flex items-center justify-between text-sm font-semibold">
                      <span>Nettle Leaves</span>
                      <span className="text-gold">6-7 min brew</span>
                    </div>
                    <p className="mt-2 text-xs text-cream/85">
                      Earthy, crisp, and nutrient-rich. Slow-steep for a grounded start to your day.
                    </p>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-cream/30">
                      <span className="block h-full w-2/3 bg-gradient-to-r from-gold via-herb to-herb/70" />
                    </div>
                  </div>
                </div>
                <div className="absolute -right-6 bottom-6 w-56 rounded-2xl border border-herb/20 bg-cream/90 p-4 shadow-lift backdrop-blur">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-sage-dark">Ritual flow</p>
                  <p className="mt-2 text-sm text-charcoal">
                    Warm water, measured breath, and a slow sip for steady energy.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-charcoal/70">
                    <span className="inline-flex h-2 w-2 rounded-full bg-herb" />
                    <span>Morning &amp; post-meal friendly</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-2xl space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-sage-dark">Flow</p>
                <h2 className="text-3xl font-semibold">A calm path from soil to sip</h2>
                <p className="text-sm text-charcoal/70">
                  Three intentional beats guide every product - from how we harvest to how you experience it.
                </p>
              </div>
              <Link to="/about" className="text-xs font-semibold uppercase tracking-wide text-herb underline">
                Meet the founders
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative mt-8 grid gap-5 md:grid-cols-3">
              <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-herb/25 via-gold/25 to-herb/10 md:block" />
              {flowItems.map((item, index) => (
                <div
                  key={item.title}
                  className="relative rounded-2xl border border-herb/10 bg-parchment p-6 shadow-soft transition duration-300 ease-luxe hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-herb/10 text-sm font-semibold text-herb">
                      0{index + 1}
                    </span>
                    <span className="rounded-pill bg-cream-dark px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-herb">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-herb">{item.title}</h3>
                  <p className="mt-2 text-sm text-charcoal/70">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-cream-dark">
        <Container>
          <Stack gap="lg">
            <Reveal>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-sage-dark">Featured rituals</p>
                  <h2 className="mt-3 text-3xl font-semibold">Curated wellness essentials</h2>
                  <p className="mt-2 text-sm text-charcoal/70">
                    Slow-crafted blends, signature bites, and calm-inducing brews ready for your daily ritual.
                  </p>
                </div>
                <Link to="/shop" className="text-sm font-semibold text-herb underline">
                  View all
                </Link>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-herb/10 bg-parchment/90 p-4 shadow-soft">
                <FeaturedCarousel />
              </div>
            </Reveal>
          </Stack>
        </Container>
      </Section>

      <Section>
        <Container>
          <Stack gap="lg">
            <Reveal>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-sage-dark">Loved by ritual seekers</p>
                  <h2 className="mt-3 text-3xl font-semibold">Quiet praise. Tangible calm.</h2>
                </div>
                <div className="rounded-pill border border-herb/15 bg-cream-dark px-4 py-2 text-xs font-semibold uppercase tracking-wide text-herb">
                  4.8/5 calm rating
                </div>
              </div>
            </Reveal>
            <Reveal>
              <Testimonials />
            </Reveal>
          </Stack>
        </Container>
      </Section>

      <Section className="bg-cream-dark">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-herb/10 bg-parchment p-8 shadow-soft">
                <div className="absolute -right-16 -top-10 h-40 w-40 rounded-full bg-gold/15 blur-3xl" />
                <p className="text-xs font-semibold uppercase tracking-wide text-sage-dark">Natural Purity</p>
                <h3 className="mt-3 text-2xl font-semibold">Earth-born ingredients</h3>
                <p className="mt-4 text-sm text-charcoal/70">
                  Every product is crafted with pure, nature-inspired ingredients. No compromises, no artificial
                  additives - just the healing essence of the earth.
                </p>
                <div className="mt-5 space-y-2 text-sm text-charcoal/80">
                  <p className="inline-flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-herb" />
                    Small-batch dried for nutrient retention
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-herb" />
                    Packed in parchment-inspired, recyclable wraps
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-herb/10 bg-parchment p-8 shadow-soft">
                <div className="absolute -left-16 -bottom-16 h-44 w-44 rounded-full bg-sage-light/25 blur-3xl" />
                <p className="text-xs font-semibold uppercase tracking-wide text-sage-dark">Lasting Freedom</p>
                <h3 className="mt-3 text-2xl font-semibold">Liberation in every sip</h3>
                <p className="mt-4 text-sm text-charcoal/70">
                  We empower you to break free from dependency and reconnect with your inner wisdom, achieving
                  physical, financial, and spiritual liberation.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-charcoal/80">
                  <div className="rounded-xl bg-cream-dark/70 p-3">
                    <p className="text-[11px] uppercase tracking-wide text-sage-dark">Ritual length</p>
                    <p className="mt-1 text-sm font-semibold text-herb">7 mindful minutes</p>
                  </div>
                  <div className="rounded-xl bg-cream-dark/70 p-3">
                    <p className="text-[11px] uppercase tracking-wide text-sage-dark">Consistency</p>
                    <p className="mt-1 text-sm font-semibold text-herb">3-4x weekly</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-herb/10 bg-parchment p-8 shadow-soft md:p-12">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-16 top-0 h-32 w-32 rounded-full bg-herb/10 blur-3xl" />
                <div className="absolute bottom-[-40px] right-[-60px] h-48 w-48 rounded-full bg-gold/15 blur-3xl" />
              </div>
              <div className="grid gap-8 md:grid-cols-[1.4fr_0.6fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-sage-dark">Slow wellness circle</p>
                  <h2 className="mt-3 text-3xl font-semibold">Join the circle</h2>
                  <p className="mt-3 text-sm text-charcoal/70">
                    Sign up for early access to new rituals, seasonal launches, and mindful living guides. (UI only - no
                    data is collected.)
                  </p>
                  <div className="mt-5 grid gap-2 text-sm text-charcoal/80 sm:grid-cols-2">
                    <span className="inline-flex items-center gap-2">
                      <span className="inline-flex h-1.5 w-8 rounded-full bg-herb" />
                      Early access to limited batches
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <span className="inline-flex h-1.5 w-8 rounded-full bg-gold" />
                      Founder notes &amp; brew prompts
                    </span>
                  </div>
                </div>
                <div className="space-y-4 rounded-2xl border border-herb/10 bg-cream-dark/80 p-5 shadow-soft">
                  <Input label="Email" placeholder="your@email.com" type="email" />
                  <button className={buttonStyles('primary', 'md')} type="button">
                    Notify me
                  </button>
                  <p className="text-xs text-charcoal/60">
                    By tapping notify, you agree to receive calm, occasional updates about launches and rituals.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </div>
  );
};
