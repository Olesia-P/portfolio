import React from 'react';
import css from '../styles/styles-for-pages/index.module.scss';
import AboutSection from '../components/about-section/about-section';
import SkillsSection from '../components/skills-section/skills-section';
import Project from '../components/project/project';
import ProjectsSectionHeader from '../components/projects-section-header/projects-section-header';
import {
  project1Text,
  project2Text,
  project3Text,
} from '../utils/language-objects';
import Break from '../components/break/break';

export default function Home() {
  return (
    <main className={css.container}>
      <h1 className={css.jobTitle}>Junior front-end developer</h1>

      <AboutSection />
      <Break />
      <SkillsSection />

      <ProjectsSectionHeader />
      <Project text={project1Text} size="sizeS" />
      <Break />
      <Project text={project2Text} size="sizeM" />
      <Break />
      <Project text={project3Text} size="sizeL" />
    </main>
  );
}
