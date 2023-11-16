import React from 'react';
import { useDispatch } from 'react-redux';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { changeTvSection } from '../../store/modules/mixed-purpose-slice';
import css from './break.module.scss';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function Break() {
  const dispatch = useDispatch();
  const handleIntersection = () =>
    dispatch(changeTvSection({ name: '', link: '' }));
  const isSmallDesktop = useMediaQuery(1440);

  const decideThresholdValue = () => (isSmallDesktop ? 0.2 : 0);

  const ref = useIntersectionObserver(
    handleIntersection,
    undefined,
    decideThresholdValue(),
  );

  return (
    <div ref={ref} className={css.container}>
      {' '}
    </div>
  );
}
