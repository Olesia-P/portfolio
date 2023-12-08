import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTvSection } from '../../store/modules/mixed-purpose-slice';
import css from './contacts-section.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Lightbulb from './lightbulb/lightbulb';

export default function Contacts({ contactsContent }) {
  const dispatch = useDispatch();

  const handleIntersection = () => {
    dispatch(changeTvSection('contacts'));
  };

  const contactsRef = useIntersectionObserver(
    handleIntersection,
    undefined,
    0.1,
  );
  return (
    <div className={css.card} ref={contactsRef}>
      <article>
        <h2 className={css.headerContacts}>{contactsContent.header}</h2>

        <section className={css.contacts}>
          <div className={css.bulbWapper}>
            <Lightbulb caption="LinkedIn" isLink link="/" icon="linkedin" />{' '}
          </div>
          <div className={css.bulbWapper}>
            {' '}
            <Lightbulb
              // eslint-disable-next-line quotes
              caption={`pryhun.o.o\n@ukr.net`}
              isLink={false}
              icon="email"
            />
          </div>
          <div className={css.bulbWapper}>
            <Lightbulb caption="Skype" isLink link="/" icon="skype" />
          </div>{' '}
        </section>
      </article>
    </div>
  );
}
