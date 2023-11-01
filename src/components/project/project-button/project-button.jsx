import React from 'react';
import cx from 'classnames';
import css from './project-button.module.scss';

export default function ProjectButton({
  text,
  color,
  // handleClick
}) {
  return (
    <button type="button" className={cx(css.buttonContainer, css[color])}>
      {text}
    </button>
  );
}
