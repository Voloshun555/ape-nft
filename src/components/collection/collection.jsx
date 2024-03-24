import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { imageCollection } from '../data/collectionImg';
import { Slide } from '../slide/slide';
import s from './collection.module.scss';

export const Collection = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1279px)',
  });

  let slidesToShow;
  if (isMobile) {
    slidesToShow = 1;
  } else if (isTablet) {
    slidesToShow = 2;
  } else {
    slidesToShow = 4;
  }

  return (
    <section className={s.section} id="arts">
      <div className={s.container}>
        <h1 className={s.title}>COLLECTION</h1>
        <Slide items={imageCollection} slidesToShow={slidesToShow} />
      </div>
    </section>
  );
};
