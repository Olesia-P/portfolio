import React, { useState } from 'react';
import css from './projects-section-header.module.scss';
import Typewriter from '../typewriter/typewriter';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function ProjectsSectionHeader() {
  const [isAnimated, setIsAnimated] = useState(false);
  const isLowTablet = useMediaQuery(767);

  const handleIntersection = () => {
    setIsAnimated(true);
  };

  const decideRootMargin = () => (isLowTablet ? -150 : 0);

  const ref = useIntersectionObserver(
    handleIntersection,
    undefined,
    decideRootMargin(),
    1,
  );

  return (
    <header className={css.projectsSectionHeaderWrap} ref={ref}>
      <div className={css.headerWrap}>
        <h2 className={css.projectsHeader}>Projects</h2>
      </div>
      <p className={css.projectsCaption}>
        <Typewriter
          text="Pokemons evolve... so do developers!"
          delay={60}
          isAnimated={isAnimated}
        />
      </p>
      <img src="/dialog-box.png" alt="dialog-box" className={css.dialogBox} />
      <img src="/karate.png" alt="character" className={css.character} />
    </header>
  );
}
