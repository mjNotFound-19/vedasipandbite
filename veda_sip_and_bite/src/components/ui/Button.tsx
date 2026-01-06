import { motion, type HTMLMotionProps } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { cn } from '../../utils/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export const buttonStyles = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md'
) => {
  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition duration-250 ease-luxe focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:cursor-not-allowed disabled:opacity-60 sheen-overlay overflow-hidden';
  const variants: Record<ButtonVariant, string> = {
    primary:
      'border border-gold/60 bg-[linear-gradient(135deg,#e6d3a1,#c9a450_45%,#8f6b2c)] text-charcoal shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_12px_30px_-16px_rgba(0,0,0,0.55)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_16px_36px_-18px_rgba(0,0,0,0.6)]',
    secondary:
      'border border-herb/40 bg-[linear-gradient(140deg,#264637,#1e3a2f_45%,#14261e)] text-cream shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_28px_-16px_rgba(0,0,0,0.55)] hover:border-gold/60 hover:text-gold',
    ghost:
      'border border-gold/50 bg-transparent text-herb hover:text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]'
  };
  const sizes: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-xs tracking-wide',
    md: 'px-6 py-3 text-sm tracking-wide',
    lg: 'px-7 py-3.5 text-base tracking-wide'
  };
  return cn(base, variants[variant], sizes[size]);
};

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  disabled,
  ...props
}: ButtonProps) => {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.button
      type={type}
      className={cn(buttonStyles(variant, size), className)}
      whileHover={reducedMotion || disabled ? undefined : { y: -1 }}
      whileTap={reducedMotion || disabled ? undefined : { scale: 0.985 }}
      disabled={disabled}
      {...props}
    />
  );
};
