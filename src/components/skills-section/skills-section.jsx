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
    dispatch(changeTvSection('skills'));
  };

  const isLowTablet = useMediaQuery(767);

  const skillsRef = useIntersectionObserver(handleIntersection, undefined, 0.1);

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
                animationDelay="delayS"
              />
              <GraphicListMobile
                category="Back-end"
                list={endSkillsMobile}
                meterColor="blue"
                isAnimated={isAnimated}
                animationDelay="delayM"
              />
              <GraphicListMobile
                category="Other"
                list={otherSkillsMobile}
                meterColor="darkblue"
                isAnimated={isAnimated}
                animationDelay="delayL"
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
