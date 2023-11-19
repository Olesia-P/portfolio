import React from 'react';
import css from './screenshot-mobile.module.scss';

export default function ScreenshotMobile({ screenshot }) {
  return (
    <a href={screenshot.link} target="_blank" rel="noreferrer">
      <aside className={css.containerMobile}>
        <img
          className={css.console}
          src="/laptop.png"
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
