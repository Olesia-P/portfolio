import React, { useState } from 'react';
import cx from 'classnames';
import { FaLinkedin, FaSkype } from 'react-icons/fa';
import css from './lightbulb.module.scss';
// import useMediaQuery from '../../../hooks/useMediaQuery';
// import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

export default function Lightbulb({ caption, icon, isLink, link }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const decideIcon = () => {
    if (icon === 'linkedin') {
      return <FaLinkedin className={css.icon} />;
    }

    if (icon === 'skype') {
      return <FaSkype className={css.icon} />;
    }
    return null;
  };

  const handleMouseOver = () => {
    setIsHovered(true);
    setIsAnimated(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    setIsAnimated(false);
  };

  const imageSource = isHovered ? 'lightbulb-on.png' : 'lightbulb-off.png';
  // const isLowTablet = useMediaQuery(767);

  // const contactRef = useIntersectionObserver(setIsHovered(true), null, 0);

  return (
    <>
      {!isLink && (
        <figure
          className={css.container}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onFocus={handleMouseOver}
          onBlur={handleMouseOut}
        >
          <img src={imageSource} alt="lightbulb" className={css.img} />
          <img
            src="pikachu-icon.png"
            alt="pikachu-icon"
            className={css.pikachu}
          />
          <figurecaption
            className={cx(css.caption, isAnimated && css.isAnimated)}
          >
            {decideIcon()}
            {caption}
          </figurecaption>
        </figure>
      )}
      {isLink && (
        <a href={link} target="_blank" rel="noreferrer">
          <figure
            className={css.container}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onFocus={handleMouseOver}
            onBlur={handleMouseOut}
          >
            <img src={imageSource} alt="lightbulb" className={css.img} />
            <img
              src="pikachu-icon.png"
              alt="pikachu-icon"
              className={css.pikachu}
            />
            <figurecaption
              className={cx(css.caption, isAnimated && css.isAnimated)}
            >
              {decideIcon()}

              {caption}
            </figurecaption>
          </figure>
        </a>
      )}
    </>
  );
}
