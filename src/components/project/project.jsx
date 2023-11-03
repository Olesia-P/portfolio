import React, { useState } from 'react';
import cx from 'classnames';
import css from './project.module.scss';
import { project1Skills } from '../../utils/language-objects';
import ProjectButton from './project-button/project-button';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function Project() {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleIntersection = () => {
    setIsAnimated(true);
  };
  const handleOutsideIntersection = () => {
    setIsAnimated(false);
  };

  const ref = useIntersectionObserver(
    handleIntersection,
    handleOutsideIntersection,
    0,
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
        <div className={cx(css.textBlock, css.description)}>
          <p>
            You have to start somewhere! My first React project - simple,
            stylish... well, merely usefull, but working!
          </p>
        </div>
        <div className={cx(css.textBlock, css.features)}>
          <h4 className={css.title}>Features</h4>

          <ul className={css.text}>
            <li>
              Type a city name to check today&apos;s weather and the weather
              forecast for 6 days;
            </li>
            <li>You can switch between Fahrenheit and Celsius;</li>
            <li>Error pop-up shows if the city is typed wrong;</li>
            <li>Submit button is disabled if input field is empty.</li>
          </ul>
        </div>
        <div className={cx(css.textBlock, css.learned)}>
          <h4 className={css.title}>What did I learn?</h4>

          <ul className={css.text}>
            <li>Making independent and reusable components;</li>
            <li>Making HTTP requests using Axios;</li>
            <li>Using SCSS and modules;</li>
            <li>Creating responsive layouts.</li>
          </ul>
        </div>
      </section>
      <div className={css.button1}>
        <ProjectButton
          text="code"
          color="orange"
          href="https://github.com/Olesia-P/weather-react"
        />
      </div>
      <div className={css.button2}>
        <ProjectButton
          text="site"
          color="yellow"
          href="https://courageous-zuccutto-ed2e98.netlify.app/"
        />
      </div>
    </article>
  );
}
