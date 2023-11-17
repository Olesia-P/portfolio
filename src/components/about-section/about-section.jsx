import React from 'react';
import { useDispatch } from 'react-redux';
import css from './about-section.module.scss';
import { qualitiesEng } from '../../utils/language-objects';
import useMediaQuery from '../../hooks/useMediaQuery';
import AboutSectionMobile from './about-section-mobile/about-section-mobile';
import { changeTvSection } from '../../store/modules/mixed-purpose-slice';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function AboutSection() {
  const isLowTablet = useMediaQuery(767);

  const dispatch = useDispatch();

  const handleIntersection = () =>
    dispatch(changeTvSection({ name: 'about', link: '' }));

  const aboutRef = useIntersectionObserver(handleIntersection, undefined, 0);

  return (
    <>
      {!isLowTablet && (
        <article className={css.card} ref={aboutRef}>
          <div className={css.container}>
            <section className={css.leftSection}>
              <h2 className={css.name}>Olesia Pryhun</h2>
              <img src="/avatar.png" alt="my-avatar" className={css.avatar} />
              <aside className={css.qualities}>
                <h3 className={css.qualitiesHeader}>Personal qualities:</h3>
                <ul className={css.qualitiesList}>
                  {qualitiesEng.map((element) => (
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
            <section className={css.rightSection}>
              <p className={css.age}>26</p>
              <div className={css.textWrap}>
                <h3 className={css.title}>Background:</h3>
                <p className={css.text}>
                  I had <strong>worked as a teacher</strong> for a few years
                  before getting into web development. I am still good at
                  explaining things :)
                </p>
                <hr className={css.divider} />
                <h3 className={css.title}>My studying journey:</h3>
                <p className={css.text}>
                  I finished a front-end course, then I continued my studies
                  with
                  <strong> a mentor</strong> (experienced web developer). He
                  provided me with support and guidance throughout the whole
                  process.
                </p>
                <hr className={css.divider} />
                <h3 className={css.title}> How did I learn?</h3>
                <p className={css.text}>
                  I learned through
                  <strong> building projects,</strong> making{' '}
                  <strong> mistakes</strong> and <strong> fixing them</strong>.
                  I used all tools possible: from docs and forums to YouTube and
                  chat GPT.
                </p>
              </div>
              <img src="/ua-icon.png" className={css.flag} alt="ua-flag" />
            </section>{' '}
          </div>
        </article>
      )}
      {isLowTablet && <AboutSectionMobile />}
    </>
  );
}

//  useEffect(() => {
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       console.log('entry.isIntersecting about', entry.isIntersecting);
//       if (entry.isIntersecting) {
//         dispatch(changeTvImage('/gifs/white-noise.gif'));
//       }
//     });
//   },
// {
//   root: null,
//   rootMargin: '0px',
//   threshold: 1,
// },
//   );
//   if (aboutRef.current) {
//     observer.observe(aboutRef.current);
//   }
// }, []);
