import React, { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { slides } from '../data/collectionMindMap';
import { Button } from '../button/button';
import { SlideCardMindMap } from '../slideCardMindMap/slideCardMindMap';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import s from './mindMapSlide.module.scss';

export const MindMapSlide = () => {
  const swiperRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

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

  if (isMobile) {
    return (
      <>
        <Swiper
          className={s.swiper}
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={0}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop={false}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} >
              <SlideCardMindMap slide={slide} isLink={slide.type === 'link'} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Button nextSlide={nextSlide} prevSlide={prevSlide} />
      </>
    );
  } else {
    return (
      <ul className={s.slide}>
        {slides.map((slide, index) => (
          <SlideCardMindMap
            key={index}
            slide={slide}
            isLink={slide.type === 'link'}
          />
        ))}
      </ul>
    );
  }
};

 
