import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface ProseProps {
  className?: string;
  children: ReactNode;
}

export const Prose = ({ className, children }: ProseProps) => (
  <div className={cn('text-base leading-body text-charcoal/80', className)}>{children}</div>
);

