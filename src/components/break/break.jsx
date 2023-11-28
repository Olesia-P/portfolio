import React from 'react';
import { useDispatch } from 'react-redux';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { changeTvSection } from '../../store/modules/mixed-purpose-slice';
import css from './break.module.scss';
// import useMediaQuery from '../../hooks/useMediaQuery';

export default function Break({ id }) {
  const dispatch = useDispatch();
  const handleIntersection = () =>
    dispatch(changeTvSection({ name: '', link: '' }));
  const ref = useIntersectionObserver(handleIntersection, undefined, 0);

  return (
    <div ref={ref} className={css.container} id={id}>
      {' '}
    </div>
  );
}
