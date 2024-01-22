/* eslint-disable no-console */
import React, { useState } from 'react';
import cx from 'classnames';
import { FaLinkedin, FaSkype } from 'react-icons/fa';
import css from './lightbulb.module.scss';
import useMediaQuery from '../../../hooks/useMediaQuery';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

export default function Lightbulb({ caption, icon, link }) {
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

  const isLowTablet = useMediaQuery(767);

  const handleIntersection = () => {
    setTimeout(() => {
      setIsAnimated(true);
    }, 500);
  };

  const handleOutsideIntersection = () => {
    setTimeout(() => {
      setIsAnimated(false);
    }, 500);
  };

  const contactRef = useIntersectionObserver(
    handleIntersection,
    handleOutsideIntersection,
    0.7,
  );

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <figure className={css.container}>
        <div
          className={cx(
            css.img,
            isAnimated && isLowTablet && css.isIntersecting,
          )}
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
