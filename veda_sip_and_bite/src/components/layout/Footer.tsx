import { Link } from 'react-router-dom';
import { safeExternalLink } from '../../utils/safeExternalLink';

export const Footer = () => (
  <footer className="border-t border-cream-dark bg-cream">
    <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3 md:px-10">
      <div className="space-y-3">
        <p className="text-lg font-semibold text-herb">Veda Sip & Bite</p>
        <p className="text-sm text-charcoal/70">
          Sip. Bite. Belong to Nature.
        </p>
        <p className="text-xs text-charcoal/60">
          FSSAI # 21525083009062
        </p>
      </div>
      <div className="space-y-2 text-sm text-charcoal/70">
        <p className="font-semibold text-herb">Visit</p>
        <p>Pune, Maharashtra, India</p>
        <p>
          <a href="tel:+919529416196" className="hover:text-herb">
            +91 95294 16196
          </a>
        </p>
        <p>
          <a href="mailto:vedasipbite@gmail.com" className="hover:text-herb">
            vedasipbite@gmail.com
          </a>
        </p>
      </div>
      <div className="space-y-3 text-sm text-charcoal/70">
        <p className="font-semibold text-herb">Legal</p>
        <div className="flex flex-col gap-2">
          <Link to="/legal/terms" className="hover:text-herb">
            Terms
          </Link>
          <Link to="/legal/privacy" className="hover:text-herb">
            Privacy
          </Link>
          <Link to="/legal/shipping" className="hover:text-herb">
            Shipping
          </Link>
          <a href="https://www.fssai.gov.in" {...safeExternalLink('https://www.fssai.gov.in')}>
            FSSAI
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-cream-dark bg-cream-dark">
      <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-charcoal/60 md:px-10">
        <p>
          Products and content on this site are for general wellness and informational purposes only and are not
          intended to diagnose, treat, cure, or prevent any disease. If you are pregnant, taking any medication, or
          have known food allergies, please consult your healthcare professional before using our products.
        </p>
      </div>
    </div>
  </footer>
);

