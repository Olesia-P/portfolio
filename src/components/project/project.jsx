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
import Screenshot from '../screenshot/screenshot';

export default function Project({ text, size }) {
  const [isAnimated, setIsAnimated] = useState(false);
  const dispatch = useDispatch();

  const isLowTablet = useMediaQuery(767);

  const handleIntersection = () => {
    setIsAnimated(true);
    dispatch(changeTvSection(text.tv));
  };

  const ref = useIntersectionObserver(handleIntersection, undefined, 0);
  return (
    <article className={css.card}>
      {!isLowTablet && (
        <>
          <section className={css.topSection}>
            <figure className={css.pokemonImgWrap} ref={ref}>
              <img
                src={text.pokemonImg}
                className={cx(
                  css.pokemonImg,
                  css[text.pokemonImgSize],
                  isAnimated && css.animated,
                )}
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

            <div className={css.features}>
              <ProjectCard
                text={text.features}
                color={text.color1}
                size={size}
              />
            </div>
            <div className={css.learned}>
              <ProjectCard
                text={text.learned}
                color={text.color2}
                size={size}
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

            <div className={css.screenshot}>
              <Screenshot screenshot={text.screenshot} />
            </div>
          </section>
        </>
      )}
      {isLowTablet && <ProjectMobile text={text} isAnimated={isAnimated} />}
    </article>
  );
}
