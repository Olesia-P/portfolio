import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import css from '../styles/styles-for-pages/index.module.scss';
import AboutSection from '../components/about-section/about-section';
import SkillsSection from '../components/skills-section/skills-section';
import Project from '../components/project/project';
import ProjectsSectionHeader from '../components/projects-section-header/projects-section-header';
import Break from '../components/break/break';
import Footer from '../components/footer/footer';
import { content } from '../utils/language-objects';
import Contacts from '../components/contacts-section/contacts-section';

export default function Home() {
  const { language } = useSelector(({ mixedPurpose }) => mixedPurpose);

  const projectsContent = [
    { id: 'project1', content: content[language].projects.project1Content },
    { id: 'project2', content: content[language].projects.project2Content },
    { id: 'project3', content: content[language].projects.project3Content },
  ];

  return (
    <main className={css.container}>
      <h1 className={css.jobTitle}>Junior front-end developer</h1>

      <section className={css.mainContentWrapper}>
        <Break id="about" />
        <AboutSection aboutContent={content[language].about} />
        <Break id="skills" />
        <SkillsSection skillsContent={content[language].skills} />
        <Break id="projects" />
      </section>

      <ProjectsSectionHeader projectsContent={content[language].projects} />

      <section className={css.mainContentWrapper}>
        {projectsContent.map((element) => (
          <Fragment key={element.id}>
            <Project content={element.content} />
          </Fragment>
        ))}

        <Contacts contactsContent={content[language].contancts} />
        <Break />
      </section>

      <Footer footerContent={content[language].footer} />
    </main>
  );
}
