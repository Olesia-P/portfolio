import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './projects-section-header.module.scss';
import Typewriter from '../typewriter/typewriter';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useMediaQuery from '../../hooks/useMediaQuery';
import { changeTvSection } from '../../store/modules/mixed-purpose-slice';

export default function ProjectsSectionHeader() {
  const [isAnimated, setIsAnimated] = useState(false);
  const isSmallDesktop = useMediaQuery(1440);

  const dispatch = useDispatch();

  const handleIntersection = () => {
    setIsAnimated(true);
    dispatch(changeTvSection({ name: '', link: '' }));
  };

  const decideThresholdValue = () => (isSmallDesktop ? 0 : 0.3);

  const ref = useIntersectionObserver(
    handleIntersection,
    undefined,
    decideThresholdValue(),
    0.3,
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
