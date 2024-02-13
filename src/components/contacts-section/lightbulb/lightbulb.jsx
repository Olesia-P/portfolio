import React, { useState } from 'react';
import cx from 'classnames';
import { FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import css from './lightbulb.module.scss';
import useMediaQuery from '../../../hooks/useMediaQuery';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

export default function Lightbulb({ linkText, icon, link, text }) {
  const [isAnimated, setIsAnimated] = useState(false);

  const decideIcon = () => {
    if (icon === 'linkedin') {
      return (
        <span className={css.iconWrap}>
          <FaLinkedin className={css.icon} />
        </span>
      );
    }

    if (icon === 'telegram') {
      return (
        <span className={css.iconWrap}>
          <FaTelegramPlane className={css.icon} />
        </span>
      );
    }
    if (icon === 'email') {
      return (
        <span className={css.iconWrap}>
          <IoMail className={css.icon} />
        </span>
      );
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
    <figure className={css.container}>
      <div
        className={cx(css.img, isAnimated && isLowTablet && css.isIntersecting)}
        ref={contactRef}
      />
      <img src="pikachu-icon.png" alt="pikachu-icon" className={css.pikachu} />
      <div className={css.caption}>
        <a href={link} target="_blank" rel="noreferrer" className={css.link}>
          {decideIcon()}
          {linkText}
        </a>
        <p className={css.text}>{text}</p>
      </div>
    </figure>
  );
}
