import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { buttonStyles } from '../ui/Button';

export const PromoBanner = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 10000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="bg-herb text-cream transition duration-300">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3 text-xs tracking-wide md:px-10">
        <p>
          Light up your Diwali with the glow of wellness. Enjoy 20% OFF on Nettle Leaves - nature&apos;s detox this
          festive season. Sip. Heal. Celebrate. Shop now - Call or WhatsApp 9529416196.
        </p>
        <div className="flex items-center gap-2">
          <span className="rounded-pill border border-cream/30 px-3 py-1 text-[11px] uppercase">Limited offer</span>
          <Link to="/product/nettle-leaves" className={buttonStyles('secondary', 'sm')}>
            Shop Nettle
          </Link>
        </div>
      </div>
    </div>
  );
};

