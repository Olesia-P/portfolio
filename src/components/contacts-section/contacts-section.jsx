import React from 'react';
import { useDispatch } from 'react-redux';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import cx from 'classnames';
import { changeTvSection } from '../../store/modules/mixed-purpose-slice';
import css from './contacts-section.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

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
    <div className={css.card} id="contacts" ref={contactsRef}>
      <article>
        <h2 className={css.headerContacts}>{contactsContent.header}</h2>

        <img
          src="/island.png"
          className={cx(css.island, css.islandEmail)}
          alt="island"
        />
        <img
          src="/island.png"
          className={cx(css.island, css.islandPhone)}
          alt="island"
        />
        <img
          src="/island.png"
          className={cx(css.island, css.islandLinkedin)}
          alt="island"
        />

        <ul className={css.listWrap}>
          <li>
            <a href="/" className={cx(css.contactLinkedin, css.contact)}>
              <span>
                <FaLinkedin className={css.icon} />
              </span>
              <span className={css.name}>LinkedIn</span>
            </a>
          </li>
          <li>
            <div href="/" className={cx(css.contactEmail, css.contact)}>
              <span>
                <AiOutlineMail className={css.icon} />
              </span>
              <span className={css.name}>pryhun.o.o@ukr.net</span>
            </div>
          </li>
        </ul>
      </article>
    </div>
  );
}
