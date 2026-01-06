import { ReactNode, useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersection } from '../../hooks/useIntersection';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { cn } from '../../utils/cn';

interface RevealProps {
  children: ReactNode;
  className?: string;
}

export const Reveal = ({ children, className }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(ref, { threshold: 0.2 });
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      animate={isVisible ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
};

