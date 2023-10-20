import React from 'react';
import css from './skills-section.module.scss';
import GraphicList from '../graphic-list/graphic-list';
import {
  frontSkills,
  endSkills,
  otherSkills,
} from '../../utils/language-objects';

export default function SkillsSection() {
  return (
    <section className={css.card}>
      <article>
        <h2 className={css.headerSkills}>Skills</h2>
        <div className={css.commentWrapper}>
          <p className={css.comment}>
            In the fast-paced and ever-evolving world of web development, I
            believe that <strong className={css.strong1}>adaptability</strong>{' '}
            is a key. I am{' '}
            <strong className={css.strong3}>
              {' '}
              ready to learn new and old ways
            </strong>{' '}
            - whatever it takes to create a competitive product!
          </p>
        </div>
        <section className={css.skillsWrap}>
          <GraphicList
            category="Front-end"
            list={frontSkills}
            coveredItemsNumber="seven"
            meterColor="yellow"
          />
          <GraphicList
            category="Back-end"
            list={endSkills}
            coveredItemsNumber="seven"
            meterColor="green"
          />
          <GraphicList
            category="Other"
            list={otherSkills}
            coveredItemsNumber="seven"
            meterColor="blue"
          />
        </section>
      </article>
      <aside className={css.pokemonPyramidWrap}>
        <img
          className={css.pokemonPyramid}
          src="/pokemon-pyramid.png"
          alt="pokemon-pyramid.png"
        />
      </aside>
    </section>
  );
}
