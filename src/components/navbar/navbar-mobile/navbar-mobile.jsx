import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import { changeIsMobileMenuOpen } from '../../../store/modules/openings-slice';
import css from './navbar-mobile.module.scss';
import LangSwitchMobile from '../lang-switch-mobile/lang-switch-mobile';

export default function NavbarMobile() {
  const { content } = useSelector(({ mixedPurpose }) => mixedPurpose);

  const { isMobileMenuOpen } = useSelector(({ openings }) => openings);
  const dispatch = useDispatch();
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className={css.containerMobile}>
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
          {content.navigation.navLinks.map((element) => (
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
            href={content.navigation.cv.pdf}
            target="_blank"
            rel="noreferrer"
            className={cx(css[content.navigation.cv.color], css.navLink)}
          >
            {content.navigation.cv.name}
          </a>
          <LangSwitchMobile />
        </ul>
      </nav>
    </div>
  );
}
