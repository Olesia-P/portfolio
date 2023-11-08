import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';
import { changeTvSection } from '../../store/modules/mixed-purpose-slice';

import css from './skills-section.module.scss';
import GraphicList from '../graphic-list/graphic-list';
import {
  frontSkills,
  endSkills,
  otherSkills,
  frontSkillsMobile,
  endSkillsMobile,
  otherSkillsMobile,
} from '../../utils/language-objects';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useMediaQuery from '../../hooks/useMediaQuery';
import GraphicListMobile from '../graphic-list-mobile/graphic-list-mobile';

export default function SkillsSection() {
  const [isAnimated, setIsAnimated] = useState(false);
  const dispatch = useDispatch();
  const handleIntersection = () => {
    setIsAnimated(true);
    dispatch(changeTvSection({ name: 'skills', link: '' }));
  };
  const handleOutsideIntersection = () => {
    dispatch(changeTvSection({ name: 'about', link: '' }));
  };

  const isLowTablet = useMediaQuery(767);

  const decideThresholdValue = () => (isLowTablet ? 0 : 0.5);
  const skillsRef = useIntersectionObserver(
    handleIntersection,
    handleOutsideIntersection,
    decideThresholdValue(),
  );

  return (
    <section className={css.card} ref={skillsRef}>
      <article>
        <h2 className={css.headerSkills}>Skills</h2>
        <div className={css.commentWrapper}>
          <p className={cx(css.comment)} lang="en">
            In the fast-paced and ever-evolving world of web development, I
            believe that{' '}
            <strong className={cx(css.strong1, isAnimated && css.animated)}>
              adaptability
            </strong>{' '}
            is a key. I am{' '}
            <strong className={cx(css.strong2, isAnimated && css.animated)}>
              {' '}
              ready to learn new and old ways
            </strong>{' '}
            - whatever it takes to create a competitive product!
          </p>
        </div>
        <section className={css.skillsWrap}>
          {!isLowTablet && (
            <>
              <GraphicList
                category="Front-end"
                list={frontSkills}
                coveredItemsNumber="seven"
                meterColor="green"
                isAnimated={isAnimated}
              />
              <GraphicList
                category="Back-end"
                list={endSkills}
                coveredItemsNumber="two"
                meterColor="blue"
                isAnimated={isAnimated}
              />
              <GraphicList
                category="Other"
                list={otherSkills}
                coveredItemsNumber="four"
                meterColor="darkblue"
                isAnimated={isAnimated}
              />
            </>
          )}
          {isLowTablet && (
            <>
              <GraphicListMobile
                category="Front-end"
                list={frontSkillsMobile}
                meterColor="green"
                isAnimated={isAnimated}
              />
              <GraphicListMobile
                category="Back-end"
                list={endSkillsMobile}
                meterColor="blue"
                isAnimated={isAnimated}
              />
              <GraphicListMobile
                category="Other"
                list={otherSkillsMobile}
                meterColor="darkblue"
                isAnimated={isAnimated}
              />
            </>
          )}
        </section>
      </article>
      <aside className={css.pokemonPyramidWrap}>
        <img
          className={cx(css.pokemonPyramid, isAnimated && css.animated)}
          src="/pokemon-pyramid.png"
          alt="pokemon-pyramid.png"
        />
      </aside>
    </section>
  );
}
