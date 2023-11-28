import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';
import { changeTvSection } from '../../store/modules/mixed-purpose-slice';
import css from './skills-section.module.scss';
import GraphicList from '../graphic-list/graphic-list';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useMediaQuery from '../../hooks/useMediaQuery';
import GraphicListMobile from '../graphic-list-mobile/graphic-list-mobile';

export default function SkillsSection({ skillsContent }) {
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
        <h2 className={css.headerSkills}>{skillsContent.header}</h2>
        <div className={css.commentWrapper}>
          <p className={cx(css.comment)} lang="en">
            {skillsContent.comment[0]}{' '}
            <strong className={cx(css.strong1, isAnimated && css.animated)}>
              {skillsContent.comment[1]}
            </strong>{' '}
            {skillsContent.comment[2]}{' '}
            <strong className={cx(css.strong2, isAnimated && css.animated)}>
              {' '}
              {skillsContent.comment[3]}
            </strong>{' '}
            {skillsContent.comment[4]}
          </p>
        </div>
        <section className={css.skillsWrap}>
          {!isLowTablet && (
            <>
              <GraphicList
                category="Front-end"
                list={skillsContent.frontSkills}
                coveredItemsNumber="seven"
                meterColor="green"
                isAnimated={isAnimated}
              />
              <GraphicList
                category="Back-end"
                list={skillsContent.backSkills}
                coveredItemsNumber="two"
                meterColor="blue"
                isAnimated={isAnimated}
              />
              <GraphicList
                category="Other"
                list={skillsContent.otherSkills}
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
                list={skillsContent.frontSkillsMobile}
                meterColor="green"
              />
              <GraphicListMobile
                category="Back-end"
                list={skillsContent.backSkillsMobile}
                meterColor="blue"
              />
              <GraphicListMobile
                category="Other"
                list={skillsContent.otherSkillsMobile}
                meterColor="darkblue"
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
