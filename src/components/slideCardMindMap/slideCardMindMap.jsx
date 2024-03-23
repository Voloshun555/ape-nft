import React from 'react';
import s from './slideCardMindMap.module.scss';

export const SlideCardMindMap = ({ slide, isLink }) => {
  return (
    <li className={s.slideList} style={isLink ? { padding: '0' } : {}}>
      {isLink ? (
        <a href={slide.link} className={s.link}>
          <p className={s.icon}>{slide.svg}</p>
          <h3 className={s.title}>
            {Array.isArray(slide.heading)
              ? slide.heading.map((part, index) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < slide.heading.length - 1 && <br />}
                  </React.Fragment>
                ))
              : slide.heading}
          </h3>
        </a>
      ) : (
        <>
          <p className={s.text}>{slide.text}</p>
          <h3 className={s.title}>
            {Array.isArray(slide.heading)
              ? slide.heading.map((part, index) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < slide.heading.length - 1 && <br />}
                  </React.Fragment>
                ))
              : slide.heading}
          </h3>
        </>
      )}
    </li>
  );
};
