import { useEffect, useState, useRef } from 'react';
import { useReducedMotion } from './use-reduced-motion';

interface UseParallaxOptions {
  speed?: number;
  offset?: number;
  enabled?: boolean;
}

export function useParallax({ speed = 0.5, offset = 0, enabled = true }: UseParallaxOptions = {}) {
  const [offsetY, setOffsetY] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled || prefersReducedMotion) {
      setOffsetY(0);
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        rafId.current = window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset;
          setOffsetY(scrollY * speed + offset);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial call
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, [speed, offset, enabled, prefersReducedMotion]);

  return offsetY;
}

// Hook for element-based parallax
export function useElementParallax(elementRef: React.RefObject<HTMLElement>, speed: number = 0.5) {
  const [transform, setTransform] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!elementRef.current || prefersReducedMotion) {
      setTransform(0);
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        rafId.current = window.requestAnimationFrame(() => {
          if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Calculate parallax offset when element is in viewport
            if (scrollY + windowHeight > elementTop && scrollY < elementTop + rect.height) {
              const progress = (scrollY + windowHeight - elementTop) / (windowHeight + rect.height);
              setTransform((progress - 0.5) * speed * 100);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, [elementRef, speed, prefersReducedMotion]);

  return transform;
}

