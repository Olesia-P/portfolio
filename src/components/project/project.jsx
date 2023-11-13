import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import cx from 'classnames';
import css from './project.module.scss';
import {
  project1Skills,
  project1Features,
  project1Learned,
} from '../../utils/language-objects';
import ProjectButton from './project-button/project-button';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { changeTvSection } from '../../store/modules/mixed-purpose-slice';
import ProjectCard from './project-card/project-card';

export default function Project() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isCardAnimated, setIsCardAnimated] = useState(false);
  const dispatch = useDispatch();

  const handleIntersection = () => {
    setIsAnimated(true);
    dispatch(
      changeTvSection({
        name: 'project1',
        link: 'https://courageous-zuccutto-ed2e98.netlify.app/',
      }),
    );
    setTimeout(() => {
      setIsCardAnimated(true);
    }, 1500);
  };

  const handleOutsideIntersection = () => {
    dispatch(changeTvSection({ name: '', link: '' }));
  };

  const ref = useIntersectionObserver(
    handleIntersection,
    handleOutsideIntersection,
    250,
    0.85,
  );
  return (
    <article className={css.card} ref={ref}>
      <section className={css.topSection}>
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
        </figure>
        <figure className={css.circleWrap}>
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
        <div className={css.description}>
          <p>
            You have to start somewhere! My first React project - simple,
            stylish... well, merely usefull, but working!
          </p>
        </div>

        <div className={css.features}>
          <ProjectCard
            text={project1Features}
            color="yellow"
            isAnimated={isCardAnimated}
          />
        </div>
        <div className={css.learned}>
          <ProjectCard
            text={project1Learned}
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
    </article>
  );
}
