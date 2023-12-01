import React from 'react';
import Navbar from '../navbar/navbar';
import Tv from '../tv/tv';
import LangPopUp from '../lang-pop-up/lang-pop-up';

// import css from './layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <LangPopUp />
      <Tv />
      {children}{' '}
    </>
  );
}
