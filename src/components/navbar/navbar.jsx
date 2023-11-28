import React from 'react';
import cx from 'classnames';
import css from './navbar.module.scss';
import { navEng } from '../../utils/language-objects';
import useMediaQuery from '../../hooks/useMediaQuery';
import LangSwitch from './lang-switch/lang-switch';
import NavbarMobile from './navbar-mobile/navbar-mobile';

export default function Navbar() {
  const tablet = useMediaQuery(1024);
  const scrollToSection = (sectionId) => {
    if (document) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          // block: 'center',
        });
      }
    }
  };

  return (
    <header>
      {!tablet && (
        <div className={css.container}>
          <nav aria-label="primary-navigation">
            <ul>
              {navEng.navLinks.map((element) => (
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
                href={navEng.cv.pdf}
                target="_blank"
                rel="noreferrer"
                className={cx(css[navEng.cv.color], css.navLink)}
              >
                {navEng.cv.name}
              </a>
              <LangSwitch />
            </ul>
          </nav>
        </div>
      )}
      {tablet && <NavbarMobile text={navEng} />}
    </header>
  );
}

/* <li className={css.about}>Про мене</li>
          <li className={css.skills}>Навички</li>
          <li className={css.projects}>Проекти</li>
          <li className={css.contacts}>Контакти</li>
          <li className={css.cv}>Резюме</li> */
