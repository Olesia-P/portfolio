import React from 'react';
import css from './anchor.module.scss';

export default function Anchor({ id }) {
  return (
    <div className={css.container}>
      <div id={id} className={css.anchor} />
    </div>
  );
}
