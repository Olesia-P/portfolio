import React from 'react';
import cx from 'classnames';
import css from './project-button.module.scss';

export default function ProjectButton({ text, color, href }) {
  return (
    <div role="button" className={cx(css.buttonContainer, css[color])}>
      <a href={href} target="_blank" rel="noreferrer">
        {text}
      </a>
    </div>
  );
}
