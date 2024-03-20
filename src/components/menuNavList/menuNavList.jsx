import s  from './menuNavList.module.scss';

export const MenuNavList = () => {
  return (
    <div className={s.container}>
      <ul className={s.navLinkSection}>
        <li className={s.listNavSection}>
          <a href="#">ABOUT</a>
        </li>
        <li className={s.listNavSection}>
          <a href="#">M-MAP</a>
        </li>
        <li className={s.listNavSection}>
          <a href="#">FAQ</a>
        </li>
        <li className={s.listNavSection}>
          <a href="#">ARTS</a>
        </li>
        <li className={s.listNavSection}>
          <a href="#">MINT</a>
        </li>
      </ul>
    </div>
  );
};
