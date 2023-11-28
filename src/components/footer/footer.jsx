import React, { useState, useEffect } from 'react';
import css from './footer.module.scss';

export default function Footer({ footerContent }) {
  const [quote, setQuote] = useState(footerContent.quotes[0]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * footerContent.quotes.length);
    setQuote(footerContent.quotes[randomIndex]);
  }, [click]);

  return (
    <footer className={css.container}>
      <div className={css.notch}> </div>
      <div className={css.textWrap} onClick={() => setClick(!click)}>
        <p className={css.quote}>{quote} (c)</p>{' '}
      </div>
    </footer>
  );
}
