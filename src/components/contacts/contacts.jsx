import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import cx from 'classnames';
import css from './contacts.module.scss';

export default function Contacts({ contactsContent }) {
  return (
    <div className={css.card} id="contacts">
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
            <a href="/" className={css.contactLinkedin}>
              <span>
                <FaLinkedin className={css.icon} />
              </span>
              <span className={css.name}>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="/" className={css.contactEmail}>
              <span>
                <AiOutlineMail className={css.icon} />
              </span>
              <span className={css.name}>pryhun.o.o@ukr.net</span>
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
}
