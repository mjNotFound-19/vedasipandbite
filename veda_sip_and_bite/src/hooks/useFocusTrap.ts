import { RefObject, useEffect } from 'react';

const focusableSelectors = [
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(',');

export const useFocusTrap = (
  containerRef: RefObject<HTMLElement>,
  isActive: boolean,
  initialFocusRef?: RefObject<HTMLElement>
) => {
  useEffect(() => {
    if (!isActive || !containerRef.current) {
      return;
    }

    const container = containerRef.current;
    const focusable = Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors));
    const first = initialFocusRef?.current || focusable[0] || container;
    const last = focusable[focusable.length - 1] || container;

    if (!container.hasAttribute('tabindex')) {
      container.setAttribute('tabindex', '-1');
    }

    first.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    container.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, [containerRef, initialFocusRef, isActive]);
};

