import React from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import css from './navbar.module.scss';
import { content } from '../../utils/language-objects';
import useMediaQuery from '../../hooks/useMediaQuery';
import LangSwitch from './lang-switch/lang-switch';
import NavbarMobile from './navbar-mobile/navbar-mobile';

export default function Navbar() {
  const { language } = useSelector(({ mixedPurpose }) => mixedPurpose);

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
              <LangSwitch />
            </ul>
          </nav>
        </div>
      )}
      {tablet && <NavbarMobile />}
    </header>
  );
}
