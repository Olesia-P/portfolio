import React from 'react';
import css from './about-section.module.scss';

export default function AboutSection() {
  return (
    <article className={css.card}>
      <div className={css.container}>
        <section className={css.leftSection}>
          <h1>Olesia Pryhun</h1>
          {/* <figure className={css.avatarWrap}> */}
          <img src="/avatar.png" alt="my-avatar" className={css.avatar} />
          {/* </figure> */}
        </section>
        <section className={css.rightSection}>
          <p className={css.age}>26</p>
          <h2 className={css.jobTitle}>Junior front-end developer</h2>
          <div className={css.textWrap}>
            <h3 className={css.title}>Background:</h3>
            <p className={css.text}>
              I had <strong>worked as a teacher</strong> for a few years before
              I decided to get into web development.
            </p>
            <h3 className={css.title}>My studying journey:</h3>
            <p className={css.text}>
              I finished a front-end course, than I continued my studies with
              <strong> a mentor</strong> (experienced web developer).
            </p>

            <h3 className={css.title}> How did I learn?</h3>
            <p className={css.text}>
              I learned through
              <strong> building projects,</strong> making{' '}
              <strong> mistakes</strong> and <strong> fixing them</strong>, over
              and over again . I used all tools possible! From docs and forums
              to Youtube and chat GPT.
            </p>
            <h3 className={css.title}> I am looking for a job now!</h3>
            <p className={css.text}>
              I am a <strong>team player </strong>. With a little guidance
              I&apos;ll help you build next cool project!
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
