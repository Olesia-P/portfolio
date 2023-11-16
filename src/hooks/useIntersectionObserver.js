import { useEffect, useRef } from 'react';
import useMediaQuery from './useMediaQuery';

export default function useIntersectionObserver(
  handleIntersection,
  handleOutsideIntersection,
  thresholdValue,
) {
  const ref = useRef();
  const isSmallDesktop = useMediaQuery(1440);

  const decideRootMargin = () => (isSmallDesktop ? '' : '-20% 0% -30% 0%');
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
        rootMargin: decideRootMargin(),
        threshold: thresholdValue,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);
  return ref;
}
