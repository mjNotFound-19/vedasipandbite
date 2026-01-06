import { NavLink, Link } from 'react-router-dom';
import { useCartStore } from '../../store/cart';
import { useOverlay } from '../../context/OverlayContext';
import { IconButton } from '../ui/IconButton';
import { buttonStyles } from '../ui/Button';
import { cn } from '../../utils/cn';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' }
];

export const Navbar = () => {
  const { openCart, openSearch } = useOverlay();
  const itemsCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="sticky top-0 z-40">
      <div className="relative border-b border-herb/50 bg-herb text-cream shadow-[0_12px_30px_-18px_rgba(0,0,0,0.65)] backdrop-blur">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-[-30px] h-44 w-44 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute right-[-50px] top-6 h-36 w-36 rounded-full bg-cream/10 blur-3xl" />
        </div>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-10">
          <Link to="/" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-gold/40 bg-[linear-gradient(135deg,#2b4c3f,#1e3a2f_45%,#14261e)] text-sm font-semibold text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_10px_20px_-14px_rgba(0,0,0,0.6)]">
              VS
            </span>
            <div>
              <p className="text-base font-semibold text-cream">Veda Sip & Bite</p>
              <p className="text-[11px] uppercase tracking-wide text-cream/70">Rituals by nature</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'relative px-2 py-1 text-xs font-semibold uppercase tracking-wide transition duration-250 ease-luxe after:absolute after:left-1/2 after:top-full after:h-[2px] after:w-8 after:-translate-x-1/2 after:rounded-full after:bg-gold after:content-[\'\'] after:transition after:duration-250',
                    isActive
                      ? 'text-gold after:opacity-100'
                      : 'text-cream/80 hover:text-gold after:opacity-0 hover:after:opacity-80'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <IconButton label="Search" onClick={openSearch} className="text-cream hover:text-gold">
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </IconButton>
            <button
              type="button"
              onClick={openCart}
              className="relative inline-flex items-center gap-2 rounded-pill border border-gold/60 bg-[linear-gradient(135deg,#e6d3a1,#c9a450_45%,#8f6b2c)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-charcoal shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_12px_30px_-16px_rgba(0,0,0,0.55)] transition duration-250 ease-luxe hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_16px_36px_-18px_rgba(0,0,0,0.6)] active:translate-y-[1px]"
            >
              Cart
              {itemsCount > 0 ? (
                <span className="rounded-full bg-herb px-2 py-0.5 text-[10px] font-semibold text-cream shadow-outline">
                  {itemsCount}
                </span>
              ) : null}
            </button>
            <Link to="/shop" className={cn('hidden md:inline-flex', buttonStyles('primary', 'sm'))}>
              Shop
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-herb/40 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-cream/85 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-3 py-1 transition duration-200 ease-luxe',
                  isActive ? 'bg-gold text-charcoal' : 'bg-herb-light/40 text-cream hover:text-gold'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};
