import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';

export const Privacy = () => (
  <Section>
    <Container>
      <div className="max-w-3xl space-y-6">
        <div>
          <p className="text-xs uppercase tracking-wide text-sage-dark">Effective Date: 20th October 2025</p>
          <h1 className="mt-3 text-4xl font-semibold">Privacy Policy</h1>
        </div>
        <div className="space-y-4 text-sm text-charcoal/70">
          <p>
            This is a static storefront. We do not collect or store personal data on this site, and we do not store
            addresses, emails, or phone numbers in localStorage or analytics tools.
          </p>
          <p>
            Checkout occurs on a trusted hosted provider. Their privacy policies describe how they handle payment and
            delivery data.
          </p>
          <p>
            Any contact or newsletter forms shown are UI-only and do not submit data. If you contact us directly via
            email or phone, we will only use your details to respond to you.
          </p>
        </div>
      </div>
    </Container>
  </Section>
);

