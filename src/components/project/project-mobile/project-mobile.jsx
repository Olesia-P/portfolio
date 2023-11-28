import React, { useState } from 'react';
import cx from 'classnames';
import ProjectButton from '../project-button/project-button';
import ProjectCard from '../project-card/project-card';
import css from './project-mobile.module.scss';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import ScreenshotMobile from '../../screenshot/screenshot-mobile/screenshot-mobile';

export default function ProjectMobile({ content }) {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleIntersection = () => {
    setIsAnimated(true);
  };

  const ref = useIntersectionObserver(handleIntersection, undefined, 0);

  return (
    <>
      <section className={css.topSection}>
        <div className={css.headerWrap}>
          <h2 className={css.level}>{content.level}</h2>

          <h3 className={css.projectTitle}>{content.title}</h3>
          <aside className={css.usedSkills}>
            <ul className={css.skillsList}>
              {content.skills.map((element) => (
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
          <div className={css.circle}> </div>
        </figure>
      </section>
      <section className={css.bottomSection}>
        <div className={css.description}>
          {content.description.map((element) => (
            <p key={element}>{element}</p>
          ))}
        </div>

        <div className={css.screenshot}>
          <ScreenshotMobile screenshot={content.screenshot} />
        </div>
        <div className={css.features}>
          <ProjectCard text={content.features} color={content.color1} />
        </div>
        <div className={css.learned}>
          <ProjectCard text={content.learned} color={content.color2} />
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
      </section>
    </>
  );
}
