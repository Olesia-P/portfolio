import React from 'react';
import css from './project.module.scss';
import { project1Skills } from '../../utils/language-objects';
import ProjectButton from './project-button/project-button';

export default function Project() {
  return (
    <article className={css.card}>
      <section className={css.topSection}>
        <figure className={css.pokemonImgWrap}>
          <img src="/pokeball.png" className={css.pokemonImg} alt="pokemon" />
          <div className={css.circle}> </div>
        </figure>
        <div className={css.headerWrap}>
          <h2 className={css.level}>Level 1: Pokeball</h2>

          <h3 className={css.projectTitle}>Project: Weather-App</h3>
          <aside className={css.usedSkills}>
            <ul className={css.skillsList}>
              {project1Skills.map((element) => (
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
        {/* <h4 className={css.title}>Features</h4>
        <p className={css.text}>
          In this project you can type city name and check today's weather and
          weather forecast for 6 days
        </p> */}
      </section>
      <div className={css.button1}>
        <ProjectButton text="code" color="orange" />
      </div>
      <div className={css.button2}>
        <ProjectButton text="site" color="yellow" />
      </div>
    </article>
  );
}
