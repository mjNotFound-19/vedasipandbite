import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface StackProps {
  className?: string;
  children: ReactNode;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}

const gapStyles: Record<NonNullable<StackProps['gap']>, string> = {
  sm: 'gap-3',
  md: 'gap-5',
  lg: 'gap-8',
  xl: 'gap-12'
};

export const Stack = ({ className, children, gap = 'md' }: StackProps) => (
  <div className={cn('flex flex-col', gapStyles[gap], className)}>{children}</div>
);

