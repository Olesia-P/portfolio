import React from 'react';
import { useSelector } from 'react-redux';
import css from '../styles/styles-for-pages/index.module.scss';
import AboutSection from '../components/about-section/about-section';
import SkillsSection from '../components/skills-section/skills-section';
import Project from '../components/project/project';
import ProjectsSectionHeader from '../components/projects-section-header/projects-section-header';
import Break from '../components/break/break';
import Footer from '../components/footer/footer';
import { content } from '../utils/language-objects';

export default function Home() {
  const { language } = useSelector(({ mixedPurpose }) => mixedPurpose);

  return (
    <main className={css.container}>
      <h1 className={css.jobTitle}>Junior front-end developer</h1>

      <Break id="about" />
      <AboutSection aboutContent={content[language].about} />
      <Break id="skills" />
      <SkillsSection skillsContent={content[language].skills} />
      <Break id="projects" />

      <ProjectsSectionHeader projectsContent={content[language].projects} />
      <Project content={content[language].projects.project1Content} />
      <Break />
      <Project content={content[language].projects.project2Content} />
      <Break />
      <Project content={content[language].projects.project3Content} />
      <Break />
      <Footer footerContent={content[language].footer} />
    </main>
  );
}
