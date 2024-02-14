import React from 'react';
import { useDispatch } from 'react-redux';
import css from './about-section.module.scss';
import useMediaQuery from '../../hooks/useMediaQuery';
import AboutSectionMobile from './about-section-mobile/about-section-mobile';
import { changeTvSection } from '../../store/modules/mixed-purpose-slice';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function AboutSection({ aboutContent }) {
  const isLowTablet = useMediaQuery(767);
  const dispatch = useDispatch();
  const handleIntersection = () => dispatch(changeTvSection('about'));
  const aboutRef = useIntersectionObserver(handleIntersection, undefined, 0);

  return (
    <>
      {!isLowTablet && (
        <article className={css.card} ref={aboutRef}>
          <div className={css.container}>
            <section className={css.leftSection}>
              <h2 className={css.name}>{aboutContent.name}</h2>
              <img src="/avatar.png" alt="my-avatar" className={css.avatar} />
              <aside className={css.qualities}>
                <h3 className={css.qualitiesHeader}>
                  {aboutContent.qualities.header}
                </h3>
                <ul className={css.qualitiesList}>
                  {aboutContent.qualities.qualitiesList.map((element) => (
                    <li className={css.qualitiesListItem} key={element.icon}>
                      <img
                        src={element.icon}
                        alt={element.name}
                        className={css.qualityIcon}
                      />{' '}
                      <span>{element.name}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </section>
            <section className={css.rightSection}>
              <p className={css.age}>27</p>
              <div className={css.textWrap}>
                <h3 className={css.title}>{aboutContent.background.header}</h3>
                <p className={css.text}> {aboutContent.background.text()} </p>

                <hr className={css.divider} />
                <h3 className={css.title}>{aboutContent.studies.header}</h3>
                <p className={css.text}>{aboutContent.studies.text()}</p>
                <hr className={css.divider} />
                <h3 className={css.title}>{aboutContent.learning.header}</h3>
                <p className={css.text}>{aboutContent.learning.text()}</p>
              </div>
              <img src="/ua-icon.png" className={css.flag} alt="ua-flag" />
            </section>{' '}
          </div>
        </article>
      )}
      {isLowTablet && <AboutSectionMobile aboutContent={aboutContent} />}
    </>
  );
}
