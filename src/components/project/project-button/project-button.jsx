import React from 'react';
import cx from 'classnames';
import css from './project-button.module.scss';

export default function ProjectButton({
  text,
  color,
  href,
  // handleClick
}) {
  return (
    <button type="button" className={cx(css.buttonContainer, css[color])}>
      <a href={href}>{text}</a>
    </button>
  );
}
