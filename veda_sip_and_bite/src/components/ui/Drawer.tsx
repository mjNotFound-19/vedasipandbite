import { ReactNode, useEffect, useId, useRef } from 'react';
import { motion } from 'framer-motion';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { cn } from '../../utils/cn';
import { Portal } from './Portal';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  initialFocusRef?: React.RefObject<HTMLElement>;
  returnFocusRef?: React.RefObject<HTMLElement>;
  size?: 'sm' | 'md';
}

const sizeStyles: Record<NonNullable<DrawerProps['size']>, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md'
};

export const Drawer = ({
  isOpen,
  onClose,
  title,
  children,
  initialFocusRef,
  returnFocusRef,
  size = 'md'
}: DrawerProps) => {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useLockBodyScroll(isOpen);
  useFocusTrap(panelRef, isOpen, initialFocusRef);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const lastActive = document.activeElement as HTMLElement | null;
    return () => {
      const target = returnFocusRef?.current ?? lastActive;
      target?.focus();
    };
  }, [isOpen, returnFocusRef]);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <motion.div
        className="fixed inset-0 z-50 flex justify-end bg-charcoal/40"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            onClose();
          }
        }}
      >
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className={cn(
            'h-full w-full bg-parchment p-6 shadow-lift outline-none',
            sizeStyles[size]
          )}
          initial={reducedMotion ? false : { x: 48 }}
          animate={{ x: 0 }}
          exit={{ x: 48 }}
          transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="flex items-center justify-between">
            <h2 id={titleId} className="text-xl font-semibold text-charcoal">
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-herb/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-herb transition duration-250 ease-luxe hover:bg-cream"
            >
              Close
            </button>
          </div>
          <div className="mt-6 h-[calc(100%-3.5rem)] overflow-y-auto pr-2">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </Portal>
  );
};

