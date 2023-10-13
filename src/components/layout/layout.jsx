import React from 'react';
import Navbar from '../navbar/navbar';
import Tv from '../tv/tv';
// import css from './layout.module.scss';

export default function layout({ children }) {
  return (
    <>
      <Navbar />
      <Tv />
      {/* <MobileMenu /> */}
      {children}
    </>
  );
}
