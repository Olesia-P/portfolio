import React from 'react';
import css from './lang-switch.module.scss';

export default function LangSwitch() {
  return (
    <li className={css.langSwitchContainer}>
      <div className={css.langContainer}>
        <i className={css.iconContainer}>
          <img
            className={css.pokeball}
            src="/empty-pokeball.svg"
            alt="en lang"
          />
          <img className={css.flag} src="/us-lang.png" alt="en lang" />
        </i>
        {/* <p className={css.language}>EN</p> */}
      </div>
      <div className={css.langContainer}>
        <i className={css.iconContainer}>
          <img
            className={css.pokeball}
            src="/empty-pokeball.svg"
            alt="ua lang"
          />
          <img className={css.flag} src="/ua-lang.png" alt="ua lang" />
        </i>
        {/* <p className={css.language}>UA</p> */}
      </div>
    </li>
  );
}
