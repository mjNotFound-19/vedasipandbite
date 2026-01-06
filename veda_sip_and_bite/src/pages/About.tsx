import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Reveal } from '../components/common/Reveal';

export const About = () => {
  return (
    <div>
      <Section>
        <Container>
          <Reveal>
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-sage-dark">About</p>
              <h1 className="text-4xl font-semibold">Rooted in two journeys, united in wellness</h1>
              <p className="text-sm text-charcoal/70">
                We are the two co-founders of Veda Sip & Bite, a brand born from two journeys that found their meeting
                point in wellness, conscious living, and a small but mighty plant - "Nettle Leaves". What began as two
                separate stories became one shared purpose: to help others rediscover the healing wisdom of nature.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-cream-dark">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-herb/10 bg-parchment p-8">
                <h2 className="text-2xl font-semibold text-herb">Why we started</h2>
                <p className="mt-4 text-sm text-charcoal/70">
                  We watched modern wellness become loud, rushed, and transactional. We chose to return to slow,
                  intentional rituals - brewing leaves, blending botanicals, and sharing the story behind every source.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl border border-herb/10 bg-parchment p-8">
                <h2 className="text-2xl font-semibold text-herb">Our promise</h2>
                <p className="mt-4 text-sm text-charcoal/70">
                  A Veda Sip & Bite ritual must feel honest, grounded, and nourishing. We honor the plant, the land, and
                  the people who bring each ingredient to life.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 md:grid-cols-[0.4fr_0.6fr]">
            <Reveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-sage-dark">Timeline</p>
                <h2 className="mt-3 text-3xl font-semibold">From discovery to ritual</h2>
              </div>
            </Reveal>
            <Reveal>
              <ol className="space-y-6 border-l border-herb/20 pl-6 text-sm text-charcoal/70">
                <li>
                  <p className="text-xs font-semibold uppercase tracking-wide text-herb">2019</p>
                  <p className="mt-2">The first nettle harvest sparked our curiosity about ancestral wellness.</p>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-wide text-herb">2022</p>
                  <p className="mt-2">
                    We began blending herbs with local growers, learning the nuances of each terroir.
                  </p>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-wide text-herb">2024</p>
                  <p className="mt-2">
                    Veda Sip & Bite was born - a sanctuary for slow, sensory rituals.
                  </p>
                </li>
              </ol>
            </Reveal>
          </div>
        </Container>
      </Section>
    </div>
  );
};

