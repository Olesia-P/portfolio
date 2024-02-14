import React from 'react';
import css from './about-section-mobile.module.scss';

export default function AboutSectionMobile({ aboutContent }) {
  return (
    <article className={css.cardMobile}>
      <section className={css.mobileSection}>
        <p className={css.age}>27</p>
        <img src="/ua-icon.png" className={css.flag} alt="ua-flag" />
        <h2 className={css.name}>{aboutContent.name}</h2>
        <img src="/avatar.png" alt="my-avatar" className={css.avatar} />
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
    </article>
  );
}
