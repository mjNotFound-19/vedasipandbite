import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => (
  <div className={cn('mx-auto w-full max-w-6xl px-6 md:px-10', className)}>{children}</div>
);

