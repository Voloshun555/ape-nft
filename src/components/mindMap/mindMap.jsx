import { MindMapSlide } from '../mindMapSlide/mindMapSlide';
import s from './mindMap.module.scss';

export const MindMap = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.title}>MIND map</h2>
        <MindMapSlide />
      </div>
    </section>
  );
};
