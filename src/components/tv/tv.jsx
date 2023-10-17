import React from 'react';
import css from './tv.module.scss';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function Tv() {
  const isTablet = useMediaQuery(1024);
  return (
    <>
      {!isTablet && (
        <aside className={css.containerFull}>
          <img className={css.tv} src="/tv.png" alt="projects-screenshots" />
          <img
            className={css.gifWhiteNoise}
            src="/tv-old.gif"
            alt="white-noise-gif"
          />
        </aside>
      )}
      {/* {isTablet && (
        <aside className={css.containerSmall}>
          <figure>
            <img
              className={css.gifWhiteNoise}
              src="/tv-old.gif"
              alt="white-noise-gif"
            />
            <img src="/tv-small.png" alt="tv-icon" className={css.tvIcon} />
            <figcaption className={css.tvCaption}>Click me</figcaption>
          </figure>
        </aside>
      )} */}
    </>
  );
}
