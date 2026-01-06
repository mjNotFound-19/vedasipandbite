import { Link } from 'react-router-dom';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { buttonStyles } from '../components/ui/Button';

export const NotFound = () => (
  <Section>
    <Container>
      <div className="max-w-xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-sage-dark">404</p>
        <h1 className="text-4xl font-semibold">We could not find that page</h1>
        <p className="text-sm text-charcoal/70">
          The page you are looking for has moved or does not exist. Return to the collection.
        </p>
        <Link to="/" className={buttonStyles('primary', 'md')}>
          Go home
        </Link>
      </div>
    </Container>
  </Section>
);

