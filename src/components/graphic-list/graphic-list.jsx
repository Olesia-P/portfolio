import React from 'react';
import cx from 'classnames';
import css from './graphic-list.module.scss';

export default function GraphicList({
  list,
  coveredItemsNumber,
  meterColor,
  // width,
  category,
}) {
  return (
    <ul className={css.block}>
      <li
        className={cx(
          css.coloredItem,
          css[coveredItemsNumber],
          css[meterColor],
        )}
      >
        {' '}
      </li>

      <li className={css.whiteItem}> </li>

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
      <li className={css.category}>{category}</li>
    </ul>
  );
}
