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
import Footer from '../components/footer/footer';

export default function Home() {
  return (
    <main className={css.container}>
      <h1 className={css.jobTitle}>Junior front-end developer</h1>
      <Break id="about" />

      <AboutSection />
      <Break id="skills" />
      <SkillsSection />
      <Break id="projects" />
      <ProjectsSectionHeader />
      <Project text={project1Text} />
      <Break />
      <Project text={project2Text} />
      <Break />
      <Project text={project3Text} />
      <Break />
      <Footer />
    </main>
  );
}
