import { RefObject, useEffect, useState } from 'react';

export const useIntersection = <T extends HTMLElement>(
  ref: RefObject<T>,
  options?: IntersectionObserverInit
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options, ref]);

  return isVisible;
};

