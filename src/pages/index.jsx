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
import Anchor from '../components/anchor/anchor';

export default function Home() {
  const { language } = useSelector(({ mixedPurpose }) => mixedPurpose);

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
        {content[language].projects.projectsArray.map((element) => (
          <Fragment key={element.title}>
            <Project content={element} />
            <Break />
          </Fragment>
        ))}
        <Anchor id="contacts" />
        <Contacts contactsContent={content[language].contancts} />
        <Break />
      </section>

      <Footer footerContent={content[language].footer} />
    </main>
  );
}
