import React from 'react';
import cx from 'classnames';
import ProjectButton from '../project-button/project-button';
import ProjectCard from '../project-card/project-card';
import css from './project-mobile.module.scss';

export default function ProjectMobile({ text, isAnimated, isCardAnimated }) {
  return (
    <>
      <section className={css.topSection}>
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
            src="/pokeball.png"
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
          <p>{text.description}</p>
        </div>

        <div className={css.features}>
          <ProjectCard
            text={text.features}
            color="yellow"
            isAnimated={isCardAnimated}
          />
        </div>
        <div className={css.learned}>
          <ProjectCard
            text={text.learned}
            color="orange"
            isAnimated={isCardAnimated}
          />
        </div>

        <div className={css.button1}>
          <ProjectButton
            text="CODE"
            color="yellow"
            href="https://github.com/Olesia-P/weather-react"
          />
        </div>
        <div className={css.button2}>
          <ProjectButton
            text="SITE"
            color="orange"
            href="https://courageous-zuccutto-ed2e98.netlify.app/"
          />
        </div>
      </section>
    </>
  );
}
