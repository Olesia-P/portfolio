import React, { useState } from 'react';
import cx from 'classnames';
import ProjectButton from '../project-button/project-button';
import ProjectCard from '../project-card/project-card';
import css from './project-mobile.module.scss';
import TvMobile from '../../tv/tv-mobile/tv-mobile';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

export default function ProjectMobile({ text, tvSection }) {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isCardAnimated, setIsCardAnimated] = useState(false);

  const handleIntersection = () => {
    setIsAnimated(true);

    setTimeout(() => {
      setIsCardAnimated(true);
    }, 1500);
  };

  const ref = useIntersectionObserver(handleIntersection, undefined, 0);

  return (
    <>
      <section className={css.topSection} ref={ref}>
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
          <div className={css.circle}> </div>
        </figure>
      </section>
      <section className={css.bottomSection}>
        <div className={css.description}>
          {text.description.map((element) => (
            <p key={element}>{element}</p>
          ))}
        </div>

        <div className={css.tv}>
          <TvMobile tvSection={tvSection} />
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
            href="https://github.com/Olesia-P/weather-react"
          />
        </div>
        <div className={css.button2}>
          <ProjectButton
            text="SITE"
            color={text.color2}
            href="https://courageous-zuccutto-ed2e98.netlify.app/"
          />
        </div>
      </section>
    </>
  );
}
