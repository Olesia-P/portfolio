import { useEffect, useRef } from 'react';

export default function useIntersectionObserver(
  handleIntersection,
  handleOutsideIntersection,
  rootMargin,
  thresholdValue,
) {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleIntersection();
          }
          if (
            !entry.isIntersecting &&
            typeof handleOutsideIntersection === 'function'
          ) {
            handleOutsideIntersection();
          }
        });
      },
      {
        root: null,
        rootMargin: `${rootMargin}px`,
        threshold: thresholdValue,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);
  return ref;
}
