import s from './menuNavList.module.scss';

export const MenuNavList = () => {
  return (
    <ul className={s.navLinkSection}>
      <li className={s.listNavSection}>
        <a href="#about">ABOUT</a>
      </li>
      <li className={s.listNavSection}>
        <a href="#m-map">M-MAP</a>
      </li>
      <li className={s.listNavSection}>
        <a href="#faq">FAQ</a>
      </li>
      <li className={s.listNavSection}>
        <a href="#arts">ARTS</a>
      </li>
      <li className={s.listNavSection}>
        <a href="#mint">MINT</a>
      </li>
    </ul>
  );
};
