import React from 'react';
import css from './tv-mobile.module.scss';

export default function TvMobile({ tvSection }) {
  return (
    <a href={tvSection.link} target="_blank" rel="noreferrer">
      <aside className={css.containerMobile}>
        <img
          className={css.console}
          src="/console.png"
          alt="projects-screenshots"
        />

        <img
          className={css.screenshot}
          src={tvSection.screenshot}
          alt="screenshot"
        />

        <div className={css.background}> </div>
      </aside>
    </a>
  );
}
