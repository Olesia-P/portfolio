import React, { useState } from 'react';
import cx from 'classnames';
import css from './graphic-list-mobile.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function GraphicList({ list, meterColor, category }) {
  const [isAnimated, setIsAnimated] = useState(false);
  const handleIntersection = () => {
    setIsAnimated(true);
  };

  const ref = useIntersectionObserver(handleIntersection, undefined, 0);

  return (
    <ul className={css.blockMobile} ref={ref}>
      <li
        className={cx(
          css.coloredItem,
          css[meterColor],
          isAnimated && css.animated,
        )}
      >
        {' '}
      </li>

      <li className={css.whiteItem}> </li>
      <li className={css.category}>{category}</li>
      {list.map((element) => (
        <li className={css.mainItem} key={element.id2}>
          <img
            src={element.icon}
            alt={element.name}
            className={cx(css.icon, css[element.iconStyle])}
          />{' '}
          {element.name}
        </li>
      ))}
    </ul>
  );
}
