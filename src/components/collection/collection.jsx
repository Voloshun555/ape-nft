import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button } from '../button/button';
import { imageCollection } from '../data/collectionImg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import s from './collection.module.scss';


export const Collection = () => {
  const swiperRef = useRef(null);
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
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className={s.section} id="arts">
      <div className={s.container}>
        <h1 className={s.title}>COLLECTION</h1>
        <Swiper
          className={s.swiper}
          ref={swiperRef}
          slidesPerView={slidesToShow}
          spaceBetween={24}
          loop={false}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          
        >
          {imageCollection.map((item, index) => (
            <SwiperSlide key={index} className={s.listCollection}>
              <img
                className={s.imgCollection}
                src={item.src}
                alt="Collection"
                srcSet={item.srcSet}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Button nextSlide={nextSlide} prevSlide={prevSlide} />
    </section>
  );
};