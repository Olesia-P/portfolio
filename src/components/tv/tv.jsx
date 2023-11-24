import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import css from './tv.module.scss';

export default function Tv() {
  const { tvSection } = useSelector(({ mixedPurpose }) => mixedPurpose);
  const [tvImage, setTvImage] = useState('/gifs/white-noise.gif');
  // eslint-disable-next-line no-console
  // console.log('tvSection', tvSection);

  const decideImage = () => {
    switch (tvSection) {
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
        setTvImage('/gifs/pokeball.gif');
        break;
      case 'project2':
        setTvImage('/gifs/pichu.gif');
        break;
      case 'project3':
        setTvImage('/gifs/pikachu.gif');
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
  );
}
