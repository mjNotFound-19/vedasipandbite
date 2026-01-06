import { ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { cn } from '../../utils/cn';

interface IconButtonProps extends HTMLMotionProps<'button'> {
  label: string;
  children: ReactNode;
}

export const IconButton = ({ label, className, type = 'button', ...props }: IconButtonProps) => {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.button
      type={type}
      aria-label={label}
      className={cn(
        'relative inline-flex items-center justify-center rounded-full border border-gold/50 bg-[linear-gradient(140deg,#264637,#1e3a2f_45%,#14261e)] p-2 text-cream transition duration-250 ease-luxe focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream sheen-overlay overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_28px_-16px_rgba(0,0,0,0.55)] hover:text-gold',
        className
      )}
      whileHover={reducedMotion ? undefined : { y: -1 }}
      whileTap={reducedMotion ? undefined : { scale: 0.96 }}
      {...props}
    />
  );
};
