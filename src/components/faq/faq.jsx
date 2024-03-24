import React, { useState } from 'react';
import { faqCollections } from '../data/collectionFaq';
import s from './faq.module.scss';

export const Faq = () => {
  const [activeItem, setActiveItem] = useState('1');

  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.title}>FAQ</h2>
        <ul className={s.wrapCollections}>
          {faqCollections.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveItem(String(index + 1))}
              className={`${s.listColection} ${activeItem === String(index + 1) ? s.active : ''}`}
            >
              <div className={s.wrapText}>
                <h3 className={s.titleColections}>{item.title}</h3>
                <p className={s.additionalInfo}>{item.text}</p>
                <img
                  srcSet={`${item.image1x} 1x, ${item.image2x} 2x`}
                  src={item.image1x}
                  alt={item.alt}
                  className={s.imgFAQ}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
