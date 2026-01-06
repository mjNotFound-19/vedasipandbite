import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface GridProps {
  className?: string;
  children: ReactNode;
}

export const Grid = ({ className, children }: GridProps) => (
  <div className={cn('grid gap-6', className)}>{children}</div>
);

