import React from 'react';
import cx from 'classnames';
import css from './navbar.module.scss';
import { navEng } from '../../utils/language-objects';

export default function Navbar() {
  return (
    <header className={css.container}>
      <nav aria-label="primary-navigation">
        <ul>
          {navEng.map((element) => (
            <li key={element.name} className={cx(css[element.color])}>
              {element.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

/* <li className={css.about}>Про мене</li>
          <li className={css.skills}>Навички</li>
          <li className={css.projects}>Проекти</li>
          <li className={css.contacts}>Контакти</li>
          <li className={css.cv}>Резюме</li> */
