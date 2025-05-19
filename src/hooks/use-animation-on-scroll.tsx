
import { useEffect, useRef, useState } from 'react';

interface UseAnimationOnScrollProps {
  threshold?: number;
  rootMargin?: string;
}

export function useAnimationOnScroll({
  threshold = 0.1,
  rootMargin = '0px'
}: UseAnimationOnScrollProps = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    );

    const currentElement = ref.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, isInView]);

  return { ref, isInView };
}
