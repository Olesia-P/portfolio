import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import { changeIsMobileMenuOpen } from '../../../store/modules/openings-slice';
import css from './navbar-mobile.module.scss';
import LangSwitchMobile from '../lang-switch-mobile/lang-switch-mobile';
import useClickOutsideClose from '../../../hooks/useOutsideClickClose';
import { content } from '../../../utils/language-objects';

export default function NavbarMobile() {
  const { language } = useSelector(({ mixedPurpose }) => mixedPurpose);
  const { isMobileMenuOpen } = useSelector(({ openings }) => openings);
  const dispatch = useDispatch();

  const changeMobileWithDispatch = (value) => {
    dispatch(changeIsMobileMenuOpen(value));
  };

  const navMobRef = useClickOutsideClose(
    changeMobileWithDispatch,
    isMobileMenuOpen,
  );

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className={css.containerMobile} ref={navMobRef}>
      <i
        className={cx(css.iconContainer, isMobileMenuOpen && css.open)}
        onClick={() => dispatch(changeIsMobileMenuOpen(!isMobileMenuOpen))}
      >
        <img
          src="/pokeball-icon.png"
          alt="mobileMenuIcon"
          className={css.icon}
        />
      </i>{' '}
      <i
        className={cx(css.iconContainerOpened, isMobileMenuOpen && css.open)}
        onClick={() => dispatch(changeIsMobileMenuOpen(!isMobileMenuOpen))}
      >
        <img
          src="/opened-pokeball.png"
          alt="mobileMenuIcon"
          className={css.iconOpened}
        />
      </i>
      <nav
        aria-label="primary-navigation"
        className={cx(isMobileMenuOpen && css.open)}
      >
        <ul>
          {content[language].navigation.navLinks.map((element) => (
            <li
              key={element.name}
              className={cx(css[element.color], css.navLink)}
              onClick={() => {
                scrollToSection(element.sectionId);
              }}
            >
              {element.name}
            </li>
          ))}
          <a
            href={content[language].navigation.cv.pdf}
            target="_blank"
            rel="noreferrer"
            className={cx(
              css[content[language].navigation.cv.color],
              css.navLink,
            )}
          >
            {content[language].navigation.cv.name}
          </a>
          <LangSwitchMobile />
        </ul>
      </nav>
    </div>
  );
}
