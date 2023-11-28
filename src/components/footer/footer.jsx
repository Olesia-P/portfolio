import React, { useState, useEffect } from 'react';
import css from './footer.module.scss';

export default function Footer() {
  const quotes = [
    'There is always one more bug to fix',
    'If debugging is the process of removing bugs, then programming must be the process of putting them in',
    'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code',
    'If, at first, you do not succeed, call it version 1.0',
    'Programmer: A machine that turns coffee into code',
    'When I wrote this code, only God and I understood what I did. Now only God knows',
    'Software and cathedrals are much the same — first we build them, then we pray',
    'Programming is the art of telling another human being what one wants the computer to do',
    'It’s not a bug; it’s an undocumented feature',
    'A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don’t touch!',
    'Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.',
    'How many programmers does it take to change a light bulb? None, that’s a hardware problem.',
    'You never finish a program, you just stop working on it',
    'I don`t care if it works on your machine! We are not shipping your machine!',
    'There is only one thing more painful than learning from experience and that is not learning from experience',
    'If the code doesn`t bother you, don`t bother it',
  ];

  const [quote, setQuote] = useState(quotes[0]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
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
