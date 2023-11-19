import React from 'react';
import css from './screenshot.module.scss';

export default function Screenshot({ screenshot }) {
  return (
    <a href={screenshot.link} target="_blank" rel="noreferrer">
      <aside className={css.container}>
        <img
          className={css.console}
          src="/console.png"
          alt="projects-screenshots"
        />

        <img
          className={css.screenshot}
          src={screenshot.screenshotImg}
          alt="screenshot"
        />

        <div className={css.background}> </div>
      </aside>
    </a>
  );
}
