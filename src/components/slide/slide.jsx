import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '../button/button';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import s from './slide.module.scss';

export const Slide = ({ items, slidesToShow }) => {
  const swiperRef = useRef(null);

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
    <div className={s.slideContainer}>
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
        {items.map((item, index) => (
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
      <Button nextSlide={nextSlide} prevSlide={prevSlide} />
    </div>
  );
};

