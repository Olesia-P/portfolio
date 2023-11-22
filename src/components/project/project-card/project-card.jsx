import React, { useState } from 'react';
import cx from 'classnames';
import css from './project-card.module.scss';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

export default function ProjectCard({
  // cardName,
  text,
  color,
}) {
  const [isAnimated, setIsAnimated] = useState(false);
  const handleIntersection = () => {
    setTimeout(() => {
      setIsAnimated(true);
    }, 500);
  };

  const ref = useIntersectionObserver(handleIntersection, undefined, 0);
  return (
    <div className={css.container} ref={ref}>
      <div className={cx(css.card, css.backCard, !isAnimated && css.close)}>
        {' '}
      </div>
      <div
        className={cx(
          css.card,
          css.faceCard,
          css[color],
          isAnimated && css.open,
        )}
      >
        <h4 className={cx(css.title, css[color])}>{text.title}</h4>
        <ul className={css.list}>
          {text.list.map((element) => (
            <li className={cx(css[color])} key={element}>
              {element}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
