import React from 'react';
import css from '../styles/styles-for-pages/index.module.scss';
import AboutSection from '../components/about-section/about-section';

export default function Home() {
  return (
    <main className={css.container}>
      <AboutSection />
    </main>
  );
}
