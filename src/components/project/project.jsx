import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';
import css from './project.module.scss';
import ProjectButton from './project-button/project-button';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { changeTvSection } from '../../store/modules/mixed-purpose-slice';
import ProjectCard from './project-card/project-card';
import useMediaQuery from '../../hooks/useMediaQuery';
import ProjectMobile from './project-mobile/project-mobile';
import TvMobile from '../tv/tv-mobile/tv-mobile';

export default function Project({ text }) {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isCardAnimated, setIsCardAnimated] = useState(false);
  const dispatch = useDispatch();

  const isLowTablet = useMediaQuery(767);

  const handleIntersection = () => {
    setIsAnimated(true);
    dispatch(
      changeTvSection({
        name: `${text.tvSection.name}`,
        link: `${text.tvSection.link}`,
      }),
    );
    setTimeout(() => {
      setIsCardAnimated(true);
    }, 1500);
  };

  const ref = useIntersectionObserver(handleIntersection, undefined, 0);
  return (
    <article className={css.card} ref={ref}>
      {!isLowTablet && (
        <>
          <section className={css.topSection}>
            <figure className={css.pokemonImgWrap}>
              <img
                src={text.pokemonImg}
                className={cx(css.pokemonImg, isAnimated && css.animated)}
                alt="pokemon"
              />
              <img
                src="/movement.png"
                className={cx(css.movementImg, isAnimated && css.animated)}
                alt="movement"
              />
            </figure>
            <figure className={css.circleWrap}>
              <div className={css.circle}> </div>
            </figure>
            <div className={css.headerWrap}>
              <h2 className={css.level}>{text.level}</h2>

              <h3 className={css.projectTitle}>{text.title}</h3>
              <aside className={css.usedSkills}>
                <ul className={css.skillsList}>
                  {text.skills.map((element) => (
                    <li key={element.id} className={css.skillItem}>
                      <img
                        src={element.icon}
                        className={css.skillIcon}
                        alt={element.name}
                      />
                      {element.name}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </section>
          <section className={css.bottomSection}>
            <div className={css.description}>
              {text.description.map((element) => (
                <p key={element}>{element}</p>
              ))}
            </div>

            <div className={css.tvMobile}>
              <TvMobile tvSection={text.tvSection} />
            </div>

            <div className={css.features}>
              <ProjectCard
                text={text.features}
                color={text.color1}
                isAnimated={isCardAnimated}
              />
            </div>
            <div className={css.learned}>
              <ProjectCard
                text={text.learned}
                color={text.color2}
                isAnimated={isCardAnimated}
              />
            </div>

            <div className={css.button1}>
              <ProjectButton
                text="CODE"
                color={text.color1}
                href={text.codeLink}
              />
            </div>
            <div className={css.button2}>
              <ProjectButton
                text="SITE"
                color={text.color2}
                href={text.siteLink}
              />
            </div>
          </section>
        </>
      )}
      {isLowTablet && (
        <ProjectMobile
          text={text}
          isAnimated={isAnimated}
          isCardAnimated={isCardAnimated}
          tvSection={text.tvSection}
        />
      )}
    </article>
  );
}
