import React from 'react';
import Navbar from '../navbar/navbar';
// import css from './layout.module.scss';

export default function layout({ children }) {
  return (
    <>
      <Navbar />
      {/* <MobileMenu /> */}
      {children}
    </>
  );
}
