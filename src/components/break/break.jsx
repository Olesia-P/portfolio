import React from 'react';
import { useDispatch } from 'react-redux';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { changeTvSection } from '../../store/modules/mixed-purpose-slice';
import css from './break.module.scss';
// import useMediaQuery from '../../hooks/useMediaQuery';

export default function Break({ id, isIntersectionNeeded }) {
  const dispatch = useDispatch();
  const handleIntersection = () => dispatch(changeTvSection(' '));
  const ref = useIntersectionObserver(handleIntersection, undefined, 0.6);

  return (
    <div
      ref={isIntersectionNeeded ? ref : null}
      className={css.container}
      id={id}
    >
      {' '}
    </div>
  );
}
