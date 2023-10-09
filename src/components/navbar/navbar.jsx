import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import css from './navbar.module.scss';
import { navEng } from '../../utils/language-objects';
import useMediaQuery from '../../hooks/useMediaQuery';
import { changeIsMobileMenuOpen } from '../../store/modules/openingsSlice';

export default function Navbar() {
  const isMobile = useMediaQuery(850);
  const { isMobileMenuOpen } = useSelector(({ openings }) => openings);
  const dispatch = useDispatch();

  return (
    <header>
      {!isMobile && (
        <div className={css.container}>
          <nav aria-label="primary-navigation">
            <ul>
              {navEng.map((element) => (
                <li key={element.name} className={cx(css[element.color])}>
                  {element.name}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      {isMobile && (
        <div className={css.containerMobile}>
          <i
            className={css.iconContainer}
            onClick={() => dispatch(changeIsMobileMenuOpen(!isMobileMenuOpen))}
          >
            <img
              src="/pokeball.png"
              alt="mobileMenuIcon"
              className={css.icon}
            />
          </i>
          <nav
            aria-label="primary-navigation"
            className={cx(isMobileMenuOpen && css.open)}
          >
            <ul>
              {navEng.map((element) => (
                <li key={element.name} className={cx(css[element.color])}>
                  {element.name}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

/* <li className={css.about}>Про мене</li>
          <li className={css.skills}>Навички</li>
          <li className={css.projects}>Проекти</li>
          <li className={css.contacts}>Контакти</li>
          <li className={css.cv}>Резюме</li> */
