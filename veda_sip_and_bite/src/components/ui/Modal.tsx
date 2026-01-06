import { ReactNode, useEffect, useId, useRef } from 'react';
import { motion } from 'framer-motion';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { cn } from '../../utils/cn';
import { Portal } from './Portal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  initialFocusRef?: React.RefObject<HTMLElement>;
  returnFocusRef?: React.RefObject<HTMLElement>;
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles: Record<NonNullable<ModalProps['size']>, string> = {
  sm: 'max-w-md',
  md: 'max-w-2xl',
  lg: 'max-w-4xl'
};

export const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  initialFocusRef,
  returnFocusRef,
  size = 'md'
}: ModalProps) => {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useLockBodyScroll(isOpen);
  useFocusTrap(dialogRef, isOpen, initialFocusRef);

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
        className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/40 px-6"
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
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={description ? descriptionId : undefined}
          ref={dialogRef}
          className={cn(
            'w-full rounded-2xl bg-parchment p-8 shadow-lift outline-none',
            sizeStyles[size]
          )}
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id={titleId} className="text-2xl font-semibold text-charcoal">
                {title}
              </h2>
              {description ? (
                <p id={descriptionId} className="mt-2 text-sm text-charcoal/70">
                  {description}
                </p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-herb/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-herb transition duration-250 ease-luxe hover:bg-cream"
            >
              Close
            </button>
          </div>
          <div className="mt-6">{children}</div>
        </motion.div>
      </motion.div>
    </Portal>
  );
};

