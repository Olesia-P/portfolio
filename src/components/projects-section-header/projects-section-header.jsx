import React, { useState } from 'react';
import css from './projects-section-header.module.scss';
import Typewriter from '../typewriter/typewriter';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function ProjectsSectionHeader() {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleIntersection = () => {
    setIsAnimated(true);
  };

  const ref = useIntersectionObserver(handleIntersection, undefined, -150, 1);

  return (
    <header className={css.projectsSectionHeaderWrap} ref={ref}>
      <h2 className={css.projectsHeader}>Projects</h2>
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
