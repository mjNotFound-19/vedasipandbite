import { FormEvent } from 'react';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useToast } from '../components/ui/Toast';

export const Contact = () => {
  const { notify } = useToast();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    notify('Message received', 'This form is UI-only. Please email us directly.');
  };

  return (
    <Section>
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-sage-dark">Contact</p>
            <h1 className="text-4xl font-semibold">We are here to help</h1>
            <p className="text-sm text-charcoal/70">
              Reach out for wholesale, press, or wellness guidance. We respond within 1-2 business days.
            </p>
            <div className="space-y-2 text-sm text-charcoal/70">
              <p>Phone: +91 95294 16196</p>
              <p>Email: vedasipbite@gmail.com</p>
              <p>Location: Pune, Maharashtra, India</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-herb/10 bg-parchment p-6">
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
            <Input label="Name" placeholder="Your name" name="name" />
            <Input label="Email" placeholder="you@email.com" name="email" type="email" />
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-herb">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your needs"
                className="w-full rounded-xl border border-herb/20 bg-cream px-4 py-3 text-sm text-charcoal shadow-soft placeholder:text-charcoal/50"
              />
            </div>
            <p className="text-xs text-charcoal/60">
              UI-only form. Please contact us directly via email or phone for a response.
            </p>
            <Button type="submit">Send message</Button>
          </form>
        </div>
      </Container>
    </Section>
  );
};

