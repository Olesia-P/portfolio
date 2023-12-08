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

export default function Project({ content, size }) {
  const [isAnimated, setIsAnimated] = useState(false);
  const dispatch = useDispatch();

  const isLowTablet = useMediaQuery(767);

  const handleIntersection = () => {
    setIsAnimated(true);
    dispatch(changeTvSection(content.tv));
  };

  const ref = useIntersectionObserver(handleIntersection, undefined, 0);
  return (
    <article className={css.card}>
      {!isLowTablet && (
        <>
          <section className={css.topSection}>
            <figure className={css.pokemonImgWrap} ref={ref}>
              <img
                src={content.pokemonImg}
                className={cx(
                  css.pokemonImg,
                  css[content.pokemonImgSize],
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
              <h2 className={css.level}>{content.level}</h2>

              <h3 className={css.projectTitle}>{content.title}</h3>
              <aside className={css.usedSkills}>
                <ul className={css.skillsList}>
                  {content.skills.map((element) => (
                    <li key={element.name} className={css.skillItem}>
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
              {content.description.map((element) => (
                <p key={element}>{element}</p>
              ))}
            </div>

            <div className={css.cards}>
              <div className={css.features}>
                <ProjectCard
                  text={content.features}
                  color={content.color1}
                  size={size}
                />
              </div>
              <div className={css.learned}>
                <ProjectCard
                  text={content.learned}
                  color={content.color2}
                  size={size}
                />
              </div>
            </div>

            <div className={css.button1}>
              <ProjectButton
                text={content.btn1}
                color={content.color1}
                href={content.codeLink}
              />
            </div>
            <div className={css.button2}>
              <ProjectButton
                text={content.btn2}
                color={content.color2}
                href={content.siteLink}
              />
            </div>

            <div className={css.screenshot}>
              <Screenshot screenshot={content.screenshot} />
            </div>
          </section>
        </>
      )}
      {isLowTablet && (
        <ProjectMobile content={content} isAnimated={isAnimated} />
      )}
    </article>
  );
}
