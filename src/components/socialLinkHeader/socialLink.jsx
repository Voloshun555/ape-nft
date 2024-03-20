import { ReactComponent as Discord } from '../../assets/icons/discord.svg';
import { ReactComponent as Logomark } from '../../assets/icons/Logomark-Blue 1.svg';
import { ReactComponent as XLogo } from '../../assets/icons/X.svg';

import s from './socialLink.module.scss';

export const SocialLink = () => {
  return (
    <nav>
      <ul className={s.nav}>
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
    </nav>
  );
};
