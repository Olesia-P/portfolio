import React from 'react';
import css from './tv.module.scss';

export default function Tv() {
  return (
    <aside className={css.container}>
      <img className={css.tv} src="/tv.png" alt="projects-screenshots" />
      <img
        className={css.gifWhiteNoise}
        src="/tv-old.gif"
        alt="white-noise-gif"
      />
    </aside>
  );
}
