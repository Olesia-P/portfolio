import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import css from './tv.module.scss';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function Tv() {
  const isTablet = useMediaQuery(1024);
  const { tvSection } = useSelector(({ mixedPurpose }) => mixedPurpose);
  const [tvImage, setTvImage] = useState('/gifs/white-noise.gif');

  const decideImage = () => {
    switch (tvSection) {
      case 'about':
        setTvImage('/gifs/white-noise.gif');
        break;
      case 'skills':
        setTvImage('/gifs/serious.gif');
        break;
      default:
        setTvImage('/gifs/white-noise.gif');
    }
  };

  useEffect(() => {
    decideImage();
  }, [tvSection]);

  const handleMouseEnter = () => {
    tvImage === '/gifs/serious.gif' && setTvImage('/gifs/no-idea.gif');
  };
  const handleMouseLeave = () => {
    tvImage === '/gifs/no-idea.gif' && setTvImage('/gifs/serious.gif');
  };
  return (
    <>
      {!isTablet && (
        <aside className={css.containerFull}>
          <img className={css.tv} src="/tv.png" alt="projects-screenshots" />

          <img
            className={css.gifWhiteNoise}
            src={tvImage}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            alt="white-noise-gif"
          />
          <div className={css.background}> </div>
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
