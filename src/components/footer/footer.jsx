import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import css from './footer.module.scss';

export default function Footer({ footerContent }) {
  const [quote, setQuote] = useState(footerContent.quotes[0]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * footerContent.quotes.length);
    setQuote(footerContent.quotes[randomIndex]);
  }, [click, footerContent]);

  return (
    <footer className={css.container}>
      <div className={css.notch}> </div>
      <a
        className={css.link}
        href="https://github.com/Olesia-P/portfolio"
        target="_blank"
        rel="noreferrer"
      >
        <span className={css.text1}> This portfolio </span>&nbsp;
        <FaGithub className={css.icon} /> &nbsp;
        <span className={css.text2}> description and code →</span>
      </a>
      <div className={css.textWrap} onClick={() => setClick(!click)}>
        <p className={css.quote}>{quote} (c)</p>{' '}
      </div>
    </footer>
  );
}
