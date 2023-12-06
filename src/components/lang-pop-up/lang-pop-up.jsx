import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './lang-pop-up.module.scss';
import { changeLangauge } from '../../store/modules/mixed-purpose-slice';
import { getCookie } from '../../utils/cookie';

export default function LangPopUp() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedLanguage = getCookie('language');
    if (storedLanguage) {
      setIsPopUpOpen(false);
    }
    // eslint-disable-next-line no-console
    console.log('storedLanguage', storedLanguage);
  }, [isPopUpOpen]);

  return (
    isPopUpOpen && (
      <section className={css.container}>
        <style jsx global>
          {`
            html {
              overflow: hidden;
            }
          `}
        </style>
        <article className={css.card}>
          <h3 className={css.header}>Choose language</h3>
          <div className={css.flagsWrapper}>
            <img
              src="ua-icon.png"
              className={css.flag}
              onClick={() => {
                dispatch(changeLangauge('ua'));
                setIsPopUpOpen(false);
              }}
              alt="ua flag"
            />
            <img
              src="en-icon.png"
              className={css.flag}
              onClick={() => {
                dispatch(changeLangauge('en'));
                setIsPopUpOpen(false);
              }}
              alt="uk flag"
            />
          </div>
        </article>
      </section>
    )
  );
}
