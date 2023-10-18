import React from 'react';
import cx from 'classnames';
import css from './skills-section.module.scss';

export default function SkillsSection() {
  return (
    <article className={css.card}>
      <h2 className={css.headerSkills}>Skills</h2>
      <section className={css.skillsWrap}>
        <ul className={cx(css.skillsBlock, css.skillsBlockWhite)}>
          <li className={css.whiteSkillsItem}> </li>
          <li className={css.whiteSkillsItem}> </li>
          <li className={css.whiteSkillsItem}> </li>
          <li className={css.whiteSkillsItem}> </li>
          <li className={css.whiteSkillsItem}> </li>
          <li className={css.whiteSkillsItem}> </li>
          <li className={css.whiteSkillsItem}> </li>
          <li className={css.whiteSkillsItem}> </li>
          <li className={css.whiteSkillsItem}> </li>
        </ul>
        <ul className={cx(css.skillsBlock, css.skillsBlockColored)}>
          <li className={css.coloredSkillsItem}> </li>
          <li className={css.coloredSkillsItem}> </li>
          <li className={css.coloredSkillsItem}> </li>
          <li className={css.coloredSkillsItem}> </li>
          <li className={css.coloredSkillsItem}> </li>
          <li className={css.coloredSkillsItem}> </li>
          <li className={css.coloredSkillsItem}> </li>
          <li className={css.coloredSkillsItem}> </li>
          <li className={css.coloredSkillsItem}> </li>
        </ul>
        <ul className={cx(css.skillsBlock, css.skillsBlockMain)}>
          <li className={css.mainSkillsItem}>0</li>
          <li className={css.mainSkillsItem}>0</li>
          <li className={css.mainSkillsItem}>0</li>
          <li className={css.mainSkillsItem}>0</li>
          <li className={css.mainSkillsItem}>0</li>
          <li className={css.mainSkillsItem}>0</li>
          <li className={css.mainSkillsItem}>0</li>
          <li className={css.mainSkillsItem}>0</li>
          <li className={css.mainSkillsItem}>0</li>
        </ul>

        {/* <div className={css.filler1}> </div>
        <div className={css.filler2}> </div>
        <div className={css.filler3}> </div> */}
      </section>
      <aside className={css.familiarWith}>
        <h3 className={css.headerFamiliarWith}>I am also familiar with:</h3>
      </aside>
    </article>
  );
}
