import { createPortal } from 'react-dom';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { ReactComponent as Discord } from '../../assets/icons/discord.svg';
import { ReactComponent as Logomark } from '../../assets/icons/Logomark-Blue 1.svg';
import { ReactComponent as XLogo } from '../../assets/icons/X.svg';

import s from './burgerMenu.module.scss';

const BurgerMenuModal = document.getElementById('MenuBurger');

const BurgerMenu = ({ onClose }) => {
  return createPortal(
    <div className={s.container}>
      <div className={s.wraplink}>
        <a href="#" className={s.logo}>
          <LogoIcon />
        </a>
      </div>
      <ul className={s.nav}>
        <li className={s.listLink} onClick={onClose}>
          Close
        </li>
        <li className={s.listLink}>
          <a href="#" className={s.link}>
            <Discord />
          </a>
        </li>
        <li className={s.listLink}>
          <a href="#" className={s.link}>
            <Logomark />
          </a>
        </li>
        <li className={s.listLink}>
          <a href="#" className={s.link}>
            <XLogo />
          </a>
        </li>
      </ul>
      <div className={s.wrapLinkSection}>
        <nav>
          <ul className={s.navLinkSection}>
            <li className={s.listNavSection} onClick={onClose}>
              <a href="#about">ABOUT</a>
            </li>
            <li className={s.listNavSection} onClick={onClose}>
              <a href="#m-map">M-MAP</a>
            </li>
            <li className={s.listNavSection} onClick={onClose}>
              <a href="#faq">FAQ</a>
            </li>
            <li className={s.listNavSection} onClick={onClose}>
              <a href="#arts">ARTS</a>
            </li>
            <li className={s.listNavSection} onClick={onClose}>
              <a href="#mint">MINT</a>
            </li>
          </ul>
        </nav>

        <p className={s.myCopyright}>
          © YACHT APE 2024 ALL RIGHTS
          <span className={s.resorved}>RESERVED</span>
        </p>
      </div>
    </div>,

    BurgerMenuModal,
  );
};
export default BurgerMenu;
