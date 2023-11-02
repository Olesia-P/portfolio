import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import css from './lang-switch.module.scss';
import useClickOutsideClose from '../../../hooks/useOutsideClickClose';
import { changeLangauge } from '../../../store/modules/mixed-purpose-slice';

export default function LangSwitch() {
  const { language } = useSelector(({ mixedPurpose }) => mixedPurpose);
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useClickOutsideClose(setIsDropdownOpen, isDropdownOpen);

  return (
    <li className={css.langSwitchContainer} ref={ref}>
      <div
        className={css.currentLang}
        onClick={() => {
          setIsDropdownOpen(!isDropdownOpen);
        }}
      >
        <img src="/mobile-phone.png" alt="" className={css.mobile} />
        <img
          className={cx(css.flag)}
          src={language === 'ua' ? '/ua-lang.png' : '/en-lang.png'}
          alt="language"
        />
      </div>
      <div className={cx(css.langDropdown, isDropdownOpen && css.open)}>
        <img
          className={cx(css.flag)}
          src="/ua-lang.png"
          alt="ua lang"
          onClick={() => {
            dispatch(changeLangauge('ua'));
            setIsDropdownOpen(false);
          }}
        />
        <img
          className={cx(css.flag, language === 'en')}
          src="/en-lang.png"
          alt="en lang"
          onClick={() => {
            dispatch(changeLangauge('en'));
            setIsDropdownOpen(false);
          }}
        />
      </div>
    </li>
  );
}
