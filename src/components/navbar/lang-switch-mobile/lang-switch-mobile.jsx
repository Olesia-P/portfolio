import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import css from './lang-switch-mobile.module.scss';
import { changeLangauge } from '../../../store/modules/mixed-purpose-slice';
import { setCookie } from '../../../utils/cookie';

export default function LangSwitchMobile() {
  const { language } = useSelector(({ mixedPurpose }) => mixedPurpose);
  const dispatch = useDispatch();

  const handleLanguageChange = (lang) => {
    dispatch(changeLangauge(lang));
    setCookie('language', lang, 3);
  };

  return (
    <li className={css.mobileLangSwitchContainer}>
      <img
        className={cx(css.flag, language === 'ua' && css.chosen)}
        src="/ua-lang.png"
        alt="ua lang"
        onClick={() => {
          handleLanguageChange('ua');
        }}
      />

      <img
        className={cx(css.flag, language === 'en' && css.chosen)}
        src="/en-lang.png"
        alt="en lang"
        onClick={() => {
          handleLanguageChange('en');
        }}
      />
    </li>
  );
}
