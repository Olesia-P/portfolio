import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../navbar/navbar';
import Tv from '../tv/tv';
import { eng } from '../../utils/language-objects';
import { changeContent } from '../../store/modules/mixed-purpose-slice';

// import css from './layout.module.scss';

export default function layout({ children }) {
  const { language } = useSelector(({ mixedPurpose }) => mixedPurpose);
  const { content } = useSelector(({ mixedPurpose }) => mixedPurpose);
  const dispatch = useDispatch();

  useEffect(() => {
    if (language === 'en') {
      dispatch(changeContent(eng));
    }
  }, [language]);

  return (
    content !== undefined && (
      <>
        <Navbar />
        <Tv />
        {children}{' '}
      </>
    )
  );
}
