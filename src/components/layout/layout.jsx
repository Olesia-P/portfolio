import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../navbar/navbar';
import Tv from '../tv/tv';
import { en, ua } from '../../utils/language-objects';
import { changeContent } from '../../store/modules/mixed-purpose-slice';
import LangPopUp from '../lang-pop-up/lang-pop-up';

// import css from './layout.module.scss';

export default function layout({ children }) {
  const { language } = useSelector(({ mixedPurpose }) => mixedPurpose);
  const { content } = useSelector(({ mixedPurpose }) => mixedPurpose);
  const dispatch = useDispatch();

  useEffect(() => {
    if (language === 'en') {
      dispatch(changeContent(en));
    }
    if (language === 'ua') {
      dispatch(changeContent(ua));
    }
  }, [language]);

  return (
    content !== undefined && (
      <>
        <Navbar />
        <LangPopUp />
        <Tv />
        {children}{' '}
      </>
    )
  );
}
