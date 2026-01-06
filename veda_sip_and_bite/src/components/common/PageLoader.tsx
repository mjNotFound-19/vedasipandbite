import { CSSProperties } from 'react';
import { cn } from '../../utils/cn';

const leaves = [
  { x: '5vw', delay: '0s', duration: '7s', size: 28 },
  { x: '18vw', delay: '0.6s', duration: '6.5s', size: 22 },
  { x: '32vw', delay: '1s', duration: '7.4s', size: 26 },
  { x: '48vw', delay: '0.2s', duration: '6.8s', size: 24 },
  { x: '62vw', delay: '0.8s', duration: '7.2s', size: 20 },
  { x: '78vw', delay: '1.2s', duration: '7.6s', size: 28 },
  { x: '90vw', delay: '0.4s', duration: '6.9s', size: 24 }
];

export const PageLoader = () => (
  <div
    className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-gradient-to-b from-cream to-cream-dark"
    role="status"
    aria-live="polite"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(155,170,138,0.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(183,139,62,0.12),transparent_40%)]" />
    <div className="relative z-10 flex flex-col items-center gap-4 rounded-2xl border border-herb/10 bg-parchment/80 px-8 py-6 shadow-soft">
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-herb/20 border-t-gold" />
      <div className="text-center">
        <p className="text-sm font-semibold text-herb">Preparing your ritual</p>
        <p className="text-xs text-charcoal/70">Leaves are falling into place...</p>
      </div>
    </div>
    {leaves.map((leaf, index) => (
      <svg
        key={`leaf-${index}`}
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={cn('leaf', 'opacity-80')}
        style={
          {
            '--leaf-x': leaf.x,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`
          } as CSSProperties
        }
      >
        <path
          d="M12 2C8 5 4 9 4 13c0 5 4 9 8 9s8-4 8-9c0-2-1-4-3-6l1-4-4 1c-1-1-2-2-2-2Z"
          fill="currentColor"
        />
      </svg>
    ))}
    <span className="sr-only">Loading</span>
  </div>
);

