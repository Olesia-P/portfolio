import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import css from './tv.module.scss';

export default function Tv() {
  const { tvSection } = useSelector(({ mixedPurpose }) => mixedPurpose);
  const [tvImage, setTvImage] = useState('/gifs/white-noise.gif');
  // eslint-disable-next-line no-console
  console.log('tvSection.name', tvSection.name);

  const decideImage = () => {
    switch (tvSection.name) {
      // case 'whitenoise':
      //   setTvImage('/gifs/white-noise.gif');
      //   break;
      case 'about':
        setTvImage('/gifs/hey.gif');
        break;
      case 'skills':
        setTvImage('/gifs/serious.gif');
        break;
      case 'project1':
        setTvImage(
          '/projects-screenshots/weather-project-screenshot-small.jpg',
        );
        break;
      case 'project2':
        setTvImage(
          '/projects-screenshots/rozetka-project-screenshot-small.png',
        );
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
    <a
      href={tvSection.link}
      target="_blank"
      rel="noreferrer"
      style={{ cursor: tvSection.link !== '' ? 'pointer' : 'default' }}
      onClick={(e) => {
        if (tvSection.link === '') {
          e.preventDefault();
        }
      }}
    >
      <aside className={css.containerFull}>
        <img className={css.tv} src="/tv.png" alt="projects-screenshots" />

        <img
          className={css.screenshot}
          src={tvImage}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          alt="screenshot"
        />

        <div className={css.background}> </div>
      </aside>
    </a>
  );
}
