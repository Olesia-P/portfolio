/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { FaLinkedin, FaSkype } from 'react-icons/fa';
import css from './lightbulb.module.scss';
import useMediaQuery from '../../../hooks/useMediaQuery';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

export default function Lightbulb({ caption, icon, link }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  console.log('isHovered', isHovered);

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

  // const imageSource = isHovered ? 'lightbulb-on.png' : 'lightbulb-off.png';
  const isLowTablet = useMediaQuery(767);

  const handleIntersection = () => {
    if (isLowTablet) {
      setIsHovered(true);
    }
  };

  const handleOutsideIntersection = () => {
    if (!isLowTablet) {
      setIsHovered(false);
    }
  };

  const contactRef = useIntersectionObserver(
    handleIntersection,
    handleOutsideIntersection,
    1,
  );

  useEffect(() => {
    setIsHovered(false);
  }, [isLowTablet]);

  console.log('isLowTablet', isLowTablet);

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <figure
        className={css.container}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onFocus={handleMouseOver}
        onBlur={handleMouseOut}
      >
        <div
          // src={imageSource}
          // alt="lightbulb"
          className={cx(css.img, isHovered && css.isIntersecting)}
          ref={contactRef}
        />
        <img
          src="pikachu-icon.png"
          alt="pikachu-icon"
          className={css.pikachu}
        />
        <p className={cx(css.caption, isAnimated && css.isAnimated)}>
          {decideIcon()}

          {caption}
        </p>
      </figure>
    </a>
  );
}
