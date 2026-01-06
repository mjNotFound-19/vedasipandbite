import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';

export const Terms = () => (
  <Section>
    <Container>
      <div className="max-w-3xl space-y-6">
        <div>
          <p className="text-xs uppercase tracking-wide text-sage-dark">Effective Date: 20th October 2025</p>
          <h1 className="mt-3 text-4xl font-semibold">Terms of Service</h1>
        </div>
        <div className="space-y-4 text-sm text-charcoal/70">
          <p>
            By using this site, you agree to explore our catalog, content, and wellness resources for personal,
            informational purposes.
          </p>
          <p>
            All checkout experiences are completed on a hosted checkout provider. Final pricing, taxes, and delivery
            fees are shown at checkout.
          </p>
          <p>
            We reserve the right to update product availability and content without notice. Any updates will appear
            here with a new effective date.
          </p>
        </div>
      </div>
    </Container>
  </Section>
);

