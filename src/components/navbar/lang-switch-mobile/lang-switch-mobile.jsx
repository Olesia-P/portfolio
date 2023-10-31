import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import css from './lang-switch-mobile.module.scss';
import { changeLangauge } from '../../../store/modules/mixed-purpose-slice';

export default function LangSwitchMobile() {
  const { language } = useSelector(({ mixedPurpose }) => mixedPurpose);
  const dispatch = useDispatch();
  return (
    <li className={css.mobileLangSwitchContainer}>
      <img
        className={cx(css.flag, language === 'ua' && css.chosen)}
        src="/ua-lang.png"
        alt="ua lang"
        onClick={() => {
          dispatch(changeLangauge('ua'));
        }}
      />

      <img
        className={cx(css.flag, language === 'en' && css.chosen)}
        src="/uk-lang.png"
        alt="en lang"
        onClick={() => {
          dispatch(changeLangauge('en'));
        }}
      />
    </li>
  );
}
