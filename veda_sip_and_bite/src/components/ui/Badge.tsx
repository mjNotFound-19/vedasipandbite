import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'muted' | 'accent';
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-herb text-cream',
  muted: 'bg-cream-dark text-herb',
  accent: 'bg-gold text-cream'
};

export const Badge = ({ children, variant = 'default', className }: BadgeProps) => (
  <span
    className={cn(
      'inline-flex items-center rounded-pill px-3 py-1 text-xs font-semibold uppercase tracking-wide',
      variantStyles[variant],
      className
    )}
  >
    {children}
  </span>
);

