import React from 'react';
import { useDispatch } from 'react-redux';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { changeTvSection } from '../../store/modules/mixed-purpose-slice';

export default function Break() {
  const dispatch = useDispatch();
  const handleIntersection = () =>
    dispatch(changeTvSection({ name: '', link: '' }));

  const ref = useIntersectionObserver(handleIntersection, undefined, 0.5);

  return (
    <div ref={ref}>
      <br />{' '}
    </div>
  );
}
