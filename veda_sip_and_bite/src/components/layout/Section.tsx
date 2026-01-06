import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface SectionProps {
  className?: string;
  children: ReactNode;
  id?: string;
}

export const Section = ({ className, children, id }: SectionProps) => (
  <section id={id} className={cn('py-18 md:py-22', className)}>
    {children}
  </section>
);

