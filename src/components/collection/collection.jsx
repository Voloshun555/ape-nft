import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button } from '../button/button';
import { imageCollection } from '../data/collectionImg';
import s from './collection.module.scss';

export const Collection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === imageCollection.length - 1 ? 0 : currentSlide + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? imageCollection.length - 1 : currentSlide - 1,
    );
  };

  return (
    <section className={s.section} id="arts">
      <div className={s.container}>
        <h1 className={s.title}>COLLECTION</h1>
        <ul className={s.collection}>
          {[...imageCollection, ...imageCollection]
            .slice(currentSlide, currentSlide + slidesToShow)
            .map((item, index) => (
              <li key={index} className={s.listCollection}>
                <img
                  className={s.imgCollection}
                  src={item.src}
                  alt="Collection"
                  srcSet={item.srcSet}
                />
              </li>
            ))}
        </ul>
      </div>
      <Button nextSlide={nextSlide} prevSlide={prevSlide} />
    </section>
  );
};
