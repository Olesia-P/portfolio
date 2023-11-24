import React, { useEffect, useState } from 'react';
import css from './typewriter.module.scss';

export default function Typewriter({ text, delay, isAnimated }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isAnimated) {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);
        return () => clearTimeout(timeout);
      }
    } else {
      setCurrentText('');
      setCurrentIndex(0);
    }
  }, [currentIndex, delay, text, isAnimated]);

  return (
    <>
      <span>{currentText}</span>
      <span className={css.cursor}>_</span>
    </>
  );
}
