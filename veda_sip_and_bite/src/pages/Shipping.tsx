import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';

export const Shipping = () => (
  <Section>
    <Container>
      <div className="max-w-3xl space-y-6">
        <div>
          <p className="text-xs uppercase tracking-wide text-sage-dark">Effective Date: 20th October 2025</p>
          <h1 className="mt-3 text-4xl font-semibold">Shipping & Delivery</h1>
        </div>
        <div className="space-y-4 text-sm text-charcoal/70">
          <p>
            Shipping options and delivery timelines are displayed during hosted checkout. Final costs depend on your
            location and the items in your cart.
          </p>
          <p>
            We currently serve customers within India. For bulk or international inquiries, contact us directly and we
            will guide you through the next steps.
          </p>
          <p>
            If you need help with a shipment, please email vedasipbite@gmail.com or call +91 95294 16196.
          </p>
        </div>
      </div>
    </Container>
  </Section>
);

