import { useState } from 'react';
import s from './button.module.scss'

export const Button = ({ prevSlide, nextSlide }) => {
  return (
    <div className={s.wrapButton}>
      <button className={s.buttonSlide} onClick={prevSlide}>
        Prev
      </button>
      <button className={s.buttonSlide} onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};
