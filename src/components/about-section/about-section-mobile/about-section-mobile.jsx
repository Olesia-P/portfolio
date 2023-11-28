import React from 'react';
import { qualitiesEng } from '../../../utils/language-objects';
import css from './about-section-mobile.module.scss';

export default function AboutSectionMobile() {
  return (
    <article className={css.cardMobile}>
      <section className={css.mobileSection}>
        <p className={css.age}>26</p>
        <img src="/ua-icon.png" className={css.flag} alt="ua-flag" />
        <h2 className={css.name}>Olesia Pryhun</h2>
        <img src="/avatar.png" alt="my-avatar" className={css.avatar} />
        <div className={css.textWrap}>
          <h3 className={css.title}>Background:</h3>
          <p className={css.text}>
            I had <strong>worked as a teacher</strong> for a few years before
            getting into web development. I am still good at explaining things
            :)
          </p>
          <hr />
          <h3 className={css.title}>My studying journey:</h3>
          <p className={css.text}>
            I finished a front-end course, then I continued my studies with
            <strong> a mentor</strong> (experienced web developer). He provided
            me with support and guidance throughout the whole process.
          </p>
          <hr />
          <h3 className={css.title}> How did I learn?</h3>
          <p className={css.text}>
            I learned through
            <strong> building projects,</strong> making{' '}
            <strong> mistakes</strong> and <strong> fixing them</strong>. I used
            all tools possible: from docs and forums to YouTube and chat GPT.
          </p>
        </div>
        <aside className={css.qualities}>
          <h3 className={css.qualitiesHeader}>Personal qualities:</h3>
          <ul className={css.qualitiesList}>
            {qualitiesEng.map((element) => (
              <li className={css.qualitiesListItem} key={element.icon}>
                <img
                  src={element.icon}
                  alt={element.name}
                  className={css.qualityIcon}
                />{' '}
                <span>{element.name}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </article>
  );
}
