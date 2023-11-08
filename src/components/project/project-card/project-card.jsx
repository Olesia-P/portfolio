import React from 'react';
import cx from 'classnames';
import css from './project-card.module.scss';

export default function ProjectCard({
  cardName,
  text,
  color,
  icon,
  isAnimated,
}) {
  return (
    <div className={css.container}>
      <div className={cx(css.card, css.backCard, !isAnimated && css.close)}>
        <h5 className={cx(css.cardName, css[color])}>{cardName}</h5>
      </div>
      <div
        className={cx(
          css.card,
          css.faceCard,
          css[color],
          isAnimated && css.open,
        )}
      >
        <h4 className={css.title}>{text.title}</h4>
        <ul className={css.list}>
          {text.list.map((element) => (
            <li className={cx(css[icon])} key={element}>
              {element}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
