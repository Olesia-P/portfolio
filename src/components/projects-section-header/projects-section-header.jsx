import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './projects-section-header.module.scss';
import Typewriter from '../typewriter/typewriter';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { changeTvSection } from '../../store/modules/mixed-purpose-slice';
import { content } from '../../utils/language-objects';

export default function ProjectsSectionHeader() {
  const [isAnimated, setIsAnimated] = useState(false);
  const { language } = useSelector(({ mixedPurpose }) => mixedPurpose);

  const dispatch = useDispatch();

  const handleIntersection = () => {
    setIsAnimated(true);
    dispatch(changeTvSection(' '));
  };

  const ref = useIntersectionObserver(handleIntersection, undefined, 0);

  return (
    <header className={css.projectsSectionHeaderWrap} ref={ref}>
      <div className={css.headerWrap}>
        <h2 className={css.projectsHeader}>
          {content[language].projects.projectsSectionHeader.header}
        </h2>
      </div>
      <p className={css.projectsCaption}>
        <Typewriter
          text={content[language].projects.projectsSectionHeader.text}
          delay={60}
          isAnimated={isAnimated}
        />
      </p>
      <img src="/dialog-box.png" alt="dialog-box" className={css.dialogBox} />
      <img src="/karate.png" alt="character" className={css.character} />
    </header>
  );
}
