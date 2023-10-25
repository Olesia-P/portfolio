import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './tv.module.scss';
import { changeTvImage } from '../../store/modules/mixed-purpose-slice';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function Tv() {
  const isTablet = useMediaQuery(1024);
  const { tvImage } = useSelector(({ mixedPurpose }) => mixedPurpose);
  const [isSkills, setIsSkills] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tvImage === '/gifs/serious.gif') {
      setIsSkills(true);
    } else {
      setIsSkills(false);
    }
  }, [tvImage]);

  const handleMouseEnter = () =>
    isSkills && dispatch(changeTvImage('/gifs/no-idea.gif'));
  const handleMouseLeave = () =>
    isSkills && dispatch(changeTvImage('/gifs/serious.gif'));
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
